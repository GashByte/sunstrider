<script setup lang="ts">
import { ref } from "vue";
import { EnvironmentAnalyst } from "@/srcipts/index/EnvironmentAnalyst";
import { Database } from "@/srcipts/database/DataBase";
import { DatabaseValueEnum } from "@/srcipts/database/DatabaseValueEnum";

const database = Database.getDatabase();

const value = ref(null);

const anchorClickEvent = (e: any) => {
  window.scrollTo({
    top: document.querySelector(e.target.hash).offsetTop,
    behavior: "smooth",
  });
};

const color = ref(
  document.querySelector("html")?.getAttribute("data-theme") === "Light"
    ? "#000000"
    : "#FFFFFF",
);

const githubAnchorClickEvent = () => {
  if (EnvironmentAnalyst.DevelopmentEnvironment()) {
    window.open("https://github.com/MeseOBeyond/sunstrider");
  } else {
    window.open("https://www.meseotech.org/sunstrider/github-information/");
  }
};

const switchActive = ref(
  document.querySelector("html")?.getAttribute("data-theme") === "Light"
    ? false
    : true,
);

const switchChangeHandle = async (value: boolean) => {
  const v = value ? "Dark" : "Light";
  document.querySelector("html")?.setAttribute("data-theme", v);
  color.value =
    document.querySelector("html")?.getAttribute("data-theme") === "Light"
      ? "#000000"
      : "#FFFFFF";
  await database.updateData({
    id: DatabaseValueEnum.persSunstriderColorMode,
    value: v,
  });
};
</script>

<template>
  <div class="get-started-header-container">
    <div class="left-container">
      <a href="https://www.sunstrider.today/">
        <img src="/SunstriderLogo-no-text-no-background.png" alt="SunStrider" />
      </a>
      <span>Sunstrider</span>
      <div class="header-separator"></div>
      <div class="options-group">
        <a href="#why-choose-us" @click="anchorClickEvent">
          <n-button quaternary :color="color"> Why choose us </n-button>
        </a>
        <a href="#documentation" @click="anchorClickEvent">
          <n-button quaternary :color="color"> Documentation </n-button>
        </a>
        <a href="#about-us" @click="anchorClickEvent">
          <n-button quaternary :color="color"> About us </n-button>
        </a>
        <a href="#contact-us" @click="anchorClickEvent">
          <n-button quaternary :color="color"> Contact us </n-button>
        </a>
        <a href="#get-started" @click="anchorClickEvent">
          <n-button quaternary :color="color"> Get Started </n-button>
        </a>
      </div>
    </div>
    <div class="right-container">
      <n-switch v-model:value="switchActive" @update:value="switchChangeHandle">
        <template #checked> Dark </template>
        <template #unchecked> Light </template>
      </n-switch>
      <a href="https://www.meseotech.org/">
        <n-button quaternary :color="color"> Official Website </n-button>
      </a>
      <n-button quaternary :color="color" :on-click="githubAnchorClickEvent">
        Github
      </n-button>
      <n-gradient-text type="success">Ver: 1.0.1.1</n-gradient-text>
    </div>
  </div>
</template>

<style scoped>
.right-container {
  gap: 15px;
  position: absolute;
  right: 25px;
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
}

.header-separator {
  margin-left: 45px;
  height: 30px;
  width: 1px;
  background: var(--separator-line-color);
}

.options-group {
  display: flex;
  align-items: center;
  margin-left: 25px;
  gap: 15px;
}

.get-started-header-container {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.left-container {
  position: relative;
  left: 25px;
  display: flex;
  align-items: center;
}

a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--font-color);
  width: fit-content;
}

img {
  width: 45px;
  height: 45px;
}

.left-container span {
  width: fit-content;
  height: fit-content;
  user-select: none;
  font-size: 1.5rem;
  margin-left: 15px;
}
</style>
