<template>
  <div class="container">
    <h2>My Skillset</h2>
    <RouterLink to="/skillset" class="link">
      <p>See More</p>
      <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
      </svg>
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">

.container{
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  flex-shrink: 0;

  h2{
    @include mixins.h2
  }

  .link{
    position: absolute;
    bottom: 20px;
    right: 20px;
    max-width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    gap: 10px;
  }
}

</style>