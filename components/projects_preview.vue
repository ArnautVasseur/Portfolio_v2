<template>
  <div class="container">
    <h2>My latest project</h2>
    
    <div class="project" v-if="LastProject">
      <div class="logo">
        <img :src="LastProject.logo" alt="Project Logo" />
        <p>{{ LastProject["creation-date"] }}</p>
      </div>

      <div class="content">
        <h3>{{ LastProject.name }}</h3>
        <div class="desc">
          <div class="desc__logo">
            <div class="tools" v-for="(tool, index) in projectToolsWithImages(LastProject.tools).slice(0, 2)" :key="index">
              <img :src="tool.image" :alt="tool.name" class="tool-image" />
            </div>
          </div>
          
          <div>
            <div class="tags" v-for="tag in LastProject.tags" :key="tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <RouterLink to="/projects" class="link">
      <p>See More</p>
      <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z"
          fill="white"
        />
      </svg>
    </RouterLink>

    <IconPokedex size="60%" class="background_icon"/>
  </div>
</template>

<script lang="ts" setup>
import Projects from "../json/projects.json";
import Skills from "../json/skills.json";

// Define a Project interface
interface Project {
  name: string;
  category: string;
  "creation-date": string;
  tags: Array<string>;
  logo: string;
  tools: string[];
  description: string;
  link: string;
  website: string;
  image: string;
}

// Define a Skills lookup type
interface SkillLookup {
  [key: string]: string; // Mapping tool names to image paths
}

const projects: Record<string, Project> = Projects.Projects;

// Find the latest project based on the creation date
const LastProject = Object.values(projects).reduce<Project | null>((latest, current) => {
  const currentDateParts = current["creation-date"].split("-");
  const currentDate = new Date(+currentDateParts[1], +currentDateParts[0] - 1);

  if (!latest) return current;

  const latestDateParts = latest["creation-date"].split("-");
  const latestDate = new Date(+latestDateParts[1], +latestDateParts[0] - 1);

  return currentDate > latestDate ? current : latest;
}, null);

// Initialize skills as a dictionary with type `SkillLookup`
const skills: SkillLookup = {};
Object.values(Skills.Hard_Skills).forEach(category => {
  Object.values(category).forEach(tool => {
    skills[tool.name.toLowerCase()] = tool.image;
  });
});

// Function to get tools with images for a project
function projectToolsWithImages(tools: string[]) {
  return tools.map(tool => ({
    name: tool,
    image: skills[tool.toLowerCase()]
  }));
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  z-index: 1;

  @include mixins.mq('xs') {
    height: fit-content;
    color: white;
  }
  @include mixins.mq('sm') {
    color: black;
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

  .project {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @include mixins.mq('xs') {
      background-color: transparent;
    }
    @include mixins.mq('sm') {
      background-color: inherit;
      height: 100%;
    }

    .logo, .content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      h3{
        font-size: 24px;
      }

      .desc {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        @include mixins.mq('xs') {
          flex-direction: column;
        }
        @include mixins.mq('sm') {
          flex-direction: row;
        }

        .tools, .tags {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px;
        }

        &__logo{
          display: flex;
          @include mixins.mq('xs') {
            flex-direction: row;
          }
          @include mixins.mq('sm') {
            flex-direction: column;
          }
          
        }
      }
    }

    .logo {
      width: 40%;
      gap: 20px;
      justify-content: center;
    }

    .content {
      width: 60%;
      justify-content: space-around;
    }
  }

  .tool-image {
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
  }

  .link {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    color: white;
    gap: 10px;
  }
}

.background_icon {
  position: absolute;
  bottom: -5%;
  left: -5%;
  opacity: 0.3;
  z-index: -1;
  transform: rotate(15deg);

  * {
    fill: white;
  }

  @include mixins.mq('xs') {
    width: 50%;
    height: auto;
  }

  @include mixins.mq('sm') {
    width: 50%;
    height: auto;
  }

  @include mixins.mq('lg') {
    width: 60%;
    height: auto;
  }
}
</style>
