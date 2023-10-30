<script lang="ts">
import FeatureCard from "./card/FeatureCard.vue";

export default {
    name: "Feature",
    components: {
        FeatureCard,
    }
}
</script>

<template>
    <div class="feature-container">
        <div class="left-feature-card">
            <FeatureCard title=""/>
        </div>
        <div class="right-content">

        </div>
    </div>
</template>

<style scoped>
.feature-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
}

.left-feature-card {
    position: relative;
    margin-left: 200px;
    width: calc(100vw / 3);
    height: 600px;
    background: red;
}
</style>