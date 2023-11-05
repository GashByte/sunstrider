<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
  mounted() {
    // random color
    const colors = [
      {
        bg: "#4158D0",
        li: {
          l1: "#4158D0-0",
          l2: "#C850C0-46",
          l3: "#FFCC70-100",
          de: "43deg",
        },
      },
      {
        bg: "#00DBDE",
        li: {
          l1: "#00DBDE-0",
          l2: "#FC00FF-100",
          de: "135deg",
        },
      },
      {
        bg: "#2BD2FF",
        li: {
          l1: "#FA8BFF-0",
          l2: "#2BD2FF-52",
          l3: "#2BFF88-90",
          de: "135deg",
        },
      },
      {
        bg: "#FF5ACD",
        li: {
          l1: "#FF5ACD-0",
          l2: "#FBDA61-100",
          de: "135deg",
        },
      },
      {
        bg: "#21D4FD",
        li: {
          l1: "#21D4FD-0",
          l2: "#B721FF-100",
          de: "45deg",
        },
      },
      {
        bg: "#FF6A2C",
        li: {
          l1: "#FFE53B-0",
          l2: "#FF2525-100",
          de: "147deg",
        },
      },
      {
        bg: "#8EC5FC",
        li: {
          l1: "#8EC5FC-0",
          l2: "#E0C3FC-100",
          de: "62deg",
        },
      },
    ];

    let color_list: any[] = [];

    this.$nextTick(() => {
      const styleSheet = document.styleSheets[0];

      const element = this.$el as HTMLElement;
      const card_box = element.querySelector("div") as HTMLElement;
      const card_box_list = document.querySelectorAll(
        "div.card-box",
      ) as NodeListOf<HTMLElement>;
      card_box_list.forEach((item, index) => {
        item.setAttribute("id", "card-box-" + (index + 1));
      });

      // get now card box
      card_box_list.forEach((item) => {
        let color = colors[Math.floor(Math.random() * colors.length)];
        while (color_list.includes(color)) {
          color = colors[Math.floor(Math.random() * colors.length)];
        }

        color_list.push(color);

        let result_color;

        // split the color xxx-yy to xxx yy
        result_color = `background-image: linear-gradient(${color.li.de}, ${
          color.li.l1.split("-")[0]
        } ${color.li.l1.split("-")[1] + "%"}, ${color.li.l2.split("-")[0]} ${
          color.li.l2.split("-")[1] + "%"
        } ${color.li.l3 ? ", " + color.li.l3.split("-")[0] : ""} ${
          color.li.l3 ? color.li.l3.split("-")[1] + "%" : ""
        });`;

        // add before and after style
        styleSheet.insertRule(
          `#${item.id}::before { ${result_color} }`,
          styleSheet.cssRules.length,
        );
        styleSheet.insertRule(
          `#${item.id}::after { ${result_color} }`,
          styleSheet.cssRules.length,
        );
      });
    });
  },
};
</script>

<template>
  <div class="card-box">
    <span></span>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <a v-if="link" :href="link">Learn more</a>
    </div>
  </div>
</template>

<style scoped>
.card-box {
  position: relative;
  display: flex;
  width: 320px;
  height: 400px;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;
}

.card {
  position: relative;
  left: 0;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 100;
  transition: 0.5s;
}

.card h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.card p {
  font-size: 1.2em;
  margin-bottom: 20px;
  line-height: 1.5em;
}

.card a {
  display: inline-block;
  font-size: 1.1em;
  color: var(--index-view-card-anchor-color);
  background: var(--index-view-card-anchor-background);
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 5px;
  transition: 0.6s;
}

.card-box:hover .card {
  left: -25px;
  padding: 60px 40px;
}

.card a:hover {
  background: var(--index-view-card-anchor-hover-background);
  color: var(--index-view-card-anchor-hover-color);
  transition: 0.5s;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-box::before {
  opacity: 0.35;
  content: "";
  position: absolute;
  top: -80px;
  left: 50px;
  width: 50%;
  height: 150%;
  text-decoration: none;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}

.card-box::after {
  content: "";
  position: absolute;
  top: -80px;
  left: 50px;
  width: 50%;
  height: 150%;
  border-radius: 8px;
  transform: skewX(15deg);
  filter: blur(30px);
  transition: 0.5s;
}

.card-box:hover::before,
.card-box:hover::after {
  transform: translateX(-20px) skewX(0deg);
  width: 65%;
}

.card-box span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3999;
}

.card-box span::before {
  content: "";
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  transition: 0.3s;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: animate 2s ease-in-out infinite;
}

.card-box:hover span::before {
  opacity: 1;
  top: -130px;
  left: 50px;
  width: 100px;
  height: 100px;
}

.card-box span::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: 0.5s;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  animation: animate 2s ease-in-out infinite;
  animation-delay: -1s;
}

.card-box:hover span::after {
  bottom: -100px;
  right: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

@keyframes animate {
  0%,
  100% {
    transform: translateY(10px);
  }

  50% {
    transform: translate(-10px);
  }
}
</style>
