import { defineStore } from 'pinia';
import { auth, db } from '@/firebaseConfig';  // Firebase config dosyasını import et
import { setDoc, doc, getDoc } from 'firebase/firestore';  // Firestore işlemleri için gerekli fonksiyonlar
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';  // Auth işlemleri için fonksiyonlar

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    phone: '',
    shopName: '',
  }),

  actions: {
    // Kullanıcı bilgilerini store'a kaydediyoruz
    setUserDetails(email: string, phone: string, shopName: string) {
      this.email = email;
      this.phone = phone;
      this.shopName = shopName;
    },

    // Firebase Auth ile kullanıcı kaydı yapıyoruz
    async registerUser(email: string, password: string) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Kullanıcı başarıyla kaydedildikten sonra, Firestore'a kullanıcı bilgilerini ekliyoruz
        await setDoc(doc(db, 'users', user.uid), {
          email,
          phone: this.phone,
          shopName: this.shopName,
        });

        this.setUserDetails(email, this.phone, this.shopName);  // Store'a da bilgileri kaydediyoruz
      } catch (error) {
        console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
      }
    },

    // Firebase Auth ile kullanıcı girişi yapıyoruz
    async loginUser(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Kullanıcı girişi başarılıysa, Firestore'dan kullanıcı bilgilerini çekiyoruz
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          this.setUserDetails(userData?.email, userData?.phone, userData?.shopName);  // Store'a kaydediyoruz
        } else {
          console.error("Kullanıcı bilgileri bulunamadı");
        }
      } catch (error) {
        console.error("Giriş işlemi sırasında bir hata oluştu:", error);
      }
    },
  },
});
