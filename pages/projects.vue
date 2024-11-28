<template>
  <div class="projects-page">

    <div class="container project-details">
      <div v-if="selectedProjectDetails" class="project_main container">

        <div class="project_header">
          <div class="project_name">
            <IconLogo color="white" size="50px" />
            <h2>{{ selectedProjectDetails.name }}</h2>
          </div>

          <div class="project_tags">
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

            <div class="project_links small-container">
              <a :href="selectedProjectDetails.link">
                <p>Github</p>
              </a>
    
              <a :href="selectedProjectDetails.website">
                <p>Website</p>
              </a>
            </div>
          </div>

        </div>

        

      </div>
      <p v-else>Select a project to view its details</p>
    </div>
    
    <div class="projects-list container">
      <ul>
        <li 
          v-for="(project, key) in projects" 
          :key="key" 
          @click="selectProject(key as string)"
          :class="{ active: selectedProject === key }"
          class="small-container">
          {{ project.name }}
          <img class="project-logo" :src="project.logo" alt="Logo">
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { Base } from '../.nuxt/components';

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
    flex-direction: column;
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
    padding: 30px;
    border-radius: 20px;
    color: white;
    overflow: hidden;

    @include mixins.mq('xs') {
      width: 100%;
      height: fit-content;
      z-index: 0;
    }
    @include mixins.mq('md') {
      width: 80%;
      height: auto;
      z-index: 1;
      overflow: hidden;
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

        .project_desc{
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;

          .project_image {
            border-radius: 15px;
            width: 100%;
          }
        }

        .project_carac{
          width: 15%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          .project_tools{
            width: 100%;
            height: 75%;
            color: black;
            border-radius: 15px;
            padding: 20px;
            overflow-y: scroll;

            .tool-item{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              padding: 20px 10px;
              border-bottom: 1px solid black;

              .tool-icon{
                height: 50px;
                aspect-ratio: 1/1;
              }
            }

            .tool-item:first-child{
              border-top: 1px solid black;
              border-bottom: 1px solid black;
            }
          }

          .project_links{
            display: flex;
            flex-direction: column;
            gap: 20px;
            border-radius: 15px;
            width: 100%;
            padding: 20px;
          }
        }

        .project_tools::-webkit-scrollbar{
          display: none;
        }

      }

      
      
    }
  }

  .projects-list {
    width: 20%;
    padding: 20px;
    border-radius: 20px;
    color: black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ul {
      list-style: none;
      padding: 0;

      li {
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

  
}
</style>
