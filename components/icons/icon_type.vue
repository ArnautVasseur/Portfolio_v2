<template>
  <div class="type-list-container">
    <div class="mask" :class="isDropdownOpen ? 'mask-visible' : ''" @click="toggleDropdown"></div>

    <div class="selected-icon" @click="toggleDropdown">
      <component :is="currentIcon.component"/>
    </div>

    <transition name="slide" @before-leave="beforeLeave" @leave="leave">
      <div v-if="isDropdownOpen" class="dropdown-menu">
        <ul>
          <li
            v-for="(icon, index) in icons"
            :key="index"
            @click="selectIcon(index)"
            @mouseover="hoverIcon(icon.alt)"
            @mouseleave="resetHoverIcon"
            :style="{
              '--i': index,
              backgroundColor: hoveredIcon === icon.alt ? Colors[icon.alt] : 'transparent'
            }"
            class="icon-item"
          >
            <component :is="icon.component" />
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useColorModeStore } from "../../stores/global";

import BugIcon from './types_icons/Bug.vue';
import DarkIcon from './types_icons/Dark.vue';
import DragonIcon from './types_icons/Dragon.vue';
import ElectrikIcon from './types_icons/Electrik.vue';
import FairyIcon from './types_icons/Fairy.vue';
import FightingIcon from './types_icons/Fighting.vue';
import FireIcon from './types_icons/Fire.vue';
import FlyingIcon from './types_icons/Flying.vue';
import GhostIcon from './types_icons/Ghost.vue';
import GrassIcon from './types_icons/Grass.vue';
import GroundIcon from './types_icons/Ground.vue';
import IceIcon from './types_icons/Ice.vue';
import NormalIcon from './types_icons/Normal.vue';
import PoisonIcon from './types_icons/Poison.vue';
import PsychicIcon from './types_icons/Psychic.vue';
import SteelIcon from './types_icons/Steel.vue';
import RockIcon from './types_icons/Rock.vue';
import WaterIcon from './types_icons/Water.vue';

interface Icon {
  component: any;
  alt: string;
}

const colorModeStore = useColorModeStore();
const colorMode = useColorMode();

const icons = shallowRef<Icon[]>([
  { component: PoisonIcon, alt: "Poison" },
  { component: FairyIcon, alt: "Fairy" },
  { component: PsychicIcon, alt: "Psychic" },
  { component: FightingIcon, alt: "Fighting" },
  { component: GroundIcon, alt: "Ground" },
  { component: FireIcon, alt: "Fire" },
  { component: ElectrikIcon, alt: "Electrik" },
  { component: BugIcon, alt: "Bug" },
  { component: GrassIcon, alt: "Grass" },
  { component: IceIcon, alt: "Ice" },
  { component: SteelIcon, alt: "Steel" },
  { component: GhostIcon, alt: "Ghost" },
  { component: DragonIcon, alt: "Dragon" },
  { component: WaterIcon, alt: "Water" },
  { component: FlyingIcon, alt: "Flying" },
  { component: DarkIcon, alt: "Dark" },
  { component: NormalIcon, alt: "Normal" },
  { component: RockIcon, alt: "Rock" }
]);

// Define colors for each icon type
const Colors: Record<string, string> = {
  Poison: '#AB6AC8',
  Fairy: '#EC8FE6',
  Psychic: '#F97176',
  Fighting: '#CE4069',
  Ground: '#D97746',
  Fire: '#FF9C54',
  Electrik: '#FFCB00',
  Bug: '#90C12C',
  Grass: '#63BB5B',
  Ice: '#74CEC0',
  Steel: '#5A8EA1',
  Ghost: '#5269AC',
  Dragon: '#0A6DC4',
  Water: '#4D90D5',
  Flying: '#8FA8DD',
  Dark: '#5A5366',
  Normal: '#9099A1',
  Rock: '#C7B78B'
};

// Define component state and reactive properties
const currentIcon = shallowRef<Icon>(icons.value[11]);
const isDropdownOpen = ref(false);
const showIcons = shallowRef(false);
const hoveredIcon = ref<string | null>(null);

// Computed property for the remaining icons
const remainingIcons = computed<Icon[]>(() => {
  return icons.value;
});

// Toggle the dropdown menu visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  if (isDropdownOpen.value) {
    showIcons.value = true;
  }
};

// Select an icon and update the color mode
const selectIcon = (index: number) => {
  const selectedIcon = remainingIcons.value[index];
  currentIcon.value = selectedIcon;
  isDropdownOpen.value = false;

  const selectedMode = selectedIcon.alt;
  if (selectedMode) {
    colorMode.preference = selectedMode;
    colorModeStore.colorMode = selectedMode;
  }
};

// Handle icon hover states
const hoverIcon = (iconAlt: string) => {
  hoveredIcon.value = iconAlt;
};

const resetHoverIcon = () => {
  hoveredIcon.value = null;
};

// Control visibility of icons during transitions
const beforeLeave = () => {
  showIcons.value = false;
};

const leave = () => {
  showIcons.value = false;
};
</script>

<style scoped lang="scss">

.type-list-container {
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;

  .mask {
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 0;
    height: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    transition: all 0.4s;
  }

  .mask-visible{
    width: 100vw;
    height: 100vh;
    opacity: 1;
  }

  .selected-icon {
    cursor: pointer;

    > *{
      fill: white;

      @include mixins.mq('xs') {
        width: 40px;
        height: 40px;
      }
      @include mixins.mq('sm') {
        width: 80px;
        height: 80px;
      }
    }

    *:hover{
      fill: black;
    }
  }

  .dropdown-menu {
    position: fixed;
    max-width: fit-content;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 15px;
    border-radius: 20px;
    overflow: hidden;
    z-index: 20;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 15px;
      justify-items: center;
      align-items: center;
      place-items: center;

      @include mixins.mq('xs'){
        grid-template-columns: repeat(3, 1fr);
      }
      @include mixins.mq('sm'){
        grid-template-columns: repeat(6, 1fr);
      }
    }
  }
}

.icon-item {
  padding: 5px;
  cursor: pointer;
  opacity: 0;
  animation: slideIn 0.3s ease forwards;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  border-radius: 10px;

  &:not(:hover) * {
    fill: white;
  }

  > *{
    width: 50px;
    height: 50px;
  }
}

.icon-item:nth-child(n) {
  animation-delay: calc(0.05s * var(--i));
}

.slide-enter-active {
  animation: animatedSize 1s ease-in-out;
}

.slide-leave-active {
  animation: animatedSize 0.75s ease-in-out reverse;
  padding: 0;
}

@keyframes animatedSize {
  0% {
    width: 0;
  }
  100% {
    width: 1230px;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.icon-item.leaving {
  animation: fadeOut 0.3s ease forwards;
}
</style>