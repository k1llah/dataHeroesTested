<script setup lang="ts">
const props = defineProps({
  id: Number,
  name: String,
  image: String,
  status: String,
  species: String,
  location: String,
  type: String,
  episode: String,
  gender: String,
});
</script>
<template>
  <div>
    <div class="flex md:flex-row sm:flex-col gap-3 bg-[#3c3e44] md:w-[600px] rounded-xl md:h-[220px] sm:h-[unset] sm:max-w-[300px]">
      <img class="rounded-l-xl" :src="props.image" alt="card image" />
      <div class="flex flex-col justify-between h-full p-3">
        <div class="flex gap-1 flex-col">
          <h2 class="text-2xl text-white font-[800]">{{ props.name }}</h2>
          <div class="flex items-center gap-2">
            <div
              class="w-[10px] h-[10px] rounded-[50%] bg-green-600"
              v-if="props.status == 'Alive'"
            ></div>
            <div
              class="w-[10px] h-[10px] rounded-[50%] bg-red-500"
              v-if="props.status == 'Dead'"
            ></div>
            <p class="text-white">{{ props.status }} - {{ props.species }}</p>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="text-slate-400">Last known location:</p>
          <p class="text-white font-[700]">{{ props.location }}</p>
        </div>

        <div class="flex flex-col">
          <p class="text-slate-400">First seen in:</p>
          
          
            <h3 class="text-white font-[600]">{{ props.episode }}</h3>
          
        </div>
      </div>
    </div>
  </div>
</template>
