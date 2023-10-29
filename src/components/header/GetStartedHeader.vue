<script setup lang="ts">
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
    <div class="get-started-header-container">
        <div class="left-container">
            <a href="https://www.sunstrider.today/">
                <img src="/SunstriderLogo-no-text-no-background.png" alt="SunStrider" />
                <span>Sunstrider</span>
            </a>
            <n-input class="search-input" v-model:value="value" type="text" placeholder="Search" />
        </div>
    </div>
</template>

<style scoped>
.get-started-header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.left-container {
    margin-left: 25px;
    display: flex;
    justify-content: flex-start;
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

a span {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 15px;
}

.search-input {
    margin-left: 25px;
    height: 45px;
    width: 275px;
}
</style>
