import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/userStore'; // userStore'u import ediyoruz
import SignUp from '@/pages/SignUp.vue';
import LogIn from '@/pages/LogIn.vue';
import Index from '@/pages/index.vue';

// Sayfaların yönlendirilmesi için tanımlama
const routes = [
  { path: '/', component: Index },
  { path: '/SignUp', component: SignUp },
  { path: '/LogIn', component: LogIn },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/LogIn', // Var olmayan sayfalar için giriş sayfasına yönlendiriyoruz
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard (Navigasyon Koruması) kullanarak yönlendirmeyi yapıyoruz
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  // Eğer kullanıcı giriş yapmadıysa ve giriş ya da kayıt sayfasına gitmek istiyorsa yönlendiriyoruz
  if (to.path === '/LogIn' || to.path === '/SignUp') {
    if (userStore.email) {
      next('/'); // Kullanıcı giriş yapmışsa, anasayfaya yönlendiriyoruz
    } else {
      next(); // Giriş yapmamışsa, ilgili sayfada kalıyoruz
    }
  } else {
    // Giriş yapmamış kullanıcıları giriş sayfasına yönlendiriyoruz
    if (!userStore.email) {
      next('/LogIn');
    } else {
      next(); // Kullanıcı giriş yapmışsa, devam etmesine izin veriyoruz
    }
  }
});

export default router;
