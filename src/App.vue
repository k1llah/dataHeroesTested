<script setup lang="ts">
import Header from "./components/header.vue";
import Footer from "@/components/footer.vue";
import { onMounted, computed, watch, onBeforeMount, ref } from "vue";
import mainView from './components/mainView.vue';
</script>
<template>
  <div class="m-auto bg-[#272b33] dark:bg-[#3f3f46]">
    <section>
      <Header/>
        <!-- <RouterView /> -->
        <mainView/>
        <!-- <Footer/> -->
    </section>

  </div>
</template>
  



