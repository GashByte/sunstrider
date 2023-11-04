
import type { transform } from 'typescript';
<script lang="ts">
export default {
    props: {
        title: {
            String,
            required: true,
        },
        description: {
            String,
            required: true,
        },
        link: {
            String
        },
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
    traisition: 0.5s;
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
    margin-bottom: 10px
}

.card p{
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
    border-raduis: 5px;
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

.card-box::before{
    content: "";
    position: absolute;
    background: #fff;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    text-decoration: none;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
}

.card-box::after{
    content: "";
    position: absolute;
    background: #fff;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    border-radius: 8px;
    transform: skewX(15deg);
    filter: blur(30px);
    transition: 0.5s;
}

.card-box:hover::before,
.card-box:hover::after {
    transfrom: skewX(0deg);
}

.box span{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    pointer-events: none;
}

.box span::before{
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
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    animation: animate 2s ease-in-out infinite;
}

.box:hover span::before{
    opacity: 1;
    top: -50px;
    left: 50px;
    width: 100px;
    height: 100px;
}

.box span::after{
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

.box:hover span::after{
    bottom: -50px;
    right: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
}

@keyframes animate {
    0%,
    100%{
        transform: translateY(10px);
    }
    50%{
        transform: translate(-10px);
    }
}
</style>