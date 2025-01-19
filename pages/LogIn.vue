<template>
    <div class="login-container">
      <h1 class="logo">shopier</h1>
      <h2>Hesabınıza giriş yapın</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <input type="email" v-model="email" placeholder="E-POSTA" required />
        <div class="password-container">
          <input type="password" v-model="password" placeholder="ŞİFRE" required />
          <a href="#" class="forgot-password">Şifremi Unuttum</a>
        </div>
        <div class="footer">
          <span>Hesabınız yok mu?</span>
          <a href="#" class="signup-link">Ücretsiz hesap oluşturun</a>
        </div>
        <button type="submit" class="login-button">GİRİŞ</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> <!-- Hata mesajı -->
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/userStore';  // userStore import ediyoruz
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '@/firebaseConfig'; // Firebase yapılandırmamızı import ediyoruz
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  const userStore = useUserStore();  // userStore'a erişim sağlıyoruz
  
  const handleLogin = async () => {
    try {
      // Firebase ile giriş yapma
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredential.user;
  
      // Giriş işlemi başarılıysa, kullanıcı bilgilerini Pinia store'a kaydediyoruz
      userStore.setUserDetails(user.email || '', '', ''); // Gerekli kullanıcı bilgilerini store'a kaydediyoruz
  
      router.push('/'); // Giriş başarılıysa anasayfaya yönlendiriyoruz
    } catch (error) {
      errorMessage.value = 'E-posta veya şifre hatalı. Lütfen tekrar deneyin.';  // Hata mesajını set ediyoruz
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .logo {
    color: #6a1b9a; /* Shopier'in mor rengini temsil eder */
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #555;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .password-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .forgot-password {
    font-size: 0.9rem;
    color: #6a1b9a;
    text-decoration: none;
    margin-left: auto;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  .footer {
    text-align: left;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  
  .signup-link {
    color: #6a1b9a;
    text-decoration: none;
    margin-left: 5px;
  }
  
  .signup-link:hover {
    text-decoration: underline;
  }
  
  .login-button {
    background-color: #00c9a7; /* Yeşil renk */
    color: white;
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #00a386;
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  </style>
  