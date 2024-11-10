<template>
  <div class="homepage">
    <icon-type v-if="isMobile" class="icon_type icon_bg" />
    <div v-if="isMobile" class="icon_home icon_bg">
      <RouterLink to="/" >
        <icon-logo class="icon_mobile"
          :color="hoveredIcon === 'home' ? 'black' : 'white'"
          @mouseover="hoveredIcon = 'home'"
          @mouseleave="hoveredIcon = null"
        />
      </RouterLink>
    </div>
    <div class="presentation">
      <Icon_svgtypes :name=currentColor class="background-icon"/>
      <h1>My name is <span class="name">Arnaut Vasseur</span>,<br/> a web developer.</h1>
      <p class="subtitle left">( and a pokemon fan )</p>
      <p v-if="!isMobile" class="subtitle right-1">( and my favorite Pokemon is Dhelmise )</p>
      <p v-if="!isMobile" class="subtitle right-2">( and my favorite type is ghost )</p>
      <p v-if="!isMobile" class="subtitle right-3">( and my favorite region is Sinnoh )</p>
    </div>
    <projects-preview class="projects"/>
    <skillset-preview class="skillset"/>
    <aboutme_preview class="aboutMe"/>
    <div class="spacer"></div>
  </div>
</template>

<script setup lang="ts">
import { useColorModeStore } from "../stores/global";

const colorModeStore = useColorModeStore();

const currentColor = computed(() => colorModeStore.colorMode);

const isMobile = ref(false);
const hoveredIcon = ref<string | null>(null);

function updateIconSize() {
  const screenWidth = window.innerWidth;
  isMobile.value = screenWidth <= 768
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

.homepage{
  width: 100%;
  
  
  @include mixins.mq('xs') {
    padding: 120px 20px 20px 20px;
    min-height: calc(100vh + 80px);
  }
  @include mixins.mq('sm') {
    display: grid;
    grid-template-rows: max-content 1fr 1fr;
    grid-template-columns: 50% 50%;
    padding: 150px 40px 40px 40px;
    gap: 10px;
    min-height: auto;
  }
  @include mixins.mq('md') {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    padding: 0px;
  }
  @include mixins.mq('lg') {
    grid-template-columns: repeat(2, 1fr) 30%;
    grid-template-rows: 1fr 45%;
    gap: 30px;
    padding: 0px;
  }
  @include mixins.mq('xl') {
    grid-template-columns: repeat(2, 1fr) 30%;
    gap: 40px;
    padding: 0px;
  }

  .presentation { 
    @include mixins.mq('xs') {
    }
    @include mixins.mq('sm') {
      grid-area: 1 / 1 / 2 / 3;
      margin-bottom: 50px;
    }
    @include mixins.mq('md') {
      grid-area: 1 / 1 / 2 / 2;
      margin-bottom: 0px;
    }
    @include mixins.mq('lg') {
      grid-area: 1 / 1 / 2 / 3;
      margin-bottom: 0px;
    }
    @include mixins.mq('xl') {
      grid-area: 1 / 1 / 2 / 3; 
      margin-bottom: 0px;
    }
  }

  .projects { 
    @include mixins.mq('xs') {
      margin: 30px 0px;
    }
    @include mixins.mq('sm') {
      grid-area: 2 / 1 / 3 / 2;
      margin: 0px;
    }
    @include mixins.mq('md') {
      grid-area: 2 / 1 / 4 / 2;
    }
    @include mixins.mq('lg') {
      grid-area: 2 / 1 / 4 / 1;
    }
    @include mixins.mq('xl') {
      grid-area: 2 / 1 / 3 / 1; 
    }
  }

  .skillset { 
    @include mixins.mq('xs') {
      grid-area: 3 / 1 / 4 / 2;
      margin: 30px 0px;
    }
    @include mixins.mq('sm') {
      grid-area: 2 / 2 / 3 / 3;
      margin: 0px;
    }
    @include mixins.mq('md') {
      grid-area: 2 / 2 / 4 / 3;
    }
    @include mixins.mq('lg') {
      grid-area: 2 / 2 / 4 / 3;
    }
    @include mixins.mq('xl') {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
  
  .aboutMe { 
    @include mixins.mq('xs') {

    }
    @include mixins.mq('sm') {
      grid-area: 3 / 1 / 4 / 3;
      margin: 0px;
    }
    @include mixins.mq('md') {
      grid-area: 1 / 2 / 2 / 3;
    }
    @include mixins.mq('lg') {
      grid-area: 1 / 3 / 4 / 3;
    }
    @include mixins.mq('xl') {
      grid-area: 1 / 3 / 3 / 3;
    }
  }

  .presentation{
    position: relative;

    h1{
      color: #000;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 60px;

      @include mixins.mq('xs'){
        font-size: 24px;
        line-height: 40px;
      }
      @include mixins.mq('sm'){
        font-size: 32px;
        line-height: 60px;
      }
    }

    .left{
      font-size: 20px;

      @include mixins.mq('xs'){
        font-size: 16px;
      }
    }

    .right-1, .right-2, .right-3{
      text-align: end;
      line-height: 30px;
    }

    .right-1{
      @include mixins.mq('xs') {
        font-size: 12px
      }
      @include mixins.mq('xl') {
        font-size: 20px;
      }
    }

    .right-2{
      @include mixins.mq('xs') {
        font-size: 12px
      }
      @include mixins.mq('xl') {
        font-size: 16px;
      }
    }

    .right-3{
      font-size: 12px;
    }
  }

  .icon_type{
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .icon_home{
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .icon_bg{
    padding: 20px;
    border-radius: 15px;
    width: fit-content;
    height: fit-content;

    .icon_mobile{
      width: 40px;
      @include mixins.mq('sm') {
        width: 80px;
      }
    }
  } 
  
  .spacer {
    height: 110px;
    @include mixins.mq("sm") {
      height: 90px;
    }
    @include mixins.mq("md") {
      display: none;
    }
  }
}

.background-icon{
  position: absolute;
  width: fit-content;
  transform: rotate(15deg);
  opacity: 30%;
  z-index: -1;

  @include mixins.mq('xs') {
    display: none;
  }
  @include mixins.mq('sm') {
    display: block;
    right: 0;
    bottom: 0;
    
    * {
      width: 200px;
      height: 200px;
    }
  }
  @include mixins.mq('md') {
    display: block;
    right: 0;
    bottom: -15%;
    
    * {
      width: 200px;
      height: 200px;
    }
  }
  @include mixins.mq('lg') {
    display: block;
    right: 0;
    bottom: -30%;
    
    * {
      width: 250px;
      height: 250px;
    }
  }
  @include mixins.mq('xl') {
    display: block;
    right: 0;
    bottom: -30%;
    
    * {
      width: 300px;
      height: 300px;
    }
  }
}

</style>