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
onMounted(() => {
  if (localStorage.getItem("nuxt-color-mode") !== "Ghost") {
    localStorage.setItem("nuxt-color-mode", "Ghost");
  }
});
</script>