<script lang="ts">
export default {
    name: "TeamMemberCard",
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        github: {
            type: String,
            required: true,
        },
        twitter: {
            type: String,
        },
        discord: {
            type: String,
        },
        sponsor: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <div class="team-member-card">
        <div class="avatar">
            <img :src="avatar" alt="avatar" draggable="false" />
        </div>
        <span class="member-name">{{ name }}</span>
        <span class="member-description">{{ description }}</span>
        <span class="member-position">{{ position }}</span>
        <div class="options-group">
            <a :href="github">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a :href="twitter" v-if="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a :href="discord" v-if="discord">
                <ion-icon name="logo-discord"></ion-icon>
            </a>
        </div>
        <a class="sponsor" :href="sponsor">
            <span>❤️‍🔥 Sponsor</span>
        </a>
    </div>
</template>

<style scoped>
.sponsor {
    color: var(--font-color);
    text-decoration: none;
    position: relative;
    display: flex;
    border-top: 3px solid var(--background-color);
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 38px;
    height: 60px;
    /* wtf is this? */
    width: 100%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.sponsor:hover {
    transition: 0.25s;
    background: var(--sponsor-card-color);
}

.separator {
    margin-top: 35px;
    width: 100%;
    height: 3px;
    background: var(--background-color);
}

.options-group a {
    color: var(--font-color);
    font-size: 30px;
}

.options-group {
    display: flex;
    flex-direction: row;
    gap: 15px;
    position: relative;
    top: 35px;
    width: 250px;
    justify-content: center;
    align-items: center;
}

.member-position {
    position: relative;
    top: 35px;
    width: 250px;
    font-size: 16px;
    opacity: 0.85;
    font-weight: 400;
    color: var(--text-color);
}

.member-description {
    width: 250px;
    position: relative;
    top: 35px;
    font-size: 16px;
    opacity: 0.65;
    font-weight: 400;
    color: var(--text-color);
}

.member-name {
    position: relative;
    top: 35px;
    font-size: 20px;
    font-weight: 500;
    color: var(--text-color);
}

.team-member-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--team-member-card-color);
    border-radius: 25px;
    gap: 10px;
    width: 300px;
    height: 400px;
    margin-bottom: 15px;
}

.avatar img {
    position: relative;
    top: 35px;
    border-radius: 50%;
    height: 64px;
    width: 64px;
}
</style>