<script setup lang="ts">
defineProps<{
	title?: string;
	description?: string;
}>();
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-16">
    <h1 class="text-6xl font-bold text-center mb-8">{{ title }}</h1>
    <p class="text-2xl text-zinc-400 text-center">{{ description }}</p>
    <div class="mt-12 text-zinc-500">thaolaptrinh.com</div>
  </div>
</template>
