<template>
  <div class="container">
    <RouterLink to="/">
      <icon-logo
        :color="hoveredIcon === 'logo' ? 'black' : 'white'"
        size="80px"
        @mouseover="hoveredIcon = 'logo'"
        @mouseleave="hoveredIcon = null"
      />
    </RouterLink>

    <div class="sub-menu">
      <RouterLink to="/projects">
        <icon-pokedex
          :color="hoveredIcon === 'pokedex' ? 'black' : 'white'"
          size="40px"
          @mouseover="hoveredIcon = 'pokedex'"
          @mouseleave="hoveredIcon = null"
        />
      </RouterLink>
      
      <RouterLink to="/skillset">
        <icon-brush
          :color="hoveredIcon === 'brush' ? 'black' : 'white'"
          size="45px"
          @mouseover="hoveredIcon = 'brush'"
          @mouseleave="hoveredIcon = null"
        />
      </RouterLink>

      <RouterLink to="/aboutme">
        <icon-gym
          :color="hoveredIcon === 'gym' ? 'black' : 'white'"
          size="40px"
          @mouseover="hoveredIcon = 'gym'"
          @mouseleave="hoveredIcon = null"
        />
      </RouterLink>
    </div>
    

    <icon-type
      color="white"
      size="65px"/>
  </div>
</template>

<script lang="ts" setup>
const hoveredIcon = ref<string | null>(null);
</script>

<style scoped lang="scss">

.container {
  width: 136px;
  height: 100%;
  border-radius: 20px;
  background-color: variables.$c_water;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
  flex:none;
}

.sub-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}


</style>
