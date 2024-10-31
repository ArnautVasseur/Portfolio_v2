// stores/colorModeStore.ts
import { defineStore } from 'pinia';
import { ref, watch, onMounted } from 'vue';

export const icons = [
  { src: "/types_icons/Poison.svg", alt: "Poison" },
  { src: "/types_icons/Fairy.svg", alt: "Fairy" },
  { src: "/types_icons/Psychic.svg", alt: "Psychic" },
  { src: "/types_icons/Fighting.svg", alt: "Fighting" },
  { src: "/types_icons/Ground.svg", alt: "Ground" },
  { src: "/types_icons/Fire.svg", alt: "Fire" },
  { src: "/types_icons/Electrik.svg", alt: "Electrik" },
  { src: "/types_icons/Bug.svg", alt: "Bug" },
  { src: "/types_icons/Grass.svg", alt: "Grass" },
  { src: "/types_icons/Ice.svg", alt: "Ice" },
  { src: "/types_icons/Steel.svg", alt: "Steel" },
  { src: "/types_icons/Ghost.svg", alt: "Ghost" },
  { src: "/types_icons/Dragon.svg", alt: "Dragon" },
  { src: "/types_icons/Water.svg", alt: "Water" },
  { src: "/types_icons/Flying.svg", alt: "Flying" },
  { src: "/types_icons/Dark.svg", alt: "Dark" },
  { src: "/types_icons/Normal.svg", alt: "Normal" },
  { src: "/types_icons/Rock.svg", alt: "Rock" }
];

export const useColorModeStore = defineStore('colorMode', () => {
  const colorMode = ref<string>('defaultMode'); // Default mode if not set in localStorage

  // Load the color mode from localStorage only on the client side
  onMounted(() => {
    if (typeof window !== 'undefined') {
      const savedColorMode = localStorage.getItem('nuxt-color-mode');
      if (savedColorMode) {
        colorMode.value = savedColorMode;
      }
    }
  });

  watch(colorMode, (newValue) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nuxt-color-mode', newValue);
    }
  });

  return {
    colorMode,
  };
});
