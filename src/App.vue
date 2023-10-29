<script setup lang="ts">
import MainApp from "./views/MainApp.vue";
</script>

<template>
  <NNotificationProvider class="notification-provider">
    <MainApp />
  </NNotificationProvider>
  <!--蔚蓝档案你气死我了，我的泳装白洲梓，直接吃了一井，我小春才50抽就出了，真暗调我概率是吧？-->
</template>

<style scoped>
.notification-provider {
  pointer-events: none;
  height: 100%;
  width: 100%;
}
</style>
