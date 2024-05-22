import './assets/main.css'
import { createApp } from 'vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		name: 'main',
		path: '/',
		component: () => import('./components/mainView.vue')
	},//{
	// 	name: 'Purchases',
	// 	path: '/purchases',
	// 	component: () => import('./view/View_favorites.vue')
	// }
]
})
const pinia = createPinia()
const app = createApp(App)
.use(autoAnimatePlugin)
.use(pinia)
.use(router)
.mount('#app')

