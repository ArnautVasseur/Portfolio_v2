<template>
  <div class="projects-page">
    <div class="spacer"></div>
    <div class="container project-details">
      <div v-if="selectedProjectDetails" class="project_main container">

        <div class="project_header">
          <div class="project_name">
            <IconLogo color="white" size="50px" />
            <h2>{{ selectedProjectDetails.name }}</h2>
          </div>

          <div class="project_tags" v-if="!isMobile">
            <p v-for="tag in selectedProjectDetails.tags" :key="tag" class="project_tags-item small-container">
              {{ tag }}
            </p>
          </div>
        </div>

        <div class="project_content">

          <div class="project_desc">
            <img class="project_image" :src="selectedProjectDetails.image" alt="Project_Image">
            <p>{{ selectedProjectDetails.description }}</p>
          </div>

          <div class="project_carac">
            <div class="project_tools small-container">
              <div v-for="tool in toolDetails" :key="tool.name" class="tool-item">
                <img :src="tool.image" :alt="tool.name" class="tool-icon" />
                <p class="tool-name">{{ tool.name }}</p>
              </div>
            </div>

            <div class="project_links">
              <a :href="selectedProjectDetails.link" class="github_link">
                <p>Github</p>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="white"
                  />
                </svg>
              </a>
    
              <a :href="selectedProjectDetails.website" class="website_link">
                <p>Website</p>
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>

        

      </div>
      <p v-else>Select a project to view its details</p>
    </div>
    
    <div class="projects-list container">
      <div class="projects">
        <div
          v-for="(project, key) in projects" 
          :key="key" 
          @click="selectProject(key as string)"
          :class="{ active: selectedProject === key }"
          class="small-container">
          {{ project.name }}
          <img class="project-logo" :src="project.logo" alt="Logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
const isMobile = ref(false);

function updateFormat() {
  const screenWidth = window.innerWidth;
  isMobile.value = screenWidth <= 768
}

onMounted(() => {
  updateFormat();
  window.addEventListener('resize', updateFormat);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateFormat);
});

interface Tool {
  name: string;
  proficiency: number;
  image: string;
}

interface HardSkills {
  [category: string]: {
    skills: {
      [key: string]: Tool;
    };
  };
}

interface Project {
  name: string;
  category: string;
  "creation-date": string;
  logo: string;
  tags: string[];
  tools: string[];
  description: string;
  link: string;
  website: string;
  image: string;
}

interface ProjectData {
  [key: string]: Project;
}

const projects = ref<ProjectData>({});
const hardSkills = ref<HardSkills>({});
const selectedProject = ref<string | null>(null);
const selectedProjectDetails = ref<Project | null>(null);
const toolDetails = ref<Tool[]>([]);

// Fetch projects data
const fetchProjects = async () => {
  try {
    const data = await import('../json/projects.json');
    projects.value = data.Projects as ProjectData;
  } catch (error) {
    console.error('Error loading projects:', error);
  }
};

// Fetch Hard Skills data
const fetchHardSkills = async () => {
  try {
    const data = await import('../json/skills.json');
    hardSkills.value = data.Hard_Skills as HardSkills;
  } catch (error) {
    console.error('Error loading hard skills:', error);
  }
};

// Select a project
const selectProject = (key: string) => {
  selectedProject.value = key;
  selectedProjectDetails.value = projects.value[key];
};

// Watch for changes in selected project and fetch tools
watch(selectedProjectDetails, () => {
  if (selectedProjectDetails.value) {
    toolDetails.value = getToolsForProject(selectedProjectDetails.value.tools);
  } else {
    toolDetails.value = [];
  }
});

// Get tools for the selected project
const getToolsForProject = (tools: string[]): Tool[] => {
  const allSkills = Object.values(hardSkills.value).flatMap((category) =>
    Object.values(category.skills)
  );
  return tools
    .map((toolName) => allSkills.find((skill) => skill.name === toolName))
    .filter((tool): tool is Tool => !!tool); // Filter out undefined
};

// Load data on page load
onMounted(() => {
  fetchProjects();
  fetchHardSkills();
});
</script>

<style scoped lang="scss">
.projects-page {
  width: 100%;
  height: 100%;
  display: flex;

  @include mixins.mq('xs') {
    flex-direction: column-reverse;
    padding: 20px;
    gap: 30px;
  }
  @include mixins.mq('md') {
    flex-direction: row;
    padding: 0px;
    gap: 50px;
  }

  .project-details {
    width: 80%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    color: white;
    overflow: hidden;

    @include mixins.mq('xs') {
      width: 100%;
      height: fit-content;
      z-index: 0;
      padding: 20px;
    }
    @include mixins.mq('md') {
      width: 80%;
      height: auto;
      z-index: 1;
      overflow: hidden;
      padding: 30px;
    }

    .project_main{
      display: flex;
      flex-direction: column;
      gap: 30px;
      height: 100%;

      .project_header{
        width: 100%;
        height: 15%;
        overflow-y: visible;
        display: flex;
        justify-content: space-between;
        align-items: start;

        .project_name{
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          font-size: 32px;
        }
        
        .project_tags{
          display: flex;
          color: black;
          gap: 10px;

          &-item{
            border-radius: 10px;
            padding: 10px 15px;
          }
        }
      }

      .project_content{
        width: 100%;
        height: 85%;
        display: flex;
        justify-content: space-between;
        align-items: start;

        @include mixins.mq('xs') {
          flex-direction: column;
          gap: 20px;
        }
        @include mixins.mq('md') {
          flex-direction: row;
        }

        .project_desc{
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;

          @include mixins.mq('xs') {
            width: 100%;
          }
          @include mixins.mq('md') {
            width: 80%;
          }

          .project_image {
            @include mixins.small-box;
            width: 100%;
          }
        }

        .project_carac{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          @include mixins.mq('xs') {
            width: 100%;
          }
          @include mixins.mq('lg') {
            width: 20%;
          }

          .project_tools{
            
            height: 75%;
            color: black;
            @include mixins.small-box;
            overflow-y: scroll;

            @include mixins.mq('xs') {
              flex-wrap: wrap;
              width: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              padding: 20px;
              gap: 15px;
            }
            @include mixins.mq('sm') {
              flex-wrap: nowrap;
            }
            @include mixins.mq('md') {
              padding: 0px;
              display: block;
              width: 80%;
            }

            .tool-item{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;

              @include mixins.mq('xs') {
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
              @include mixins.mq('md') {
                padding: 20px 10px;
              }

              .tool-icon{
                height: 50px;
                aspect-ratio: 1/1;
              }
            }
          }

          .project_links{
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 20px;
            border-radius: 15px;
            width: 100%;
            padding: 20px;

            @include mixins.mq('xs') {
              display: flex;
              flex-direction: row;
            }
            @include mixins.mq('md') {
              flex-direction: column;
            }
            
            >*{
              color: white;
              flex-direction: row;
            }

            .github_link, .website_link{
              display: flex;
              justify-content: end;
              flex-direction: row;
              align-items: center;
              gap: 15px;
            }
          }
        }

        .project_tools::-webkit-scrollbar{
          display: none;
        }
      }
    }
  }

  .projects-list {
    padding: 20px;
    border-radius: 20px;
    color: white;

    @include mixins.mq('xs') {
      width: 100%;
    }
    @include mixins.mq('md') {
      width: 20%;
    }

    .projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      height: 100%;

      @include mixins.mq('xs') {
        flex-direction: row;
        gap: 20px;
      }
      @include mixins.mq('md') {
        flex-direction: column;
      }

      >* {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;
        color: black;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        &.active {
          transform: scale(1.05);
        }

        &:hover {
          transform: scale(1.05);
        }

        .project-logo {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .spacer{
    @include mixins.mq('xs') {
      height: 60px;
    }
    @include mixins.mq('md') {
      display: none;
      height: 0px;
    }
  }
  
}
</style>
