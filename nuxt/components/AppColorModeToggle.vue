<template>
  <div class="cfup8 c0bc4 c8r41 cfwvb">
    <ClientOnly>
      <span class="cursor-pointer" @click="toggleMode">
        <component
          :is="colorMode.preference === 'light' ? LightMode : DarkMode"
        />
      </span>
    </ClientOnly>
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