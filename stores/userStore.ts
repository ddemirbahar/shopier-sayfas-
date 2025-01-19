import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    phone: '',
    shopName: '',
  }),
  actions: {
    setUserDetails(email: string, phone: string, shopName: string) {
      this.email = email;
      this.phone = phone;
      this.shopName = shopName;
    },
  },
});
