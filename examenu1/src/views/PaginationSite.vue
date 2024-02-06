<template>
    <div>
      <Breadcrumb />
      <Navbar />
      <Sidebar />
  
      <div class="content">
        <h2>Datos Paginados</h2>
      </div>
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import Navbar from '@/components/Navbar.vue';
  import Sidebar from '@/components/Sidebar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    components: {
      Breadcrumb,
      Navbar,
      Sidebar,
      Footer,
    },
  };
  </script>
  