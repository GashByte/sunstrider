import { EnvironmentAnalyst } from "../index/EnvironmentAnalyst";
import { getAllValue } from "./DatabaseValueEnum";

type solverType = "open" | "add" | "get" | "put" | "delete" | "deleteAll";
type solverEvent = "add" | "get" | "put" | "delete";

/**
 * IndexedDatabase is a low-level API for client-side storage of significant amounts of structured data.
 *
 * Actually, IndexedDatabase does not strictly demand encapsulation. However, to trim down the using handling complexity,
 * we’ve wrapped each action into a Promise for breeze-like operations.
 */
export class IndexedDatabase {
  private static readonly instance: IndexedDatabase = new IndexedDatabase();

  private readonly DatabaseName: string = "SunstriderDatabase";
  private readonly DatabaseStoreName: string = "SunstriderDatabaseStore";
  private readonly DatabaseVersion: number = 5;

  private indexedDatabase?: IDBFactory;

  /**
   * Singleton ensures a class has only one instance, providing global access to it
   * @returns return the instance of IndexedDatabase
   */
  public static getInstance = (): IndexedDatabase => {
    return this.instance || new IndexedDatabase();
  };

  /**
   * In order to save resources as much as possible,
   * we use singleton pattern to ensure that there is only one instance of IndexedDatabase
   */
  private constructor() {
    if (!window.indexedDB) {
      console.error("Your browser does not support IndexedDB!");
      throw new Error("Your browser does not support IndexedDB");
    }

    this.indexedDatabase = window.indexedDB;
  }

  /**
   * To open the default indexeddatabase or create a new database for the diversification
   * @param DatabaseName indexeddatabase name
   * @param DatabaseStoreName indexeddatabase store name
   * @param DatabaseVersion indexeddatabase version
   * @returns return the indexeddatabase or undefined
   */
  private openDatabase(
    DatabaseName: string = this.DatabaseName,
    DatabaseVersion: number = this.DatabaseVersion,
  ): Promise<void | IDBDatabase> {
    if (!this.indexedDatabase) {
      throw new Error("indexedDatabase is undefined");
    }

    return new Promise<void | IDBDatabase>(async (resolve, reject) => {
      const request = this.indexedDatabase!.open(DatabaseName, DatabaseVersion);
      this.requestSolver(request, "open")
        .then((v) => {
          resolve(v);
        })
        .catch((e) => {
          reject(e);
        });
    }).catch((error) => {
      console.error(error); // <important!> error error must in front of console.error
    });
  }

  public addData(data: { id: string; value: any }): Promise<void> {
    return new Promise<void>((s, r) => {
      this.openDatabase()
        .then((database) => {
          const request = this.requestEvent(database!, "add", { data: data });
          this.requestSolver(request, "add")
            .then(() => {
              s();
            })
            .catch((e) => {
              r(e);
            });
        })
        .catch((e) => {
          r(e);
        });
    });
  }

  public getData(key: string): Promise<any> {
    return new Promise<any>((s, r) => {
      this.openDatabase()
        .then((database) => {
          const request = this.requestEvent(database!, "get", { key: key });
          this.requestSolver(request, "get")
            .then((v) => {
              s(v);
            })
            .catch((e) => {
              r(e);
            });
        })
        .catch((e) => {
          r(e);
        });
    });
  }

  public updateData(data: { id: string; value: any }): Promise<void> {
    return new Promise<void>((s, r) => {
      this.openDatabase()
        .then((database) => {
          const request = this.requestEvent(database!, "put", { data: data });
          this.requestSolver(request, "put")
            .then(() => {
              s();
            })
            .catch((e) => {
              r(e);
            });
        })
        .catch((e) => {
          r(e);
        });
    });
  }

  public deleteData(key: string): Promise<void> {
    return new Promise<void>((s, r) => {
      this.openDatabase()
        .then((database) => {
          const request = this.requestEvent(database!, "delete", { key: key });
          this.requestSolver(request, "delete")
            .then(() => {
              s();
            })
            .catch((e) => {
              r(e);
            });
        })
        .catch((e) => {
          r(e);
        });
    });
  }

  public deleteAllData(): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      if (EnvironmentAnalyst.UserAccessStatus()) {
        console.error("This function is not available for online user.");
        reject("This function is not available for online user.");
      }

      if (!EnvironmentAnalyst.DevelopmentEnvironment()) {
        console.error(
          "This function is only available for development environment.",
        );
        reject("This function is only available for development environment.");
      }

      const request = window.indexedDB.deleteDatabase(this.DatabaseName);

      request.onerror = (event: any) => {
        console.error("delete database failed | " + event.target.error);
        reject(event.target.error);
      };

      request.onsuccess = (event: any) => {
        resolve("delete database successfully");
      };
    });
  }

  private requestEvent = (
    database: void | IDBDatabase,
    event: solverEvent,
    props?: {
      key?: string;
      data?: { id: string; value: any };
    },
  ): IDBRequest<any> | IDBOpenDBRequest => {
    if (!database) {
      throw new Error("database is undefined");
    }

    let visitAccess: IDBTransactionMode;
    switch (event) {
      case "add":
      case "put":
      case "delete":
        visitAccess = "readwrite" as IDBTransactionMode;
        break;
      case "get":
        visitAccess = "readonly" as IDBTransactionMode;
        break;
    }

    const objectStore = database
      .transaction(this.DatabaseStoreName, visitAccess)
      .objectStore(this.DatabaseStoreName);
    if (props?.key && (event === "get" || event === "delete")) {
      return objectStore[event](props.key);
    } else if (props?.data && (event === "add" || event === "put")) {
      return objectStore[event](props?.data);
    } else {
      throw new Error("Invalid event or props");
    }
  };

  private requestSolver = async (
    request: IDBRequest<any> | IDBOpenDBRequest,
    solverType: solverType,
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        resolve(event.target.result);
      };

      request.onerror = (event: any) => {
        console.error(`error(s) in ${solverType}`, event.target.error);
        reject(event.target.error);
      };

      if (request instanceof IDBOpenDBRequest) {
        request.onblocked = (event: any) => {
          console.error(
            "Database has been blocked, please close other tabs and try again.",
          );
          reject(event.target.error);
        };

        request.onupgradeneeded = (event: any) => {
          const database = event.target.result;
          if (!database.objectStoreNames.contains(this.DatabaseStoreName)) {
            database.createObjectStore(this.DatabaseStoreName, {
              keyPath: "id",
            });
          }
        };
      }
    }).catch((error) => {
      console.error(error); // <important!> error error must in front of console.error
    });
  };

  /**
   * This function is used to initialize the database
   */
  public async initDatabase() {
    let queue = Promise.resolve();

    const addToQueue = (task: { id: string; value: any }) => {
      queue = queue.then(async () => {
        if (await IndexedDatabase.getInstance().getData(task.id)) {
          return;
        }

        await IndexedDatabase.getInstance()
          .addData(task)
          .catch((error) => {
            console.error(error);
          });
      });
    };

    const value = getAllValue();
    value.forEach((v) => {
      addToQueue({ id: v.id, value: v.value });
    });
  }
}
