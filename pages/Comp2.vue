<template>
    <div class="feature-grid">
      <div 
        class="feature-item" 
        v-for="(feature, index) in features" 
        :key="index"
      >
        <!-- Dinamik ikon -->
        <div class="icon-circle">
          <img :src="`/images/${feature.icon}`" :alt="feature.altText" class="logo" />
        </div>
  
        <!-- Dinamik başlık ve açıklama -->
        <p class="feature-text">
          <h3>{{ feature.title }}</h3>
          {{ feature.description }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // FeatureItem için bir arayüz (interface) tanımlıyoruz
  interface FeatureItem {
    icon: string; // İkonun dosya adı
    altText: string; // İkonun açıklaması (alt metni)
    title: string; // Başlık
    description: string; // Açıklama
  }
  
  // Özelliklerin listesi
  const features: FeatureItem[] = [
    {
      icon: 'verified.png',
      altText: 'Shopier Verified Logo',
      title: 'Her yerde çalışır',
      description: `Müşterileriniz ister bilgisayarlarından ister mobil cihazlarından ürünlerinizi kolayca görüntüler, 
      üye olmalarına gerek olmadan sipariş vermeye başlarlar.`
    },
    {
      icon: 'invoice.png',
      altText: 'Shopier Invoice Logo',
      title: 'Ödemeyi kolaylaştırır',
      description: `Müşteriniz siparişine sosyal medya hesabınızdan veya internet sitenizden başlamış olsun, ödeme sadece size özel sayfalarda 
      tek tıkla gerçekleşir, siparişlerinizin satışa dönüşüm oranı artar.`
    },
    {
      icon: 'add-to-cart.png',
      altText: 'Shopier Add to Cart Logo',
      title: 'Kolayca kullanılır',
      description: `Shopier'i hem siz hem müşterileriniz istediğiniz platformda kolayca kullanabilirsiniz, 
      dükkanınızda sadece size özel içerik ve ürünler yer alır.`
    },
    {
      icon: 'speedometer.png',
      altText: 'Shopier Speed Logo',
      title: 'Satışı hızlandırır',
      description: `Müşterilerinizin dükkanınızı ziyaretiyle birlikte sipariş süreci otomatik olarak başlar, 
      müşterinizle temas kurma ihtiyacı olmadan satışlarınız hızlanır.`
    }
  ];
  </script>
  
  <style scoped>
  .feature-grid {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    margin-top: 100px;
  }
  
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
  }
  
  .icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #51cbb0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .icon-circle img {
    max-width: 60%;
    max-height: 60%;
    object-fit: contain;
  }
  
  .feature-text {
    font-size: 14px;
    color: #435062;
  }
  </style>
  