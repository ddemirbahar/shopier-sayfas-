<template>
    <div class="container">
      <!-- Sol Taraf -->
      <div class="left-column">
        <h2 class="title1">Size Özel Dükkan</h2>
        <p class="description1">Kendi dükkanınızı oluşturup hemen satışa başlayabilirsiniz!</p>
        <img src="/images/shop-illustration-tr-min.png" alt="Sol Resim" class="image" />
        <button class="action-button">Örnek Dükkanı İncele</button>
      </div>
  
      <!-- Sağ Taraf -->
      <div class="right-column">
        <div class="right-item">
          <h3 class="title">Üyelik veya aylık kullanım ücreti ödemeyin</h3>
          <p class="description">Shopier üyeliğinizi ücretsiz oluşturun, size özel dükkanınızı aylık bir ücret ödemeden hemen kullanmaya başlayın.</p>
        </div>
        <div class="right-item">
          <h3 class="title">Dükkanınızı özelleştirin</h3>
          <p class="description">Shopier dükkanınıza kendi logonuzu, dükkan görsellerinizi, dükkanınızla ilgili tanıtıcı bilgileri kaydedin.</p>
        </div>
        <div class="right-item">
          <h3 class="title">Ürünlerinizi listeleyin</h3>
          <p class="description">Satışa sunacağınız ürünlerinizi listeleyip dükkan sayfanızın içeriğini oluşturmaya başlayın.</p>
        </div>
        <div class="right-item">
          <h3 class="title">Satışa hazırsınız</h3>
          <p class="description">Artık satışa hazırsınız! Müşterileriniz dükkan linkinizi ister bilgisayarlarından ister mobil cihazlarından ziyaret edip dükkanınızdan sipariş vermeye başlayabilirler.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Sol ve Sağ taraflar için veriler
  const leftContent = ref({
    title1: 'Sol Başlık',
    text: 'Sol tarafta açıklama metni yer alacak.',
    image: 'example1.jpg',
  });
  
  const rightContent = ref([
    { title: 'Başlık 1', text: 'Açıklama 1' },
    { title: 'Başlık 2', text: 'Açıklama 2' },
    { title: 'Başlık 3', text: 'Açıklama 3' },
    { title: 'Başlık 4', text: 'Açıklama 4' },
  ]);
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
  background-color: #f7fbfa;

  }
  
  .left-column {
    width: 48%;
  }
  
  .right-column {
    width: 48%;
  }
  
  .title {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }
  .title1 {
    font-size: 35px;
    color: #333;
    margin-bottom: 10px;
    text-align: center;
  }
  .description {
    font-size: 16px;
    color: #8c96a4;
    margin-bottom: 10px;
    margin-top: 25px;
  }
  .description1 {
    font-size: 16px;
    color: #8c96a4;
    margin-bottom: 10px;
    text-align: center;
  }
  .image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  
  .action-button {
    padding: 10px 20px;
    background-color: #51cbb0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 200px;
  }
  .action-button:hover {
    background-color: #51cbb8;
  }
  
  .right-item {
    margin-bottom: 15px;
  }
  </style>
  