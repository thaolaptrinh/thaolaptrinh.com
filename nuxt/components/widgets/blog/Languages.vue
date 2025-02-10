<template>
  <div class="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
    <div class="cpynq c670g cec5b">Languages</div>
    <ul class="c3y7y">
      <li class="cpk71 c5a0p cfwvb" v-for="(language, key) in languages" :key>
        <div class="cz5kb crym2 c3rtw c4a0m">
          <span class="cp130 c3rtw">{{ language.flag }}</span>
          <span class="cpynq c670g crym2 cme8e">
            {{ language.language }}
          </span>
        </div>
        <span class="cpynq cme8e c670g">{{ language.level }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  languages: Object,
});
</script>