<template>
    <h1 class="main-title">Fiyatlama</h1>
    <div class="pricing-container">
      <!-- Sol taraf -->
      <div class="left-side">
        <!-- Başlıklar ve açıklamalar -->
        <div class="left-item" v-for="(feature, index) in leftFeatures" :key="index">
          <h3>{{ feature }}</h3>
          <p class="feature-description">{{ leftDescriptions[index] }}</p>
        </div>
  
        <!-- Renkli container (ikiye bölünmüş) -->
        <div class="colored-footer">
          <div class="colored-left">
            <h3>Yurt İçi</h3>
            <p>%2,99 + 0,49 TL</p>
            <p>'den başlayan işlem ücretleriyle</p>
          </div>
          <div class="colored-right">
            <h3>Yurt Dışı</h3>
            <p>%3,99 + 0,49 TL</p>
            <p>'den başlayan işlem ücretleriyle</p>
          </div>
        </div>
  
        <!-- Renkli container altındaki yazı -->
        <p class="below-colored-footer-text">
          * Taksitli işlemler ek ücrete tabidir. <br />
          * Belirtilen ücretlere KDV dahildir.
        </p>
      </div>
  
      <!-- Sağ taraf -->
      <div class="right-side">
        <div class="info" v-for="(item, index) in rightFeatures" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
  
        <!-- Sağ taraftaki buton -->
        <button class="right-button">Ücretsiz Üye Ol</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "PricingComponent",
    setup() {
      // Sol taraf için özellikler
      const leftFeatures: string[] = [
        "Ücretsiz üyelik",
        "Aylık ücret yok",
        "Listeleme ücreti yok",
         "Gizli ücret yok"
      ];
  
      // Sol taraftaki açıklamalar
      const leftDescriptions: string[] = [
        "Shopier'e herhangi bir ücret ödemeden kolayca üye olabilirsiniz",
        "Üyeliğiniz boyunca aylık olarak bir ücret ödemezsiniz",
        "Shopier'de ürün listelemek için bir ücret ödemezsiniz",
        "Shopier'i kullanırken gizli ücretlerle karşılaşmazsınız"
      ];
  
      // Sağ taraf için özellikler
      const rightFeatures: { title: string; description: string }[] = [
        {
          title: "İster bireysel, ister kurumsal üyelik",
          description:
            "İster bireysel olarak satış yapın ya da bir işletme sahibi olun, Shopier'e üye olmak ve satış yapmaya başlamak çok kolay."
        },
        {
          title: "Geniş ödeme seçenekleri",
          description:
            "Müşterilerinizden kredi kartı veya banka kartı ile ödeme alabilirsiniz. Ödeme almaya başlamak için ürününüzü satışa çıkartmanız yeterli."
        },
        {
          title: "Ödemeler her Çarşamba banka hesabınızda",
          description:
            "Tamamlanan siparişler için ödemeleriniz her hafta Çarşamba günleri banka hesabınıza otomatik olarak aktarılır."
        },
        {
          title: "Taksit imkanı",
          description:
            "Shopier ile Türkiye'deki kredi kartlarına sahip müşterilerinize taksit imkanı sunabilirsiniz. Müşterileriniz 12 taksite kadar ödeme yapabilirken, siz tahsilatınızı tek seferde alırsınız."
        }
        
      ];
  
      return {
        leftFeatures,
        leftDescriptions,
        rightFeatures
      };
    }
  });
  </script>
  
  <style scoped>
  .pricing-container {
    display: flex;
    gap: 50px;
    padding: 20px;
    background-color: white;
    justify-content: center; /* Yatayda ortalama */
    align-items: center; /* Dikeyde ortalama */
    width: 100%; /* Yüzde 100 genişlik, ama flexbox ile ortalanacak */
    max-width: 1200px; /* Maksimum genişlik */
    margin: 0 auto; /* Container'ı ortalamak için */
  }
  
  .left-side {
  flex: 0.5; /* Flex değeri ile boyutu küçültüyoruz */
  background-color: #eefaf8;
  padding: 15px; /* Padding'i azaltarak alanı küçültüyoruz */
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left-side, .right-side {
  flex: 1;
  max-width: 500px; /* Sol ve sağ tarafı aynı oranda küçültmek için max-width belirleyin */
  width: 100%;
}
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .left-item {
    margin-bottom: 20px; /* Her başlık ve açıklama arasına mesafe ekliyoruz */
  }
  
  .left-item h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px; /* Başlık ile açıklama arasındaki mesafeyi açıyoruz */
  }
  
  .feature-description {
    font-size: 14px;
    color: #8c96a4;
    line-height: 1.5;
  }
  
  .colored-footer {
    display: flex;
    background-color: #51cbb0;
    color: white;
    padding: 15px;
    margin-top: 20px;
    position: relative;
    left: -45px; /* Taşma için */
    width: calc(100% + 60px); /* Sol ve sağ tarafa taşma */
  }
  
  .main-title {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .colored-left,
  .colored-right {
    flex: 1;
    padding: 10px;
    text-align: center;
    
  }
  
  .colored-left {
    border-right: 2px solid white;
  }
  
  .colored-footer h3 {
    margin: 0;
    font-size: 18px;
  }
  
  .colored-footer p {
    margin: 5px 0 0;
    font-size: 16px;
  }
  
  .below-colored-footer-text {
    margin-top: 10px;
    color: #8c96a4;
    font-size: 14px;
    line-height: 1.5;
  }
  
  .right-side {
    flex: 0,5;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    
  }
  
  .info h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 5px;
  }
  
  .info p {
    color: #8c96a4;
  }
  
  .right-button {
    margin-top: auto;
    align-self: flex-start;
    background-color: #51cbb0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .right-button:hover {
    background-color: #2e9d72;
  }
  </style>
  