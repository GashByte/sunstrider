<script lang="ts">
export default {
    name: "FeatureCard",
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        cardClickEvent(event:any) {
            const target = event.target as HTMLElement;
        },
    },
}
</script>

<template>
    <div class="feature-card smallsize" :click="cardClickEvent">
        
    </div>
</template>

<style scoped>
.feature-card {
    transition: 0.55s;
    margin-left: 15px;
    margin-right: 15px;
    height: 100%;
    background:blue;
    border-radius: 25px;
}

.smallsize {
    width: 55px;
}

.smallsize:hover {
    cursor: pointer;
}
</style>