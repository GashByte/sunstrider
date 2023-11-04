<script lang="ts">
import BeforeUseHeader from "@/components/header/BeforeUseHeader.vue";

import IndexView from "./beforeUsePage/IndexView.vue";
import GetStartedView from "./beforeUsePage/GetStartedView.vue";
import FutureView from "./beforeUsePage/FutureView.vue";
import AchievementView from "./beforeUsePage/AchievementView.vue";
import MeetTeamView from "./beforeUsePage/MeetTeamView.vue";

import { ref } from "vue";

const page = ref<number>(0);

export default {
  name: "BeforeUseView",
  components: {
    BeforeUseHeader,
    IndexView,
    GetStartedView,
    FutureView,
    AchievementView,
    MeetTeamView,
  },
  setup() {
    return {
      page,
    };
  },
  mounted() {
    const scrollWarpper = document.querySelector(
      ".scroll-warpper",
    ) as HTMLElement;
    const warpperList = document.querySelectorAll(
      ".scroll-item",
    ) as NodeListOf<HTMLElement>;

    this.$nextTick(() => {
      scrollWarpper.style.height = `${window.innerHeight}px`;
      warpperList.forEach((item) => {
        item.style.height = `${window.innerHeight}px`;
      });

      warpperList[0].classList.add("scroll-active");
      warpperList[1].classList.add("scroll-next");
      page.value = 0;
    });

    const remain = 1; // seconds
    let timer = 0;
    const isScrollEnd = ref(false);
    const isScrollTop = ref(false);
    const canSrollNext = ref(true);

    document.addEventListener("wheel", (event: any) => {
      if (event.deltaY > 0) {
        if (page.value === warpperList.length - 1) return;
        if (!canSrollNext.value) return;

        canSrollNext.value = false;

        page.value++;
        warpperList.forEach((item) => {
          item.classList.remove("scroll-prev");
          item.classList.remove("scroll-active");
          item.classList.remove("scroll-next");
        });

        if (page.value > warpperList.length - 1) {
          page.value = warpperList.length - 1;
        } else {
          onScrollChanged();

          warpperList[page.value - 1]!.classList.add("scroll-prev");
          warpperList[page.value]!.classList.add("scroll-active");

          if (page.value + 1 < warpperList.length) {
            warpperList[page.value + 1]!.classList.add("scroll-next");
            isScrollEnd.value = false;
          } else if (page.value + 1 === warpperList.length) {
            isScrollEnd.value = true;
          }
        }

        afterScrollChanged();

        setTimeout(() => {
          scrollWarpper.style.transform = `translateY(-${
            page.value * window.innerHeight
          }px)`;
        }, 1000);
      } else if (event.deltaY < 0) {
        if (page.value === 0) return;
        if (!canSrollNext.value) return;

        canSrollNext.value = false;

        page.value--;
        warpperList.forEach((item) => {
          item.classList.remove("scroll-prev");
          item.classList.remove("scroll-active");
          item.classList.remove("scroll-next");
        });

        if (page.value < 0) {
          page.value = 0;
        } else {
          onScrollChanged();

          if (page.value - 1 >= 0) {
            warpperList[page.value - 1]!.classList.add("scroll-prev");
            isScrollEnd.value = false;
          } else if (page.value - 1 < 0) {
            isScrollTop.value = true;
          }

          warpperList[page.value]!.classList.add("scroll-active");
          warpperList[page.value + 1]!.classList.add("scroll-next");
        }

        afterScrollChanged();

        setTimeout(() => {
          scrollWarpper.style.transform = `translateY(-${
            page.value * window.innerHeight
          }px)`;
        }, 1000);
      }

      setTimeout(() => {
        canSrollNext.value = true;
      }, remain * 1000);
    });

    const all_blocks = document.querySelectorAll(
      ".scroll-changed-masker > div",
    ) as NodeListOf<HTMLElement>;

    /**
     * This function will be called when the scroll event is triggered.
     * and it will play a vedio
     */
    function onScrollChanged() {
      for (let i = 0; i < all_blocks.length; i++) {
        setTimeout(() => {
          all_blocks[i].style.transform = `translateY(0)`;
        }, i * 100);
      }
    }

    /**
     * This function will be called when the scroll event is triggered.
     * it will finish the visual effect after the onScrollChanged function
     */
    function afterScrollChanged() {
      setTimeout(() => {
        for (let i = 0; i < all_blocks.length; i++) {
          setTimeout(() => {
            all_blocks[i].style.transform = `translateY(${
              all_blocks[i].classList.contains("riseup-block")
                ? "100%"
                : "-100%"
            })`;
          }, i * 100);
        }
      }, 1000);
    }
  },
  method: {
    abbbb(e: any) {},
  },
};
</script>

<template>
  <div class="before-use-view">
    <div class="before-use-header-container">
      <header>
        <BeforeUseHeader v-if="page !== 0" />
      </header>
    </div>
    <div class="before-use-content-container">
      <main>
        <div class="scroll-changed-masker" style="overflow: hidden !important">
          <div class="riseup-block" style="transform: translateY(-100%)"></div>
          <div class="falldown-block" style="transform: translateY(100%)"></div>
          <div class="riseup-block" style="transform: translateY(-100%)"></div>
          <div class="falldown-block" style="transform: translateY(100%)"></div>
          <div class="riseup-block" style="transform: translateY(-100%)"></div>
          <div class="falldown-block" style="transform: translateY(100%)"></div>
          <div class="riseup-block" style="transform: translateY(-100%)"></div>
        </div>
        <div class="before-use-page">
          <div class="scroll-warpper">
            <IndexView class="scroll-item" id="Index-View" />
            <FutureView class="scroll-item" id="Future-View" />
            <MeetTeamView class="scroll-item" id="MeetTeam-View" />
            <AchievementView class="scroll-item" id="Achievement-View" />
            <GetStartedView class="scroll-item" id="GetStarted-View" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.falldown-block {
  transition: 0.45s;
  height: 100%;
  width: calc(100% / 7);
  background: var(--before-use-falldown-block-color);
}

.riseup-block {
  transition: 0.45s;
  height: 100%;
  width: calc(100% / 7);
  background: var(--before-use-riseup-block-color);
}

.scroll-changed-masker {
  display: flex;
  flex-direction: row;
  position: absolute;
  pointer-events: none;
  height: 100%;
  width: 100%;
  z-index: 9999;
}

.scroll-warpper {
  width: 100%;
  height: 100%;
  transition: 0.55s;
}

.before-use-content-container .before-use-page .before-use-view {
  height: 100%;
  width: 100%;
  background: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: var(--font-color);
  font-size: 250px;
  text-align: center;
}
</style>
