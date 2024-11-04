<template>
  <div class="homepage">
    <div class="presentation">
      <Icon_svgtypes :name=currentColor class="background-icon"/>
      <h1>My name is <span class="name">Arnaut Vasseur</span>,<br/> a web developer.</h1>
      <p class="subtitle left">( and a pokemon fan )</p>
      <p class="subtitle right-1">( and my favorite Pokemon is Dhelmise )</p>
      <p class="subtitle right-2">( and my favorite type is ghost )</p>
      <p class="subtitle right-3">( and my favorite region is Sinnoh )</p>
    </div>
    <skillset-preview class="projects"/>
    <!-- <skillset-preview class="skillset"/>
    <skillset-preview class="aboutMe"/> -->

  </div>
</template>

<script setup lang="ts">
import { useColorModeStore } from "../stores/global";

const colorModeStore = useColorModeStore();

const currentColor = computed(() => colorModeStore.colorMode);

</script>

<style scoped lang="scss">

.homepage{
  width: 100%;
  height: 100%;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, 1fr) 30%;
  grid-template-rows: 1fr 45%;
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  .presentation { grid-area: 1 / 1 / 2 / 3; }
  .projects { grid-area: 2 / 1 / 3 / 2; }
  .skillset { grid-area: 2 / 2 / 3 / 3; }
  .aboutMe { grid-area: 1 / 3 / 3 / 4; }

  .presentation{
    position: relative;

    h1{
      color: #000;
      font-size: variables.$h1;
      font-style: normal;
      font-weight: 400;
      line-height: 60px;
    }

    .left{
      font-size: 20px;
    }

    .right-1, .right-2, .right-3{
      text-align: end;
      line-height: 30px;
    }

    .right-1{
      font-size: 20px;
    }

    .right-2{
      font-size: 16px;
    }

    .right-3{
      font-size: 12px;
    }
  }
}

.background-icon{
  position: absolute;
  bottom: -30%;
  left: -10%;
  transform: rotate(15deg);
  opacity: 30%;
  z-index: -1;
}

</style>