<template>
    <div>
      <Breadcrumb />
      <Navbar />
      <Sidebar />
  
      <div class="content">
        <h2>Formulario de Registro de Vehículo</h2>
        <form @submit.prevent="submitForm" class="registration-form">
          <div class="form-group">
            <label for="marca">Marca:</label>
            <input type="text" id="marca" v-model="marca" required />
          </div>
  
          <div class="form-group">
            <label for="modelo">Modelo:</label>
            <input type="text" id="modelo" v-model="modelo" required />
          </div>
  
          <div class="form-group">
            <label for="anio">Año de Fabricación:</label>
            <input type="number" id="anio" v-model="anio" :max="currentYear" required />
          </div>
  
          <div class="form-group">
            <label for="numeroSerie">Número de Serie:</label>
            <input type="text" id="numeroSerie" v-model="numeroSerie" pattern="[A-Z]{4}\d{3}-\d{2}[A-Z]{2}" required />
            <small>Formato: XXXX000-00XX</small>
          </div>
  
          <button type="submit">Registrar Vehículo</button>
        </form>
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
    data() {
      return {
        marca: '',
        modelo: '',
        anio: null,
        numeroSerie: '',
        currentYear: new Date().getFullYear(),
      };
    },
    methods: {
      submitForm() {
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log('Datos del formulario:', {
          marca: this.marca,
          modelo: this.modelo,
          anio: this.anio,
          numeroSerie: this.numeroSerie,
        });
      },
    },
  };
  </script>
  
  <style scoped>
.content {
  margin-left: 220px; /* Ajusta este valor según el ancho del Sidebar */
  padding: 20px;
}

.registration-form {
  max-width: 400px;
  margin: 0 auto;
}

.registration-form label {
  display: block;
  margin-bottom: 10px;
}

.registration-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
}

.registration-form button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.registration-form button:hover {
  background-color: #45a049;
}
</style>