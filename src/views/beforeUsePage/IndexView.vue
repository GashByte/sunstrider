<script setup lang="ts"></script>

<template>
  <div class="before-use-view-index-view">
    <div class="background"></div>
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
    </div>
    <div class="top-right-content"></div>
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
            fill="#000000"
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
  height: 200px;
  position: absolute;
  bottom: 50px;
}

.description {
  width: 35vw;
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
  height: 100%;
  width: 100%;
}
</style>