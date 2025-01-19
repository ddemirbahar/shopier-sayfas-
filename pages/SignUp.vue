<template>
  <div class="container">
    <div class="form-wrapper">
      <h1 class="logo">shopier</h1>
      <p class="subtitle">Ücretsiz hesap oluşturun</p>
      <p class="description">
        Sadece birkaç dakika içerisinde ücretsiz bir Shopier hesabı oluşturarak satış yapmaya başlayabilirsiniz.
      </p>
      <form @submit="handleSubmit">
        <div class="form-group">
          <div class="input-group">
            <span>shopier.com/</span>
            <input
              v-model="shopName"
              type="text"
              placeholder="SHOPIER DÜKKAN ADI (LİNK)"
              required
            />
          </div>
        </div>

        <div class="form-pair">
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              placeholder="E-posta Adresi"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="phone"
              type="tel"
              placeholder="Cep Telefonu Numarası"
              required
            />
          </div>
        </div>

        <div class="form-pair">
          <div class="form-group">
            <input
              v-model="password"
              type="password"
              placeholder="Şifre"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Şifre (Tekrar)"
              required
            />
          </div>
        </div>

        <div class="checkbox-group">
          <input
            type="checkbox"
            id="terms"
            v-model="termsAccepted"
            required
          />
          <label for="terms">Shopier Üyelik Sözleşmesi'ni kabul ediyorum.</label>
        </div>
        <div class="checkbox-group">
          <input
            type="checkbox"
            id="privacy"
            v-model="privacyAccepted"
            required
          />
          <label for="privacy">
            Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni'ni okudum.
          </label>
        </div>

        <button :disabled="loading" type="submit" class="submit-button">
          <span v-if="loading">Yükleniyor...</span>
          <span v-else>Hesap Oluştur</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Nuxt 3 için navigateTo yerine Vue Router kullanabiliriz
import { useUserStore } from '@/stores/userStore'; 
import { registerUser } from '@/helpers/registerUser'; // Kullanıcı kaydetme fonksiyonunu içe aktar


// Form verileri ve loading durumu
const shopName = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const termsAccepted = ref(false);
const privacyAccepted = ref(false);
const loading = ref(false); // Loading durumu, butonun devre dışı kalmasını sağlar

const userStore = useUserStore(); 
const router = useRouter(); // Router'ı kullanmak için


// handleSubmit fonksiyonu
const handleSubmit = async (event: Event) => {
  event.preventDefault(); // Varsayılan form gönderimini engelle

  // Şifre kontrolü
  if (password.value !== confirmPassword.value) {
    alert('Şifreler eşleşmiyor!');
    return;
  }

  if (password.value.length < 6) {
    alert('Şifre en az 6 karakter olmalıdır.');
    return;
  }

  loading.value = true;

  // Kullanıcıyı kaydetme işlemi
  const result = await registerUser(email.value, password.value, shopName.value, phone.value);

  if (result === "success") {
    alert('Hesabınız başarıyla oluşturuldu!');
    // Yönlendirme işlemine geçmeden önce biraz zaman tanıyın
    setTimeout(() => {
      router.push('/'); // Başarılı kayıt sonrası ana sayfaya yönlendir
    }, 500); // Yarım saniye bekle
  } else {
    alert('Kayıt sırasında bir hata oluştu: ' + result);
  }

  loading.value = false; // Loading durumu
};
</script>

<style scoped>
/* Stil kısmı önceki gibi devam eder */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
}

.form-wrapper {
  position: relative;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.logo {
  color: #6a1b9a;
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  text-align: left;
  color: #333;
  margin-bottom: 5px;
}

.description {
  font-size: 14px;
  text-align: left;
  color: #555;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  align-items: center;
}

.input-group span {
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  color: #333;
}

.input-group input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 4px 4px 0;
  font-size: 14px;
  color: #333;
}

input:focus {
  border-color: #6a1b9a;
  outline: none;
}

.form-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.checkbox-group input {
  margin-right: 10px;
}

.checkbox-group label {
  font-size: 14px;
  color: #555;
}

.submit-button {
  position: absolute;
  bottom: 20px;
  right: 15px;
  margin-top: 20px;
  background-color: #00c853;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background: #00a144;
}
</style>