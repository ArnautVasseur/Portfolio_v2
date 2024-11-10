<template>
  <div class="container">
    <h2>My Skillset</h2>
    
    <div class="skillset">
      <div
        v-if="skills && Object.keys(skills).length > 0"
        v-for="(groupName, index) in Object.keys(skills).slice(0, 6)"
        :key="groupName"
        class="skill"
        @mouseenter="hoverIcon[groupName] = true"
        @mouseleave="hoverIcon[groupName] = false"
      >
        <div v-if="skills[groupName] && Object.keys(skills[groupName]).length > 0" class="content">
          <p class="text">
            {{ skills[groupName][Object.keys(skills[groupName])[0]].name }}
          </p>
          <img :src="skills[groupName][Object.keys(skills[groupName])[0]].image" alt="test">
        </div>
      </div>

    </div>
    <RouterLink to="/skillset" class="link">
      <p>See More</p>
      <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z"
          fill="white"
        />
      </svg>
    </RouterLink>

    <IconBrush size="80%" class="background_icon"/>
  </div>
</template>

<script lang="ts" setup>
import Skills from "../json/skills.json";

interface Skill {
  name: string;
  proficiency: number;
  image: string;
}

interface SkillGroup {
  [skillName: string]: Skill;
}

interface SkillsData {
  [groupName: string]: SkillGroup;
}

const skills: SkillsData = Skills.Hard_Skills;

const hoverIcon = ref<Record<string, boolean>>(
  Object.fromEntries(Object.keys(skills).map(key => [key, false]))
);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  z-index: 1;
  @include mixins.mq('xs') {
    height: fit-content;
  }
  @include mixins.mq('sm') {
    height: 100%;
  }

  h2 {
    color: white;

    @include mixins.mq('xs') {
      font-size: 18px;
    }

    @include mixins.mq('sm') {
      font-size: 20px;
    }
  }

  .link {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    color: white;
    gap: 10px;
  }

  .skillset {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    color: black;
    padding: 10px;
    width: 100%;
    height: 80%;

    .skill {
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1/1;
      border-radius: 10px;
      margin-top: 10px;
      @include mixins.mq('xs') {
        width: 60px;
      }
      @include mixins.mq('md') {
        width: 80px;
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 14px;
        text-align: center;
        position: relative;

        p, img {
          position: absolute;
          transition: opacity 0.3s ease;
        }

        p {
          opacity: 0;
          font-weight: 600;
        }

        &:hover p {
          opacity: 1;
        }

        &:hover img {
          opacity: 0;
        }
      }
    }
  }
}

.background_icon {
  position: absolute;
  bottom: -5%;
  left: -5%;
  opacity: 0.3;
  z-index: -1;

  * {
    fill: white;
  }
}
</style>