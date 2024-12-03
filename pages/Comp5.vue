<template>
    <div class="container">
      
      <p class="title">{{ content.title }}</p>
  
      <!-- Metin ve Buton Grupları -->
      <div class="content-group">
        <h2 class="description">{{ content.text }}</h2>
  
        <div class="button-group">
          <button v-for="(button, index) in content.buttons" :key="index" class="icon-button">
            <img :src="`/images/${button.image}`" :alt="'Button ' + (index + 1)" />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  interface ButtonItem {
    image: string;
  }
  
  
  const content = {
     text: "Mobil uygulamalarımızı hemen indirin!",
    title: "SHOPIER MOBİL",
   
    buttons: [
      { image: "app-store.png" },
      { image: "google-play.png" },
    ] as ButtonItem[],
  };
  </script>
  
  <style scoped>
  .container {
    width: 100%; 
    padding: 20px;
    box-sizing: border-box;
    background-color: #f9f9f9;
   
  }
  
  .title {
    font-size: 16px;
    color: #8c96a4;
    margin-bottom: 15px;
    margin-left: 25%;
  }
  
  .content-group {
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 20px; 
  }
  
  .description {
    font-size: 24px;
    color: #555;
    margin: 0;
    text-align: center;
  }
  
  .button-group {
    display: flex;
    gap: 10px; 
   
  }
  
  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    

  }
  
  .icon-button img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    

  }
  </style>
  