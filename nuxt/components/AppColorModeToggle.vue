<template>
  <div class="cfup8 c0bc4 c8r41 cfwvb">
    <span class="cursor-pointer" @click="toggleMode">
      <component :is="colorMode.preference === 'dark' ? DarkMode : LightMode" />
    </span>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const modes = ["dark", "light"];

const DarkMode = defineAsyncComponent(() =>
  import("@/components/icons/DarkMode.vue")
);
const LightMode = defineAsyncComponent(() =>
  import("@/components/icons/LightMode.vue")
);

const toggleMode = () => {
  const currentIndex = modes.indexOf(colorMode.preference);
  colorMode.preference = modes[(currentIndex + 1) % modes.length];
};
</script>