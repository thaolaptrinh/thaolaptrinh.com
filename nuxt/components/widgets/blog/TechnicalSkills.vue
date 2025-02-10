<template>
  <div class="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
    <div class="cpynq c670g cec5b">Technical Skills</div>
    <ul class="c3y7y">
      <li
        class="cpk71 c5a0p cfwvb"
        v-for="(skill, index) in skills"
        :key="index"
      >
        <div class="cz5kb crym2 c4jlg c4a0m">
          <span class="chugl cfxlx">—</span>
          <a class="cpynq c670g crym2 cme8e">{{ skill }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  defineProps({
    skills: Array,
  });
</script>
