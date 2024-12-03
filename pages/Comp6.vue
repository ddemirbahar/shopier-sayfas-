<template>
    <div class="container">
    
      <h1 class="title">Ne Kadar Güvenli?</h1>
  
      <!-- Butonlar -->
      <div class="button-group">
        <button
          @click="selectCards(1)"
          :class="{ active: selectedSet === 1 }"
          class="action-button"
        >
          Satıcılar
        </button>
        <button
          @click="selectCards(2)"
          :class="{ active: selectedSet === 2 }"
          class="action-button"
        >
          Alıcılar
        </button>
      </div>
  
      <!-- Kartlar -->
      <div class="cards-container">
        <div v-for="(card, index) in cards" :key="index" class="card">
          <div class="card-header">
            <img :src="card.icon" alt="Card Icon" class="card-icon" />
            <h3>{{ card.title }}</h3>
          </div>
          <p class="card-description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  
  interface CardItem {
    icon: string;
    title: string;
    description: string;
  }
  
  const selectedSet = ref(1);
  const cards = ref<CardItem[]>([]);
  
  const setData = [
    
    [
      { icon: '/images/security-payment.png', title: 'Kredi Kartı Tahsilatı', description: 'Shopier dükkanınızda kredi kartı ile ödeme almak çok kolay. Müşterilerinizin kredi kartı veya banka kartı ile ödeme yapabilmesi için Shopiere üye olmanız yeterli.' },
      { icon: '/images/folder.png', title: 'Ödeme Güvencesi', description: 'Ödeme alma güvencesi olmadan ürünlerinizi göndermenize gerek yok. Shopier ile tüm siparişler ödeme işlemleri tamamlandıktan sonra işleme alınır ve tahsilatlarınız güvence altındadır.' },
      { icon: '/images/cart.png', title: 'Risksiz Gönderi', description: 'Kapıda ödemelerde yaşanılan çeşitli ödeme riskleri ve sorunları Shopier ile ortadan kalkar. Risksiz gönderi sayesinde kargo firmalarının tahsilat ücretlerine ve sürelerine bağlı kalmazsınız.' },
    ],
    
    [
      { icon: '/images/folder.png', title: 'Güven Unsuru', description: 'Satıcıyı tanımadığınız veya güvenemediğiniz için çok istediğiniz bir ürünü kaçırmazsınız. Shopier hem alıcı hem satıcının haklarını korur, tüm alışverişlerinizi karşılıklı olarak kolay ve güvenli hale getirir.' },
      { icon: '/images/cart.png', title: 'Sorunsuz Sipariş', description: 'Beğenip almak istediğiniz bir ürünün ücretini satıcının banka hesabına gönderip ürünüm acaba gelecek mi diye endişelenmenize gerek yok. Siparişinizi kredi kartınız ile güvenli biçimde verebilirsiniz.' },
      { icon: '/images/security-payment.png', title: 'Güvenli Ödeme', description: 'Shopier ile yaptığınız ödemeler, 6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun uyarınca ödeme hizmeti sağlayıcıları ve bu kapsamda Türkiye Cumhuriyet Merkez Bankası nezdinde lisanslı ödeme kuruluşları tarafından gerçekleştirilir.' },
    ],
  ];
  
  
  const selectCards = (buttonNumber: number) => {
    selectedSet.value = buttonNumber;
    cards.value = setData[buttonNumber - 1]; 
  };
  
  onMounted(() => {
    selectCards(1); 
  });
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    background-color: #f7fbfa;
  }
  
  .title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .button-group {
    margin-bottom: 20px;
    display: flex;
    justify-content: center; 
  }
  
  .action-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: white;
    border: 1px solid #ddd;
    color: #8c96a4;
    border-radius: 5px;
    transition: border-color 0.3s, background-color 0.3s;
    
  }
  
  .action-button.active {
    border-color: #51cbb0; 
    background-color: #f0f9f6; 
  }
  
  .cards-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .card {
    width: 30%;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 15px;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .card-icon {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
  
  .card h3 {
    font-size: 18px;
    color: #333;
  }
  
  .card-description {
    font-size: 16px;
    color: #555;
    text-align: left;
  }
  </style>
  