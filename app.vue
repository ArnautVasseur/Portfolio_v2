import { Dragon } from './.nuxt/components';
<template>
  <div class="main">
    <sidebar-menu/>
    <NuxtPage/>
  </div>
</template>

<style scoped lang="scss">

.main{
  width: 100%;
  height: 100vh;
  @include mixins.mq('xs') {
    padding: 0px;
    gap: 20px;
  }
  @include mixins.mq('sm') {
    padding: 0px;
    gap: 20px;
  }
  @include mixins.mq('md') {
    padding: 30px;
    gap: 30px;
  }
  @include mixins.mq('lg') {
    padding: 40px;
    gap: 40px;
  }
  @include mixins.mq('xl') {
    padding: 50px;
    gap: 50px;
  }
  display: flex;
  
  font-family: variables.$Sen;
}

</style>

<script setup lang="ts">
import { useColorModeStore } from "./stores/global";
const colorModeStore = useColorModeStore();
const colorMode = useColorMode();

onMounted(() => {
  if (localStorage.getItem("nuxt-color-mode") !== "Ghost") {
    localStorage.setItem("nuxt-color-mode", "Ghost");
  }
  localStorage.setItem("nuxt-color-mode", "Ghost");
  colorMode.preference = "Ghost"
});
</script>