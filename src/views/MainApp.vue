<script lang="ts">
import { h, defineComponent } from "vue";
import { EnvironmentAnalyst } from "../srcipts/index/EnvironmentAnalyst";
import { Database } from "@/srcipts/database/DataBase";
import { useNotification, NAvatar } from "naive-ui";
import { DatabaseValueEnum } from "@/srcipts/database/DatabaseValueEnum";

// import GetStarted from "./GetStarted.vue";
// import GetStartedHeader from "../components/header/GetStartedHeader.vue";

import BeforeUseView from "./BeforeUseView.vue";

const database = Database.getDatabase();

const before_use_init = await Database.getValue({
  item: DatabaseValueEnum.useSunstriderBeforeUsePrepareInit,
});

export default {
  name: "MainApp",
  mounted() {
    const notification = useNotification();
    if (
      !EnvironmentAnalyst.UserAccessStatus() &&
      !EnvironmentAnalyst.DevelopmentEnvironment()
    ) {
      notification.create({
        title: "Offline-mode",
        description: "From MeseOTech Co. Ltd., Sunstrider Project Team",
        content: `You are currently using Offline Mode to access Sunstrider, 
and whether you are a developer or user, you will inevitably encounter some restrictions during the use process. 
If you are a user, please visit: https://www.sunstrider.today/ Or https://www.meseotech.org/sunstrider/ Enter the sunstrider. 
If you are a developer, please visit https://dev.sunstrider.today/ {Your ID} Inspection development, 
submit a report after the inspection is completed.`,
        meta: "2023-10-29 13:22:30",
        keepAliveOnHover: true,
        avatar: () =>
          h(NAvatar, {
            size: "small",
            round: true,
            src: "/SunstriderLogo-no-text.png",
          }),
        duration: 3000,
      });
    }
  },
  data() {
    return {
      before_use_init: before_use_init,
    };
  },
  components: {
    // GetStartedHeader,
    // GetStarted,
    BeforeUseView,
  },
};
</script>

<template>
  <div class="main-app">
    <header>
      <!--<GetStartedHeader v-if="!before_use_init" />-->
    </header>
    <main>
      <!--<GetStarted v-if="!before_use_init" />-->
      <BeforeUseView
        v-if="!before_use_init"
        style="overflow: hidden !important"
      />
    </main>
  </div>
</template>

<style scoped>
/*
main {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.main-app {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}

header {
  background: var(--background-color);
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5vh;
  min-height: 50px;
  max-height: 70px;
  border-bottom: 1px solid var(--separator-line-color);
}

main {
  background: var(--background-color);
  width: 100%;
  height: 100%;
}*/
</style>
