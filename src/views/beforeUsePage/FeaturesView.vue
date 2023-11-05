<script lang="ts">
export function PageActive() {
  console.log(1);
}

export default {};
</script>

<template>
  <div class="before-use-view-features-view">
    <div class="title">
      <span>Our Features</span>
    </div>
    <div class="features-container">
      <div class="left-part"></div>
      <div class="right-part"></div>
    </div>
  </div>
</template>

<style scoped>
.title {
  padding-top: 75px;
  position: relative;
  font-size: 45px;
  font-weight: 500;
}

.features-container {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: -75px;
}

.right-part {
  width: 50%;
  height: 50%;
  background: blue;
}

.left-part {
  width: 50%;
  height: 60%;
  background: red;
}

.before-use-view-features-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
