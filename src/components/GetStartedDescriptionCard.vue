<script lang="ts">
export default {
    name: "GetStartedDescriptionCard",
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
    }
}
</script>

<template>
    <div class="description-card">
        <div class="title-part">
            <ion-icon class="icon" :name="icon"></ion-icon>
            <span class="title">{{ title }}</span>
        </div>
        <span class="description">{{ description }}</span>
    </div>
</template>

<style scoped>
.description {
    font-size: 14px;
    opacity: 0.75;
}

.title-part {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    margin-top: 2px;
    margin-left: 15px;
    font-size: 25px;
}

.icon {
    font-size: 45px;
}

.description-card {
    flex: 0 0 calc(33.3% - 15px);
    width: 300px;
    height: 130px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
    margin-top: 15px;
    border-radius: 15px;
    transition: 0.55s;
}

.description-card:hover {
    transition: 0.25s;
    cursor: pointer;
    box-shadow: 0 0 5px 1px var(--separator-line-color);
}
</style>