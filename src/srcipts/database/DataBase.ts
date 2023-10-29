import { SQLServer } from "./SQLServer";
import { IndexedDatabase } from "./IndexedDataBase";
import { EnvironmentAnalyst } from "../index/EnvironmentAnalyst";

type databaseType =
  | IndexedDatabase
  | SQLServer
  | "default_offline"
  | "default_online";

/**
 * This class is used to manage the database
 * @file DataBase.ts
 */
export class Database {
  public static getDatabase = (): IndexedDatabase => {
    return IndexedDatabase.getInstance();

    /*
        if(EnvironmentAnalyst.DevelopmentEnvironment()){
            return IndexedDatabase.getInstance();
        }

        if (!EnvironmentAnalyst.UserAccessStatus()) {
            return IndexedDatabase.getInstance();
        } else {
            return new SQLServer();
        }*/
  };

  public static getValue = async (props: {
    item: string;
    database?: databaseType;
  }): Promise<any> => {
    if (!props.database) {
      // use default database
      props.database = Database.getDatabase();
    }

    if (
      props.database === "default_offline" ||
      props.database === "default_online"
    ) {
      throw new Error("Invalid database type");
    }

    if (props.database instanceof SQLServer) {
      throw new Error("SQLServer is not supported yet");
    }

    return await props.database.getData(props.item);
  };
}
