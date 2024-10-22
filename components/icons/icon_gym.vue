<template>
  <div>
    <svg :width="size" :height="size" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M45.3398 18.5L78.8398 0L37.8398 80L31.8868 51.1511C22.1101 52.7126 11.927 48.4217 6.09775 39.7571L17.539 33.5744C21.4456 38.2945 28.167 39.8041 33.6466 36.843C39.1263 33.8818 41.5465 27.4322 39.7388 21.5778L45.3078 18.5684L45.3398 18.5ZM15.5443 3.34444C27.2908 -3.00322 41.7563 0.673893 49.0482 11.4505L37.6071 17.6331C33.7776 13.0559 27.1145 11.6538 21.6348 14.615C16.1552 17.5761 13.6767 23.9181 15.4073 29.6297L3.96606 35.8124C-1.05282 23.8075 3.798 9.69201 15.5443 3.34444ZM33.924 22.5356C35.774 25.9591 34.3723 30.3023 30.7932 32.2365C27.2141 34.1706 22.8129 32.9632 20.9629 29.5397C19.1129 26.1162 20.5146 21.773 24.0937 19.8389C27.6728 17.9047 32.074 19.1121 33.924 22.5356Z" :fill="color"/>
    </svg>
  </div>
</template>

<script lang="ts">

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
      default: "black"
    },
    size:{
      type:String,
      required: true
    }
  }
});

</script>

<style scoped lang="scss">

svg path {
  transition: fill 150ms ease-in-out;
}

</style>