import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {  
    path: '/',
    name: 'home',
    // component below is pre-loaded (in imports above):
    component: HomeView,
    props: route => ({ PageName: route.name })
  },  
  {
    path: '/events',
    name: 'events',
    // component below is lazy loaded as needed:
    component: () => import('../views/EventsMainView.vue'),
    props: route => ({ PageName: route.name }),
    meta: {
      requiresAuth: false,
    } 
  },
  {
    path: '/sweets',
    name: 'sweets',
    component: () => import('../views/SweetsMainView.vue'),
    props: route => ({ PageName: route.name }),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/events',    
    name: 'events',    
    component: () => import('../views/EventsMainView.vue'),
    props: route => ({ PageName: route.name }),
    meta: {
      requiresAuth: false,
    }    
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactMainView.vue'),
    props: route => ({ PageName: route.name }),
    meta: {
      requiresAuth: false,
    } 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    props: route => ({ PageName: route.name }),
    meta: {
      requiresAuth: false,
    } 
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    props: route => ({ PageName: route.name }),
    meta: {
      requiresAuth: false,
    } 
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    props: route => ({ PageName: route.name }),
    meta: {
      requiresAuth: true,
    } 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if the browser supports scroll behavior
    if ('scrollBehavior' in document.documentElement.style) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' });
        }, 100); // delay the scroll after navigation
      });
    } else {
      // fallback for browsers not supporting smooth scroll
      return { top: 0 };
    }
  },
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {    
    const removeListener = onAuthStateChanged(    
      getAuth(),    
      (user) => {    
        removeListener();    
        resolve(user);    
      },    
    reject    
    )    
  });    
}

/* eslint-disable no-console */     
router.beforeEach(async(to, from, next) => {    
  if (to.matched.some(record => record.meta.requiresAuth)) {    
    if (await getCurrentUser()) {    
      next();    
    } else {    
      /* alert("You need to be logged in to access this resource."); */
      next("/");    
    }    
  } else {    
    next();    
  }    
});

export default router