import { auth, db } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

// Kullanıcıyı kaydet ve Firestore'a bilgilerini yaz
export const registerUser = async (email: string, password: string, shopName: string, phone: string) => {
  try {
    // Firebase Authentication ile kullanıcı kaydı yap
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Firestore'da kullanıcı bilgilerini sakla
    await setDoc(doc(db, "users", user.uid), {
      shopName: shopName,
      email: email,
      phone: phone,
      createdAt: new Date()
    });

    return "success";
  } catch (error: any) {
    console.error("Kayıt sırasında bir hata oluştu:", error.message);
    return error.message;
  }
};
