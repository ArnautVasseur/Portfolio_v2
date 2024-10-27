<template>
  <div class="type-list-container">
    <div class="mask" :class="isDropdownOpen ? 'mask-visible': ''" @click="toggleDropdown"></div>

    <div class="selected-icon" @click="toggleDropdown">
      <img :src="currentIcon.src" :alt="currentIcon.alt" />
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
              <img :src="icon.src" :alt="icon.alt" />
            </li>
          </ul>
        </div>
      </transition>
    </div>
</template>

<script lang="ts">

interface Icon {
  src: string;
  alt: string;
}

export default {
  setup() {

    const icons = ref<Icon[]>([
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
    ]);

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

    const colorMode = useColorMode()
    console.log(colorMode.preference)

    const currentIcon = ref<Icon>(icons.value[0]);
    const isDropdownOpen = ref(false);
    const showIcons = ref(false);
    const hoveredIcon = ref<string | null>(null);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
      if (isDropdownOpen.value) {
        showIcons.value = true;
      }
    };

    const remainingIcons = computed<Icon[]>(() => {
      return icons.value;
    });

    const selectIcon = (index: number) => {
      const selectedIcon = remainingIcons.value[index];
      currentIcon.value = selectedIcon;
      isDropdownOpen.value = false;

      const selectedMode = selectedIcon.alt;
      if (selectedMode) {
        colorMode.preference = selectedMode;
        console.log(colorMode.preference)
      }
    };

    const beforeLeave = () => {
      showIcons.value = false;
    };

    const leave = () => {
      showIcons.value = false;
    };

    const hoverIcon = (iconAlt: string) => {
      hoveredIcon.value = iconAlt;
    };

    const resetHoverIcon = () => {
      hoveredIcon.value = null;
    };

    return {
      currentIcon,
      remainingIcons,
      isDropdownOpen,
      toggleDropdown,
      selectIcon,
      showIcons,
      beforeLeave,
      Colors,
      hoverIcon,
      resetHoverIcon,
      hoveredIcon,
      leave,
      colorMode,
      icons
    };
  }
};
</script>

<style scoped lang="scss">

.mask {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 0;
  height: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  transition: all 0.5s;
}

.mask-visible{
  width: 100vw;
  height: 100vh;
  opacity: 1;
}

.type-list-container {
  display: flex;
  align-items: center;
}

.selected-icon img {
  filter: invert(100%);
  width: 65px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  max-width: fit-content;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  padding: 15px;
  border-radius: 20px;
  overflow: hidden;
  z-index: 20;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  justify-items: center;
  align-items: center;
  place-items: center;
}

.icon-item {
  padding: 5px;
  cursor: pointer;
  opacity: 0;
  animation: slideIn 0.3s ease forwards;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  border-radius: 10px;

  &:not(:hover) {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg);
  }
}


.icon-item:nth-child(n) {
  animation-delay: calc(0.05s * var(--i));
}

.dropdown-menu img {
  width: 40px;
  height: auto;
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