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
  padding: 50px;
  display: flex;
  gap: 50px;
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