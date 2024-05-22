<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFilters } from '@/stores/filters';
const pageNumber = ref(Number(localStorage.getItem("pageNumber")) || 1);
const filters = useFilters()
function handleFilter(event:any){
  filters.filter = event.target.value
  console.log(filters.filter)
}
const decreasePage = () => {
  if (pageNumber.value > 1) {
    pageNumber.value--;
    localStorage.setItem("pageNumber", pageNumber.value.toString());
    filters.getData(pageNumber.value);
  }
};
const increasePage = () => {
  pageNumber.value++;
  localStorage.setItem("pageNumber", pageNumber.value.toString());
  filters.getData(pageNumber.value);
};

watch(pageNumber, (newValue) => {
  if(newValue){
    filters.getData(pageNumber.value);
  }  
});
</script>
<template>
 <header class="bg-[#f5f5f5] p-5">
   <div class="w-full min-h-20 flex items-center justify-between">
    <h3 class="text-xl">Header logo</h3>
    <div class="flex gap-5 items-center md:flex-row sm:flex-col">
      <div class="flex sm:flex-col sm:w-32 md:flex-row md:w-[unset]">
      <input type="text" placeholder="Search by name" class="bg-transparent p-1 border-b-[1px] border-black outline-none" v-model="filters.name">
      <select name="filterBy" @change="handleFilter" class="bg-transparent p-1" id="">
        <option value="">Choose a filter</option>
        <option value="alive">Status: Alive</option>
        <option value="dead">Status: Dead</option>
      </select>
    </div>
    <div class="flex gap-3">
      <button class="text-[14px] border-b-[1px] border-green-400 p-1" @click="filters.items = '', filters.getData(pageNumber)">Применить</button>
      <div class="flex flex-col justify-center items-center">
        <p>Page {{ pageNumber }}</p>
        <div class="flex">
          <img class="w-7 h-7 cursor-pointer" src="/arrow-left.svg" alt="" @click="decreasePage()">
          <img class="w-7 h-7 cursor-pointer" src="/arrow-right.svg" alt="" @click="increasePage()">
        </div>
      </div>
    </div>
    </div>
   </div>
  </header>
</template>

