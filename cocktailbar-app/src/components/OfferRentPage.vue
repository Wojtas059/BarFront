<template>
    <div>
      <ImageCarouselRent />
    </div>
  </template>
  
  <script>
  import ImageCarouselRent from './ImageCarouselRent.vue';
  export default {
    name: 'OfferRentPage',
    components: {
      ImageCarouselRent
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