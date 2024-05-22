<script setup lang="ts">
		import cardList from './cardComponents/cardList.vue';
</script>
<template>
	<div>
		<div class="bg-[#f5f5f5] text-center p-14">
			<h1 class="md:text-[5.62rem] font-[900] sm:text-5xl">The Rick and Morty API</h1>
		</div>
		<div class="p-12 flex justify-center">
			<cardList/>
		</div>
	</div>
</template>
