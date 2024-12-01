<template>
    <header class="header">
      <div class="container">
        <!-- Logo ve Menü -->
        <div class="logo-container">
          <img src="/public/shopier_logo_1.png" alt="Shopier Logo" class="logo" />
          <!-- Dropdown ve bağlantılar -->
          <div class="menu-group">
            <div class="dropdown" :class="{ open: openDropdown === 'sales' }" @click="toggleDropdown('sales')">
              <button class="dropdown-button">Satışın Yolları</button>
              <ul class="dropdown-menu" v-if="openDropdown === 'sales'">
                <li><a href="/sell-online">Sosyal Medyada Satış</a></li>
                <li><a href="/sell-offline">İnternet Sitesinde Satış</a></li>
              </ul>
            </div>
  
            <a href="/pricing" class="menu-link">Fiyatlama</a>
  
            <div class="dropdown" :class="{ open: openDropdown === 'resources' }" @click="toggleDropdown('resources')">
              <button class="dropdown-button">Kaynaklar</button>
              <ul class="dropdown-menu" v-if="openDropdown === 'resources'">
                <li><a href="/guides">Uygulama Mağazası</a></li>
                <li><a href="/tools">Yardım Merkezi</a></li>
                <li><a href="/tools">Shopier Blog</a></li>
                <li><a href="/tools">Geliştirici Portalı</a></li>
              </ul>
            </div>
            
            <div class="language-selector">
              <button class="language-button" @click="changeLanguage('tr')">tr</button>
              <button class="language-button" @click="changeLanguage('en')">en</button>
            </div>
            <a href="/pricing" class="hesap">Hesaba Giriş</a>
            <a href="/pricing" class="üye">Ücretsiz Üye Ol</a>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const openDropdown = ref<string | null>(null);
  
  const toggleDropdown = (menu: string) => {
    openDropdown.value = openDropdown.value === menu ? null : menu;
  };
  
  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      openDropdown.value = null;
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', closeDropdown);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
  });
  </script>
  
  <style scoped>
  /* Header düzeni */
  .header {
    background-color: white;
    color: black;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /* Logo ve Menü düzeni */
  .logo-container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 16px;
  }
  
  .logo {
    height: 40px;
    margin-right: 15%;
  }
  
  .menu-group {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .dropdown {
    position: relative;
  }
  
  .dropdown-button {
    background: none;
    border: none;
    color: black;
    cursor: pointer;
    white-space: nowrap; /* Yazıyı tek satıra yerleştirir */
    display: inline-flex; /* İçeriği tek satırda hizalar */
    align-items: center; /* İçeriği dikeyde ortalar */
    justify-content: center; /* İçeriği yatayda ortalar */
  }
  .dropdown:hover{
    border: 2px solid aquamarine; /* Aqua rengi dış kenar */
  
  }
  
  .dropdown-button::after {
    content: "˅"; /* Ok işareti */
    font-size: 12px;
    color: aquamarine;
    margin-left: 8px;
    
  }
  
  .dropdown.open .dropdown-button::after {
    content: "˄"; /* Menü açıldığında ok yukarıya döner */
  
  }
  
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    color: black;
    list-style: none;
    padding: 8px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 100;
    
  }
  
  .dropdown-menu li {
    padding: 8px 16px;
  }
  
  .dropdown-menu li a {
    color: black;
    text-decoration: none;
    white-space: nowrap; /* Yazıyı tek satıra yerleştirir */
    display: inline-flex; /* İçeriği tek satırda hizalar */
    align-items: center; /* İçeriği dikeyde ortalar */
    justify-content: center; /* İçeriği yatayda ortalar */
  }
  
  .dropdown-menu li a:hover {
    background-color: #f1f1f1;
  }
  
  /* "Fiyatlama" bağlantısı stili */
  .menu-link {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .menu-link:hover {
    color: grey;
  }
  .hesap {
    color: black;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap; /* Yazıyı tek satıra yerleştirir */
    display: inline-flex; /* İçeriği tek satırda hizalar */
    align-items: center; /* İçeriği dikeyde ortalar */
    justify-content: center; /* İçeriği yatayda ortalar */
  }
  
  .hesap:hover {
    color: grey;
  }
  /* Ücretsiz Üye Ol Butonu */
  .üye {
    background-color: transparent;
    border: 2px solid aquamarine; /* Aqua rengi dış kenar */
    color: black; /* Butonun metni */
    text-decoration: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    white-space: nowrap; /* Yazıyı tek satıra yerleştirir */
    display: inline-flex; /* İçeriği tek satırda hizalar */
    align-items: center; /* İçeriği dikeyde ortalar */
    justify-content: center; /* İçeriği yatayda ortalar */
  }
  
  .üye:hover {
    background-color: aquamarine; 
    color: white; 
  }
  
    .üye {
    margin-left: 20px; 
  }
  .hesap {
    margin-left: 200px; 
  }
  .language-selector {
    display: flex;
    gap: 10px;
  }
  
  .language-button {
    background-color: transparent;
    border: 1px solid aquamarine;
    color: black;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .language-button:hover {
    background-color: beyaz;
    color: aquamarine;
  }
  </style>
  