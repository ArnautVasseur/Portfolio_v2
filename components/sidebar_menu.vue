<template>
  <div class="container">
    <RouterLink to="/" v-if="!isMobile">
      <icon-logo
        :color="hoveredIcon === 'logo' ? 'black' : 'white'"
        size="5rem"
        @mouseover="hoveredIcon = 'logo'"
        @mouseleave="hoveredIcon = null"
      />
    </RouterLink>

    <div class="sub-menu">
      <div v-if="isMobile" class="icon_mobile">
        <RouterLink to="/" >
          <icon-home
            :color="hoveredIcon === 'home' ? 'black' : 'white'"
            :size="iconSize"
            @mouseover="hoveredIcon = 'home'"
            @mouseleave="hoveredIcon = null"
          />
        </RouterLink>
        <h3>Home</h3>
      </div>

      <div class="icon_mobile">
        <RouterLink to="/projects">
          <icon-pokedex
            :color="hoveredIcon === 'pokedex' ? 'black' : 'white'"
            :size="iconSize"
            @mouseover="hoveredIcon = 'pokedex'"
            @mouseleave="hoveredIcon = null"
          />
        </RouterLink>
        <h3 v-if="isMobile">Projects</h3>
      </div>
      
      <div class="icon_mobile">
        <RouterLink to="/skillset">
          <icon-brush
            :color="hoveredIcon === 'brush' ? 'black' : 'white'"
            :size="iconSize"
            @mouseover="hoveredIcon = 'brush'"
            @mouseleave="hoveredIcon = null"
          />
        </RouterLink>
        <h3 v-if="isMobile">Skillset</h3>
      </div>

      <div class="icon_mobile">
        <RouterLink to="/aboutme">
          <icon-gym
            :color="hoveredIcon === 'gym' ? 'black' : 'white'"
            :size="iconSize"
            @mouseover="hoveredIcon = 'gym'"
            @mouseleave="hoveredIcon = null"
          />
        </RouterLink>
        <h3 v-if="isMobile">About Me</h3>
      </div>
    </div>
    
    <icon-type v-if="!isMobile" />
  </div>
</template>

<script lang="ts" setup>

const hoveredIcon = ref<string | null>(null);
const iconSize = ref('2.5rem');
const isMobile = ref(false);

function updateIconSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 678) {
    iconSize.value = '1.563rem';
  } else {
    iconSize.value = '2.5rem';
  }
  isMobile.value = screenWidth <= 1024
}

onMounted(() => {
  updateIconSize();
  window.addEventListener('resize', updateIconSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIconSize);
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex: none;
  z-index: 2;

  @include mixins.mq("xs") {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    flex-direction: row;
    border-radius: 15px 15px 0 0;
    justify-content: center;
    padding: 15px 0;
  }
  @include mixins.mq("sm") {
    flex-direction: column;
    width: 100%;
    height: 100px;
  }
  @include mixins.mq("md") {
    position: relative;
    width: 130px;
    height: 100%;
    border-radius: 20px;
    justify-content: space-between;
    padding: 20px 0;
  }
  @include mixins.mq("lg") {
    padding: 30px 0;
  }
}

.sub-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @include mixins.mq("xs") {
    flex-direction: row;
    gap: 0px;
  }
  @include mixins.mq("sm") {
    gap: 0px;
  }
  @include mixins.mq("md") {
    flex-direction: column;
    gap: 40px;
  }
  @include mixins.mq("lg") {
    gap: 50px;
  }
  @include mixins.mq("xl") {
    gap: 60px;
  }

  .icon_mobile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;

    h3{
      font-size: 12px;
      @include mixins.mq('sm'){
        font-size: 18px;
      }
    }
  }
}
</style>