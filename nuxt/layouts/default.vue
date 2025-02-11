<template>
  <div class="cfbgr cpphc">
    <div class="ckb2r cfwvb">
      <!-- Side navigation -->
      <app-navigation />

      <!-- Main content -->
      <main class="c08dn c4a0m cajes">
        <div class="csbbd c0bc4 cpphc cglmn c8pgj cfwvb">
          <!-- Header -->
          <app-header />

          <slot />

          <!-- Footer -->
          <app-footer />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "c81c8 coo5n ce3nz cg0ht cpw1o cngo2 c9mf7",
  },
});
</script>