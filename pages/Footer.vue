<template>
    <footer class="footer-container">
      <!-- Sol Kısım -->
      <div class="footer-column">
        <h2 class="footer-logo">shopier</h2>
        <p>
          Shopier, bir Değer Teknoloji A.Ş. markasıdır.
        </p>
        <p>
          Shopier, 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun
          uyarınca aracı hizmet sağlayıcıdır. Ödeme hizmetleri, 6493 sayılı Ödeme
          ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik
          Para Kuruluşları Hakkında Kanun uyarınca ödeme hizmeti sağlayıcıları
          tarafından sunulmaktadır.
        </p>
      </div>
  
      <!-- Bağlantılar -->
      <div class="footer-column">
        <h3>Bağlantılar</h3>
        <ul>
          <li><a href="#">Uygulama Mağazası</a></li>
          <li><a href="#">Yardım Merkezi</a></li>
          <li><a href="#">Shopier Blog</a></li>
          <li><a href="#">Geliştirici Portalı</a></li>
        </ul>
      </div>
  
      <!-- Diğer Teknoloji -->
      <div class="footer-column">
        <h3>Değer Teknoloji A.Ş.</h3>
        <p>İçerenköy Mh. Umut Sk. AND Plaza</p>
        <p>No:10-12/70 Kat:18 Ataşehir 34752</p>
        <p>İstanbul, TÜRKİYE</p>
      </div>
  
      <!-- Bize Ulaşın -->
      <div class="footer-column">
        <h3>Bize Ulaşın</h3>
        <p>Telefon: 0 (850) 840 15 10</p>
        <p>
          E-posta:
          <a href="mailto:hello@shopier.com">hello@shopier.com</a>
        </p>
        <div class="social-icons">
          <a href="#"><img src="/images/facebook-logo-on-square.png" alt="Facebook" /></a>
          <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
        </div>
        <p>Destek Saatleri:</p>
        <p>Haftanın 7 günü / 09:00-24:00</p>
      </div>
    </footer>
    <div class="footer-bottom">
      <a href="#">Gizlilik, Koşullar ve İletişim</a>
      <p>© Shopier 2024. Tüm hakları saklıdır.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "FooterComponent",
  });
  </script>
  
  <style scoped>
  .footer-container {
    display: flex;
    justify-content: space-between;
    background-color: #f9fcfb;
    padding: 20px 40px;
    flex-wrap: wrap;
  }
  
  .footer-column {
    flex: 1;
    margin: 0 20px;
    min-width: 200px;
  }
  
  .footer-logo {
    font-size: 24px;
    font-weight: bold;
    color: #8d8d8d;
  }
  
  .footer-column h3 {
    font-size: 18px;
    color: #8d8d8d;
    margin-bottom: 10px;
  }
  
  .footer-column p,
  .footer-column a {
    font-size: 14px;
    color: #777;
    line-height: 1.6;
  }
  
  .footer-column a {
    text-decoration: none;
    color: #51cbb0;
  }
  
  .footer-column a:hover {
    text-decoration: underline;
  }
  
  .social-icons img {
    width: 20px;
    margin-right: 10px;
  }
  
  .footer-bottom {
    text-align: center;
    padding: 10px;
    background-color: #f9fcfb;
    font-size: 14px;
    color: #777;
    border-top: 1px solid #e0e0e0;
  }
  
  .footer-bottom a {
    color: #51cbb0;
    text-decoration: none;
  }
  
  .footer-bottom a:hover {
    text-decoration: underline;
  }
  </style>
  