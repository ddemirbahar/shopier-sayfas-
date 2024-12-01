<template>
    <nav>
      <ul>
        <li><nuxt-link to="/">Ana Sayfa</nuxt-link></li>
        <li><nuxt-link to="/Header">Header</nuxt-link></li>
        <li><nuxt-link to="/Comp1">Component 1</nuxt-link></li>
        <li><nuxt-link to="/Comp2">Component 2</nuxt-link></li>
  
      </ul>
    </nav>
  </template>
  
  <script setup>
  // Navbar component setup
  </script>
  
  <style scoped>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: #f4f4f4;
    padding-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
  }
  
  nuxt-link {
    text-decoration: none;
    color: #333;
  }
  </style>
  