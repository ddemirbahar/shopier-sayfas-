<template>
    <nav>
      <ul>
        <li><nuxt-link to="/">Ana Sayfa</nuxt-link></li>
        <li><nuxt-link to="/Header">Component 1</nuxt-link></li>
        <li><nuxt-link to="/component2">Component 2</nuxt-link></li>
        <li><nuxt-link to="/component3">Component 3</nuxt-link></li>
        <li><nuxt-link to="/component4">Component 4</nuxt-link></li>
        <li><nuxt-link to="/component5">Component 5</nuxt-link></li>
        <li><nuxt-link to="/component6">Component 6</nuxt-link></li>
        <li><nuxt-link to="/component7">Component 7</nuxt-link></li>
        <li><nuxt-link to="/component8">Component 8</nuxt-link></li>
        <li><nuxt-link to="/component9">Component 9</nuxt-link></li>
        <li><nuxt-link to="/component10">Component 10</nuxt-link></li>
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
  