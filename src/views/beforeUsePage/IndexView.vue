<script setup lang="ts">
import IndexViewCard from "@/components/Card/IndexViewCard.vue";

import { Database } from "@/srcipts/database/DataBase";
import { DatabaseValueEnum } from "@/srcipts/database/DatabaseValueEnum";

import { ref } from "vue";

const database = Database.getDatabase();

const switchActive = ref(
  document.querySelector("html")?.getAttribute("data-theme") === "Light"
    ? false
    : true,
);

const color = ref(
  document.querySelector("html")?.getAttribute("data-theme") === "Light"
    ? "#000000"
    : "#FFFFFF",
);

async function colorSwitchChangeHandle(value: boolean) {
  const v = value ? "Dark" : "Light";
  document.querySelector("html")?.setAttribute("data-theme", v);
  (color.value =
    document.querySelector("html")?.getAttribute("data-theme") === "Light"
      ? "#000000"
      : "#FFFFFF"),
    await database.updateData({
      id: DatabaseValueEnum.persSunstriderColorMode,
      value: v,
    });
}
</script>

<template>
  <div class="before-use-view-index-view">
    <div class="top-right-options-group">
      <div class="lang-select">
        <span>ZH</span>
        <div class="separator-line"></div>
        <a href="https://www.sunstrider.today/en">EN</a>
      </div>
      <n-switch
        id="color-switch"
        v-model:value="switchActive"
        @update:value="colorSwitchChangeHandle"
      >
        <template #checked-icon> 🌙 </template>
        <template #unchecked-icon> 🌞 </template>
        <template #checked> Dark </template>
        <template #unchecked> Light </template>
      </n-switch>
    </div>
    <div class="top-center-part">
      <div class="img-part">
        <img
          src="/MeseOC.png"
          style="width: 156px; height: 156px"
          alt="MeseOTech"
        />
        <img
          src="/SunstriderLogo-no-text-no-background.png"
          style="width: 116px; height: 116px"
          alt="Sunstrider"
        />
      </div>
      <div class="center-line"></div>
      <div class="slogan">
        <p>TECH OTAKUS build A NEW FUTURE</p>
        <p>技术宅创造新未来</p>
      </div>
    </div>
    <div class="top-left-content">
      <div class="title">
        MeseO
        <br />
        Sunstrider
      </div>
      <div class="description">
        <span>
          逐日者是由喵森科技有限公司自2023年全资开发的一款多功能集成项目,
          经过一年的开发历程, 逐日者正式出现在大家的眼中。 如今,
          逐日者正在逐步推进,
          向着更宽广无边的世界中发展。我们立志让每一个人都可以用上先进的科技技术,
          让科技对所有人来说都不再遥远。
          <br />
          ......也许我们会很慢, 但是我们会一直走下去, 直到我们的梦想实现。
        </span>
      </div>
      <div class="options-group">
        <a href="https://www.meseotech.org/" id="anchor-1"
          >Learn more MeseOTech</a
        >
        <div class="anchor-svg" id="arrow-1">
          <svg
            width="76"
            height="16"
            viewBox="0 0 76 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.7071 8.70711C76.0976 8.31658 76.0976 7.68342 75.7071 7.29289L69.3431 0.928932C68.9526 0.538408 68.3195 0.538408 67.9289 0.928932C67.5384 1.31946 67.5384 1.95262 67.9289 2.34315L73.5858 8L67.9289 13.6569C67.5384 14.0474 67.5384 14.6805 67.9289 15.0711C68.3195 15.4616 68.9526 15.4616 69.3431 15.0711L75.7071 8.70711ZM0 9H75V7H0V9Z"
              :fill="color"
            />
          </svg>
        </div>
        <a href="#" id="anchor-2">Learn more Sunstrider</a>
        <div class="anchor-svg" id="arrow-2">
          <svg
            width="76"
            height="16"
            viewBox="0 0 76 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.7071 8.70711C76.0976 8.31658 76.0976 7.68342 75.7071 7.29289L69.3431 0.928932C68.9526 0.538408 68.3195 0.538408 67.9289 0.928932C67.5384 1.31946 67.5384 1.95262 67.9289 2.34315L73.5858 8L67.9289 13.6569C67.5384 14.0474 67.5384 14.6805 67.9289 15.0711C68.3195 15.4616 68.9526 15.4616 69.3431 15.0711L75.7071 8.70711ZM0 9H75V7H0V9Z"
              :fill="color"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="top-right-content">
      <IndexViewCard
        title="更强大的"
        description="逐日者在自主研发功能的前提下, 将原来需要打开几个甚至十几个网站的状况缩减到只需要在逐日者一个网站中就可以完成。并且通过开发者们日复一日的辛勤劳作, 属于我们自己的自研科技层出不穷, 并且我们的初衷任然不变: 在尽可能免费的情况下, 无广告、无收费的将内容展现给每一个人。"
        link="#GetStarted"
      />
      <IndexViewCard
        title="更快速地"
        description="逐日者在绝大部分UI自主设计、借助第三方UI库的开发环境下, 依然能够在动画启用的情况中流畅的运行。当然, 流畅的不仅仅是页面的动画效果, 重心更是更快的算法、网络传输与各种有严重耽误用户时间嫌疑的函数都将被我们消除。当然你也可以关闭所有动画的展示, 那会许不太美观好看。"
        link="#GetStarted"
      />
      <IndexViewCard
        title="更专业的"
        description="逐日者的开发初衷是为个人设计, 但随着需求越来越多、需求覆盖范围越来越广, 我们的网站不得不实现一些只用相关专业知识才能够理解的功能。但是即便如此, 我们也不会将简单的功能除去, 而是选择了保留, 并且多次对UI重新化简、优化。保证将逐日者时时刻刻都以最鼎盛、最繁荣的状态展示给大家"
        link="#GetStarted"
      />
    </div>
    <div class="bottom-center-container">
      <div class="mouse-svg">
        <svg
          width="34.000000"
          height="52.000000"
          viewBox="0 0 34 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <filter
              id="filter_7_7_dd"
              x="0.000000"
              y="0.000000"
              width="34.000000"
              height="52.000000"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0" dy="5" />
              <feGaussianBlur stdDeviation="1.33333" />
              <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect_dropShadow_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect_dropShadow_1"
                result="shape"
              />
            </filter>
          </defs>
          <g filter="url(#filter_7_7_dd)">
            <path
              id="cursor"
              d="M4.5 13.1C4.5 6.14124 10.0964 0.5 17 0.5C23.9036 0.5 29.5 6.14124 29.5 13.1L29.5 29.9C29.5 36.8588 23.9036 42.5 17 42.5C10.0964 42.5 4.5 36.8588 4.5 29.9L4.5 13.1Z"
              fill-rule="evenodd"
              fill="#FFFFFF"
            />
            <path
              id="cursor"
              d="M15.3333 7.21997C15.3333 6.29218 16.0795 5.53998 17 5.53998C17.9205 5.53998 18.6667 6.29218 18.6667 7.21997L18.6667 13.38C18.6667 14.3079 17.9205 15.06 17 15.06C16.0795 15.06 15.3333 14.3079 15.3333 13.38L15.3333 7.21997Z"
              fill-rule="evenodd"
              fill="#000000"
            />
          </g>
          <path
            id="cursor"
            d="M29.5 29.9C29.5 36.8588 23.9036 42.5 17 42.5C10.0964 42.5 4.5 36.8588 4.5 29.9L4.5 13.1C4.5 6.14124 10.0964 0.5 17 0.5C23.9036 0.5 29.5 6.14124 29.5 13.1L29.5 29.9ZM18.6667 13.38C18.6667 14.3079 17.9205 15.06 17 15.06C16.0795 15.06 15.3333 14.3079 15.3333 13.38L15.3333 7.21997C15.3333 6.29218 16.0795 5.53998 17 5.53998C17.9205 5.53998 18.6667 6.29218 18.6667 7.21997L18.6667 13.38Z"
            stroke="#000000"
          />
        </svg>
      </div>
      <div class="arrow">
        <svg
          class="arrow_svg"
          width="19.982849"
          height="26.506104"
          viewBox="0 0 19.9828 26.5061"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <path
            id="arrow"
            d="M11.4914 0L11.4914 25L8.49142 25L8.49142 0L11.4914 0ZM9.99142 22.8787L17.416 15.454C18.01 14.8601 18.9434 14.8601 19.5374 15.454C20.1313 16.048 20.1313 16.9814 19.5374 17.5754L11.0521 26.0607C10.4581 26.6546 9.52472 26.6546 8.93076 26.0607L0.445496 17.5754C-0.148499 16.9814 -0.148499 16.048 0.445496 15.454C1.03946 14.8601 1.97284 14.8601 2.5668 15.454L9.99142 22.8787Z"
            fill-rule="evenodd"
            :fill="color"
          />
        </svg>
      </div>
    </div>
    <div class="bottom-center-copyright">
      <span>Copyright © 2023 Shanghai MeseOTech Co. Ltd.</span>
    </div>
  </div>
</template>

<style scoped>
.lang-select .separator-line {
  height: 90px;
  width: 1px;
  opacity: 0.45;
  background: var(--font-color);
  transform: rotate(45deg);
}

.lang-select span {
  transform: translate(-5px, 5px);
}

.lang-select a {
  transform: translate(5px, 40px);
}

.lang-select {
  user-select: none;
  font-size: 25px;
  display: flex;
}

.lang-select a {
  color: var(--font-color);
  text-decoration: none;
  opacity: 0.65;
}

.top-right-options-group {
  gap: 45px;
  position: absolute;
  top: 25px;
  right: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.options-group {
  width: fit-content;
}

.options-group .anchor-svg {
  position: absolute;
  overflow: hidden;
  width: 0%;
  transition: 0.75s;
}

#arrow-1 {
  pointer-events: none;
  transform: translate(245px, 2px);
}

#arrow-2 {
  pointer-events: none;
  transform: translate(225px, 41px);
}

#anchor-1:hover + #arrow-1,
#anchor-2:hover + #arrow-2 {
  width: 100%;
  transition: 1.25s;
}

.center-line {
  width: 2px;
  height: 100px;
  opacity: 0.5;
  background-color: var(--font-color);
}

.top-center-part .slogan {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 2em;
  font-weight: 200;
  position: relative;
  padding-left: 25px;
  overflow: hidden;
}

.slogan p {
  transform: translateX(-500px);
  animation: slogan 1s ease-in-out 1s forwards;
}

@keyframes slogan {
  0% {
    transform: translateX(-500px);
  }

  100% {
    transform: translateX(0);
    animation-play-state: paused;
  }
}

.top-center-part {
  pointer-events: none;
  user-select: none;
  display: flex;
  align-items: center;
  position: absolute;
  top: 3vh;
  left: 250px;
}

.img-part {
  pointer-events: none;
  user-select: none;
  display: flex;
  gap: 55px;
  overflow: hidden;
  align-items: center;
  margin-right: 25px;
}

.img-part img {
  transform: translateX(400px);
  animation: image 1s ease-in-out 1s forwards;
}

@keyframes image {
  0% {
    transform: translateX(400px);
  }

  100% {
    transform: translateX(0);
    animation-play-state: paused;
  }
}

.img-part::before {
  content: "×";
  position: absolute;
  font-size: 75px;
  font-weight: 100;
  opacity: 0;
  transform: translate(165px, 0);
  animation: fadein 1s ease-in-out 1.45s forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.top-right-content {
  position: relative;
  right: 75px;
  display: flex;
}

.top-left-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
}

.bottom-center-copyright {
  bottom: 0;
  position: absolute;
  font-size: 0.8em;
}

.mouse-svg {
  margin-top: 35px;
  z-index: 100;
}

.arrow_svg {
  animation: arrow 1.4s ease-in-out 0.4s infinite;
}

@keyframes arrow {
  0% {
    opacity: 0;
    transform: translateY(0px);
  }

  30% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(120px);
  }
}

.bottom-center-container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80px;
  height: 150px;
  position: absolute;
  bottom: 1.25vh;
}

.options-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  transform: translateY(45px);
  font-size: 18px;
}

.options-group a {
  color: var(--font-color);
  text-decoration: none;
}

.options-group a:nth-child(2) {
  margin-top: 15px;
}

.description {
  width: 30vw;
  font-size: 1.8em;
}

.title {
  font-weight: 500;
  font-size: 3.5vw;
}

.before-use-view-index-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
