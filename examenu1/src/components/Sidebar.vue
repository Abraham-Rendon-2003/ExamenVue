<template>
    <aside class="sidebar">
      <router-link to="/main-site">Main Site</router-link>
      <router-link to="/form-site">Form Site</router-link>
      <router-link to="/pagination-site">Pagination Site</router-link>
    </aside>
  </template>
  <style scoped>
  .sidebar {
    background-color: #333;
    color: #fff;
    padding: 20px;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .sidebar a {
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
  }
  
  .sidebar a:hover {
    color: #00bcd4;
  }
  </style>