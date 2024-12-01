<script setup lang="ts">
  // İçerik öğesi için tip tanımlaması (ImageItem)
  interface ContentItem {
    image: string;
    title: string;
    text: string;
  }

  // Sol tarafın içerikleri
  const leftContent: ContentItem[] = [
    { image: 'line-graph.png', title: 'Müşteri Kazanımı', text: 'Sosyal medya hesaplarınızdaki takipçileriniz müşterilerinize dönüşür.' },
    { image: 'credit-card.png', title: 'Kredi Kartı Tahsilatı', text: 'Müşterilerinize banka veya kredi kartıyla ödeme ve taksit imkanı sunulur.' },
    { image: 'location.png', title: 'Sipariş Otomasyonu', text: 'Sipariş aldığınızda tüm bilgilendirmeler otomatik olarak gerçekleşir, sipariş takibini kolayca yaparsınız.' }
  ];

  // Sağ tarafın içerikleri
  const rightContent: ContentItem[] = [
    { image: 'add-cart.png', title: 'Kullanım kolaylığı', text: 'Takip ettiğiniz kişilerin listeledikleri ürünleri kolayca satın alırsınız.' },
    { image: 'security.png', title: 'Güvenli Ödeme Yöntemi', text: 'Kartlı ödeme yöntemleriyle siparişleriniz ve bilgileriniz daima güvendedir.' },
    { image: 'schedule.png', title: 'Taksitli Alışveriş İmkanı', text: 'Beğendiğiniz ürünleri kredi kartınız ile taksitli olarak satın alabilirsiniz.' }
  ];
</script>

<template>
  <div class="container">
    <!-- Sol taraf -->
    <div class="left-section">
    <h2 class="section-title">Satıcılar için</h2> <!-- Sol başlık -->
    <div class="split-section">
      <div class="row" v-for="(item, index) in leftContent" :key="'left-' + index">
        <img :src="`/images/${item.image}`" :alt="'Sol Resim ' + index" class="row-image" />
        <div class="row-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
</div>

    <!-- Orta çizgi -->
    <div class="divider"></div>

    <!-- Sağ taraf -->
    <div class="right-section">
    <h2 class="section-title">Alıcılar için</h2> <!-- Sağ başlık -->
    <div class="split-section">
      <div class="row" v-for="(item, index) in rightContent" :key="'right-' + index">
        <img :src="`/images/${item.image}`" :alt="'Sağ Resim ' + index" class="row-image" />
        <div class="row-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  background-color: #f7fbfa;
}

.split-section {
  width: 45%; /* Her iki tarafı da %45 genişliğinde yapalım */
}

.row {
  display: flex;
  margin-bottom: 20px;
}

.row-image {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  margin-top: 50px;
  background-color:#51cbb0;
}

.row-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8c96a4;
}
.row-text h3 {
  font-weight: bold; 
  color: #000;
}
.section-title{
    color: #8c96a4;
    margin-left: 100px
}
.divider {
  border-left: 2px solid #8c96a4;
  height: 400px;
  margin-right: 200px;
  margin-top: 100px;
  display: block;
  
}
.left-section{
    margin-left: 70px;
    margin-right: 50px;
}
</style>
