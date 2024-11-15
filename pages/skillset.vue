<template>
  <div class="skills-page">

    <div class="category-section container">
      <div class="categories">
        <div 
        v-for="(skills, category) in sortedSkills" 
        :key="category" class="category-item" 
        :class="{ active: selectedCategory === category }" 
        @click="selectCategory(category as string)">
          <h2>{{ category }}</h2>
        </div>
      </div>

    </div>

    <div class="skills container">
      <div v-if="selectedCategory" class="skills-grid">
        <div v-for="skill in sortedSkills[selectedCategory]" :key="skill.name" class="skill">
          <img :src="skill.image" :alt="skill.name" />
          <div class="skill-info">
            <h3>{{ skill.name }}</h3>
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
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;
        color: black;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        &.active {
          transform: scale(1.05);
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

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface Skill {
  name: string;
  proficiency: number;
  image: string;
}

interface SkillCategory {
  [category: string]: Record<string, any>;
}

interface SortedSkills {
  [category: string]: Skill[];
}


const skillsData = ref<SkillCategory>({});
const sortedSkills = ref<SortedSkills>({});
  const selectedCategory = ref<string | null>(null);

const fetchSkills = async () => {
  try {
    const data = await import('../json/skills.json');
    skillsData.value = data.Hard_Skills;

    for (const category in skillsData.value) {
      sortedSkills.value[category] = Object.values(skillsData.value[category]);
    }

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

onMounted(fetchSkills);
</script>