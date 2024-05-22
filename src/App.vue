<script setup lang="ts">
import Header from "./components/header.vue";
import Drawer from "@/components/DrawerComponents/Drawer.vue";
import Footer from "@/components/footer.vue";
import backToTop from './components/backToTop.vue';
import { onMounted, computed, watch, onBeforeMount, ref } from "vue";
import { useOrderStore } from './stores/order';
import { useDark, useToggle } from '@vueuse/core'
import { useSneaker } from "@/stores/sneaker";
import { RouterView, useRouter } from "vue-router";
import { useAuthStore } from "./stores/authData";
import { useAllStore } from './stores/all';
import { useBlog } from './stores/sneakerBlog';
const orderStore = useOrderStore();
const blog = useBlog()
const allStore = useAllStore()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const route = useRouter();
const authStore = useAuthStore();
const sneakerStore = useSneaker();
onMounted(() => {
  authStore.getRole();
  authStore.checkAuth();
});
const page = ref(window.location.pathname);
watch(() => route.currentRoute.value.path, (newPath) => {
  page.value = newPath;
});
</script>
<template>
  <div class="md:w-[85%] sm:w-full m-auto bg-white rounded-xl shadow-xl mt-14 dark:bg-[#3f3f46]">
    <Header/>
    <section>
      <div class="w-full min-h-[800px] m-auto">
        <RouterView />
        <backToTop v-if="page != '/profile' && !allStore.isOpenedFeedBack && !blog.isOpenedModal && !blog.isOpenedModalFeedback && !orderStore.errorPayment && !orderStore.success"/>
      </div>
    </section>
    <Footer v-if="page != '/profile' && page != '/description'" />
  </div>

  
  <transition name="fade">
    <Drawer />
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
  



