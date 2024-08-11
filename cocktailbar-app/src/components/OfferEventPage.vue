<template>
    <div>
      <ImageCarouselEvent />
    </div>
  </template>
  
  <script>
  import ImageCarouselEvent from './ImageCarouselEvent.vue';
  export default {
    name: 'OfferEventPage',
    components: {
      ImageCarouselEvent
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