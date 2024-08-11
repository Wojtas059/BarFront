<template>
  <div>
    <ImageCarouselAbout />
  </div>
</template>

<script>
import ImageCarouselAbout from './ImageCarouselAbout.vue';
export default {
  name: 'AboutPage',
  components: {
    ImageCarouselAbout
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
}
</style>