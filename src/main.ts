import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import NaiveUi from "naive-ui";

import App from "./App.vue";
import router from "./router";

import { Database } from "./srcipts/database/DataBase";
import { DatabaseValueEnum } from "./srcipts/database/DatabaseValueEnum";

const database = Database.getDatabase();
database.updateData({
  id: DatabaseValueEnum.userSunstriderLaunchTimes,
  value:
    (
      await Database.getValue({
        item: DatabaseValueEnum.userSunstriderLaunchTimes,
      })
    )["value"] + 1,
});

const colorMode = (await Database.getValue({item: DatabaseValueEnum.persSunstriderColorMode}))["value"];
if(colorMode) {
  document.querySelector('html')?.setAttribute('data-theme', colorMode);
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(NaiveUi);

app.mount("#app");
