<template>
  <div class="skills-page">
    <div class="category-section container">
      <div class="categories">
        <div 
          v-for="(categoryData, category) in sortedSkills" 
          :key="category" 
          class="category-item" 
          :class="{ active: selectedCategory === category }" 
          @click="selectCategory(category as string)">
          
          <h2>{{ category }}</h2>
          <component 
            :is="categoryData.categoryImage" 
            class="category-icon" 
          />
        </div>
      </div>
    </div>

    <div class="skills container">
      <div v-if="selectedCategory" class="skills-grid">
        <div v-for="skill in sortedSkills[selectedCategory].skills" :key="skill.name" class="skill">
          <h3>{{ skill.name }}</h3>
          <div class="skill-info">
            <img :src="skill.image" :alt="skill.name" />
            <p>Proficiency: {{ skill.proficiency }}%</p>
            <div class="progress-bar">
              <div class="progress" :style="{ width: skill.proficiency + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
      <p v-else>Select a category to view its skills</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

import IconFrontEnd from '~/components/icons/icon_front-end.vue';
import IconBackEnd from '~/components/icons/icon_back-end.vue';
import IconUIUX from '~/components/icons/icon_ui-ux.vue'
import IconDatabase from '~/components/icons/icon_database.vue'
import IconCMS from '~/components/icons/icon_cms.vue'
import IconManagement from '~/components/icons/icon_management.vue'
import IconOthers from '~/components/icons/icon_others.vue'

interface Skill {
  name: string;
  proficiency: number;
  image: string;
}

interface CategoryData {
  categoryImage: any;
  skills: Skill[];
}

interface SkillCategory {
  Hard_Skills: {
    [category: string]: CategoryData;
  };
}

interface SortedSkills {
  [category: string]: CategoryData;
}

const skillsData = ref<SkillCategory>({ Hard_Skills: {} });
const sortedSkills = ref<SortedSkills>({});
const selectedCategory = ref<string | null>(null);

const fetchSkills = async () => {
  try {
    const data = await import('../json/skills.json');
    skillsData.value = data as unknown as SkillCategory;

    for (const category in skillsData.value.Hard_Skills) {
      const categoryData = skillsData.value.Hard_Skills[category];

      switch (categoryData.categoryImage) {
        case 'icon_front-end':
          categoryData.categoryImage = IconFrontEnd;
          break;
        case 'icon_back-end':
          categoryData.categoryImage = IconBackEnd;
          break;
        case 'icon_ui-ux':
          categoryData.categoryImage = IconUIUX;
          break;
        case 'icon_database':
          categoryData.categoryImage = IconDatabase;
          break;
        case 'icon_cms':
          categoryData.categoryImage = IconCMS;
          break;
        case 'icon_management':
          categoryData.categoryImage = IconManagement;
          break;
        case 'icon_others':
          categoryData.categoryImage = IconOthers;
          break;
        default:
          console.warn('Unknown category image:', categoryData.categoryImage);
      }

      sortedSkills.value[category] = categoryData;
    }

    // Select the default category if available
    if (sortedSkills.value['Front-End']) {
      selectedCategory.value = 'Front-End';
    } else {
      console.warn('Default category "Front-End" not found');
    }
  } catch (error) {
    console.error('Error loading skills:', error);
  }
};

// Function to select a category
const selectCategory = (category: string) => {
  selectedCategory.value = category;
};

// Fetch skills data when the component is mounted
onMounted(fetchSkills);
</script>

<style scoped lang="scss">
.skills-page {
  display: flex;
  gap: 50px;
  width: 100%;

  .category-section {
    width: 20%;
    padding: 20px;
    border-radius: 20px;
    color: white;

    .categories {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;

      .category-item {
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

        .category-icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .skills {
    width: 80%;
    padding: 30px;
    border-radius: 20px;
    color: black;

    .skills-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .skill {
      width: 150px;
      aspect-ratio: 1/1;
      padding: 15px;
      text-align: center;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      img {
        width: 50px;
        height: 50px;
        aspect-ratio: 1/1;
        height: auto;
      }

      .skill-info {
        margin-top: 10px;

        .progress-bar {
          height: 8px;
          width: 100%;
          background: white;
          border-radius: 4px;
          margin-top: 5px;
          overflow: hidden;

          .progress {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
