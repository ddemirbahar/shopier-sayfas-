<template>
    <div class="container">
      <div class="image-container">
        <img src="/public/sh.png" alt="Image" />
      
        <div class="button-wrapper">
          <p class="button-text"><h2 class="h2text">SHOPİER <h2 class="text">ile takiçilerinizi </h2> <h2 class="text">müşterilerinize dönüştürmek</h2> <h2 class="text">ister misiniz?</h2></h2></p>
          <button class="button">ÜCRETSİZ Üye Ol</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    position: relative;
  }
  
  .image-container {
    width: 100%;
    height: 300px; 
    position: relative;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  
  .button-wrapper {
    position: absolute;
    top: 20px;
    right: 200px; 
    text-align: right; 
    
  }
  
  .button-text {
    margin-bottom: 10px; 
    font-size: 16px;
    color: white;
    
  
  }
  
  .button {
    padding: 10px 20px;
    background-color: #51cbb0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .button:hover {
    background-color:#51cbb0 ;
  }
  .h2text {
    color: #51cbb0;
  }
  .text {
    color: white;
  }
  </style>
  