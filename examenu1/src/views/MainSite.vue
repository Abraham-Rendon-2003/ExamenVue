<template>
    <div>
      <Breadcrumb />
      <Navbar />
      <Sidebar />
  
      <div class="content">
        <h2>Bienvenido al Sitio Principal</h2>
        <p>Este es el contenido principal de la página.</p>
        <img src="https://th.bing.com/th/id/R.72a4bb236e2db3cce154e63f5632a113?rik=9OOJFnEg9bWMqg&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED468%2f5d87d6e6211d5.jpeg&ehk=%2fTY56gjPZKAzEVse0mESGc%2b5ZLtzwXzeeeEDtSfGfNg%3d&risl=&pid=ImgRaw&r=0" alt="Main Site Image">
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
  