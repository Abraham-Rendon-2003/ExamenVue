<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  background-color: #3498db;
  padding: 10px;
  color: #fff;
}

aside {
  background-color: #2c3e50;
  color: #fff;
  padding: 10px;
}

footer {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
