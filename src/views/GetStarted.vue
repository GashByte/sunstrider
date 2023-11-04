<script setup lang="ts">
import TeamMemberCard from "../components/TeamMemberCard.vue";
import GetStartedDescriptionCard from "../components/GetStartedDescriptionCard.vue";
import Feature from "../components/GetStarted/Feature.vue";
</script>

<template>
  <div class="get-started-container">
    <div class="background">
      <div class="coin">
        <img
          id="image0_71_2"
          width="128"
          height="128"
          src="/coin.png"
          alt="Coin"
        />
      </div>
    </div>
    <div class="get-started-page" id="main-description">
      <div class="top-part">
        <div class="content">
          <p class="title-content">Sunstrider</p>
          <p class="description-content">Cutting-Edge ToolSuite</p>
          <p class="little-content">
            The most Powerful toolsuite and Leading the world!
          </p>
          <div class="options-group">
            <n-button strong secondary round type="primary">
              Get Started
            </n-button>
            <n-button strong secondary round type="info"> Features </n-button>
            <n-button strong secondary round type="info"> Join Us </n-button>
          </div>
        </div>
        <img src="/SunstriderLogo-no-text-no-background.png" alt="Sunstrider" />
      </div>
      <div class="description">
        <div class="top-left-conent">
          <div class="svg">
            <svg
              width="183"
              height="186"
              viewBox="0 0 183 186"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_66_30)">
                <path
                  d="M111.112 32.4917L150.423 96.6414L101.561 153.852L32.0511 125.06L37.9541 50.0554L111.112 32.4917Z"
                  fill="#2891E8"
                  fill-opacity="0.2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_66_30"
                  x="0.0510864"
                  y="0.49176"
                  width="182.372"
                  height="185.36"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="16"
                    result="effect1_foregroundBlur_66_30"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="content">
            <span class="title">Obvious</span><br />
            <span class="title">advantages.</span><br />
            <span class="content--description-content"
              >Here's a summary of what We provides you with, and what we stand
              for</span
            ><br />
            <a class="anchor-link" href="#get-started">SEE ALL FEATURES</a>
          </div>
        </div>
        <GetStartedDescriptionCard
          title="Powerful"
          description="Compared to any other independent tool, we are more powerful. Not just UI design, but functionality."
          icon="barbell-outline"
        />
        <GetStartedDescriptionCard
          title="Faster"
          description="Lightning fast but without losing any animation effect. What is fast is not only our efficiency, but also our pace of progress."
          icon="rocket-outline"
        />
        <GetStartedDescriptionCard
          title="Professional"
          description="More professional functions and more scientific layout design. But it still maintains the simplicity and clarity of the interface and functions."
          icon="logo-electron"
        />
        <GetStartedDescriptionCard
          title="Confidential"
          description="You can safely provide us with your info. Because they will be treated confidentially."
          icon="finger-print-outline"
        />
        <div class="top-left-conent">
          <div class="svg">
            <svg
              width="184"
              height="186"
              viewBox="0 0 184 186"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_66_30)">
                <path
                  d="M72.1283 32.4917L145.286 50.0553L151.189 125.06L81.6795 153.852L32.8173 96.6414L72.1283 32.4917Z"
                  fill="#9641A0"
                  fill-opacity="0.2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_66_30"
                  x="0.817322"
                  y="0.491699"
                  width="182.372"
                  height="185.36"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="16"
                    result="effect1_foregroundBlur_66_30"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="content">
            <span class="title">Still Leading</span><br />
            <span class="title">The World.</span><br />
            <span class="content--description-content"
              >What we offer are world-leading features.</span
            >
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="separator"></div>
        <span class="feature-span">FEATURES</span>
      </div>
      <Feature />
      <div class="meet-team">
        <div class="separator"></div>
        <span class="meet-the-team-span">Meet the Team</span>
      </div>
      <div class="team-member">
        <TeamMemberCard
          name="GashByte"
          avatar="/gashbyte-avatar.jpg"
          description="Enthusiastic technology enthusiasts, reticent OTAKU."
          position="Founder of MeseOTech Co. Ltd. and Sunstrider"
          github="https://github.com/GashByte"
          sponsor="https://www.meseotech.org/sponsor/gashbyte"
        />
        <TeamMemberCard
          name="Zou Ce"
          avatar="/zouce-avatar.jpg"
          description="A high school student in school. And Genshin Impact player."
          position="Bugs Finder"
          github="https://github.com/zou-ce"
          sponsor="https://www.meseotech.org/sponsor/zou-ce"
        />
      </div>
      <div class="whats-news">
        <div class="separator"></div>
        <span class="meet-the-team-span">What's News</span>
      </div>
    </div>
    <div class="get-started-footer">
      <div class="left-content">
        <img src="/SunstriderLogo-no-text-no-background.png" alt="Sunstrider" />
      </div>
      <div class="center-content">
        <div class="legal">
          <a href="https://www.meseotech.org/sunstrider/privacy-policy"
            >Privacy Policy</a
          >
          |
          <a href="https://www.meseotech.org/sunstrider/terms-of-service"
            >Terms of Service</a
          >
          |
          <a href="https://www.meseotech.org/sunstrider/join-us/">Join Us</a>
        </div>
        <div class="descriptions">
          <div class="description">
            <p>General Consultation</p>
            <p>Email: contact@meseotech.org</p>
          </div>
          <div class="description">
            <p>Public cooperation</p>
            <p>Email: cooperate@meseotech.org</p>
          </div>
          <div class="description">
            <p>FeedBack</p>
            <p>Email: feedback@meseotech.org</p>
          </div>
          <div class="description">
            <p>Report User</p>
            <p>Email: report@meseotech.org</p>
          </div>
          <div class="description">
            <p>Job application</p>
            <p>Email: jobs@meseotech.org</p>
          </div>
        </div>
        <div class="copyright">
          <div class="en">
            <span>Copyright © 2023 | Shanghai MeseOTech Co. Ltd.</span>
          </div>
          <div class="zh">
            <span>版权所有©2023 | 上海喵森科技有限公司</span>
          </div>
          <div class="feedback-phone">
            <span
              >Feedback to CIA(China Internet Association).
              中国互联网协会反馈电话: 12321</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background .coin {
  z-index: 999;
  position: absolute;
  left: calc(50% - 70px);
  top: 455px;
  opacity: 0.15;
  transition: 0.25s;
  animation: coin 5s infinite;
}

@keyframes coin {
  0% {
    transform: translateY(-15px);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(-15px);
  }
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
}

.feature {
  text-align: center;
}

.feature-span {
  opacity: 0.35;
  font-size: 32px;
}

.description .top-left-conent .svg {
  position: absolute;
}

.description .top-left-conent .content .content--description-content {
  position: relative;
  font-size: 12px;
  opacity: 0.65;
  transform: translateX(15px);
}

.description .top-left-conent .content .anchor-link {
  font-size: 16px;
}

.description .top-left-conent .content .title {
  font-size: 32px;
}

.description .top-left-conent {
  text-align: left;
  margin-top: 25px;
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.get-started-page .description {
  max-width: 1000px;
  border-top: 1px solid var(--separator-line-color);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-left: 65px;
}

.team-member {
  margin-top: 55px;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 0 calc(100vw / (300px + 50px));
}

.meet-team,
.whats-news {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.meet-team .separator,
.whats-news .separator,
.feature .separator {
  width: 185px;
  height: 1px;
  background: var(--separator-line-color);
  margin-top: 50px;
  margin-bottom: 15px;
}

.meet-the-team-span {
  opacity: 0.35;
  font-size: 25px;
}

.get-started-page {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.options-group {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 25px;
}

.top-part {
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-part .top-part {
  display: flex;
  justify-content: center;
  align-items: left;
}

.top-part .top-part .content {
  margin-right: 100px;
  position: relative;
  top: 70px;
  left: -50px;
}

.top-part .title-content {
  width: fit-content;
  font-size: 75px;
  background: -webkit-linear-gradient(120deg, #86b91a 30%, #edd532);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.top-part .description-content {
  font-size: 35px;
}

.top-part .little-content {
  font-size: 20px;
  opacity: 0.55;
}

.center-content > div {
  margin-top: 5px;
}

.copyright {
  display: flex;
  gap: 50px;
  margin-top: 5px;
}

.descriptions {
  display: flex;
  justify-content: space-between;
  gap: 45px;
  width: fit-content;
}

.center-content {
  position: relative;
  margin-left: 150px;
}

.center-content a {
  color: var(--font-color);
  text-decoration: none;
}

.center-content a:hover {
  text-decoration: underline;
}

.get-started-container {
  height: 100%;
  width: 100%;
}

.get-started-container div {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.get-started-footer {
  border-top: 1px solid var(--separator-line-color);
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  width: 100%;
  background: var(--background-color);
}

.left-content {
  width: fit-content;
  height: 100%;
}

.left-content img {
  margin-top: 20px;
  margin-left: 50px;
  width: 95px;
  height: 95px;
}

.left-content span {
  margin-left: 25px;
}
</style>
