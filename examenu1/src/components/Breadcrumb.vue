<template>
    <div>
      <router-link to="/">Home</router-link>
      <span> > {{ currentPage }}</span>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      currentPage() {
        return this.$route.name;
      }
    }
  };
  </script>
  