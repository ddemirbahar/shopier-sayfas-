<template>
    <div class="page-container">
      <!-- Sol taraf -->
      <div class="left">
        <h1 class="title">İstediğiniz yerde kolayca satış yapın!</h1>
        <h3 class="paragraf">Shopier size, istediğiniz platform üzerinde çalışan bir alışveriş ve ödeme otomasyonu sunar. Ürünlerinizin satışını Shopier ile sosyal medya hesaplarınızda, kendi internet sitenizde veya çeşitli pazaryerlerinde kolayca yapabilirsiniz. Hatta bunlardan biri olmasa bile, Shopier üzerinde hemen bir dükkan açıp satış yapmaya başlayabilirsiniz!</h3>
        <button class="action-button">ÜCRETSİZ Üye Ol</button>
      </div>
      <!-- Sağ taraf -->
      <div class="right">
        <img src="/public/main-illustration.png" alt="Örnek Resim" class="image" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Şu anlık script kısmında bir işlem gerekmiyor
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    gap: 20px;
    height: 400px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 150px;
  }
  
  .title {
    font-size: 24px;
    color: #435062;
    margin-bottom: 20px;
  }
  
  .action-button {
    padding: 10px 20px;
    background-color: #51cbb0;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  
  }
  
  .action-button:hover {
    background-color: #51cbb0;
    color: white;
  }
  
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image {
    max-width: 600px;
    height: auto;
    border-radius: 8px;
    padding: 100px;
    margin-top: 150px;
    margin-right: 100px;
  }
  .paragraf {
    font-size: 12px;
    color: #8C96A4;


  }
  </style>
  