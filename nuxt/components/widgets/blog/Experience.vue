<template>
  <div class="cr8w3">
    <h2 class="cxmc9 cg0ht cpynq cjvvo">{{ $t("work_experience") }}</h2>
    <ul class="cr8w3">
      <!-- Item -->
      <li class="c5c77 cpnf3" v-for="(item, key) in experience" :key>
        <div
          class="c9nsn cx6rx cimjd c39j0 c3jrd cdoe6 c3eja c4ezg cmvl0 ca62j c0m6u c9noy cfwvb"
        >
          <div
            class="cg3vi cj965 cry3b c81t6 coo5n cax03 cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta c90wr cfwvb c7yaq co5ux"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path
                fill="#DE4D3B"
                d="M15.912 6.545h-7.75v3.273h4.393c-.702 2.182-2.437 2.91-4.428 2.91-2.12.002-3.992-1.368-4.601-3.37a4.693 4.693 0 0 1 1.959-5.307 4.854 4.854 0 0 1 5.722.33l2.414-2.265C10.947-.31 6.964-.69 3.867 1.186.771 3.06-.683 6.735.308 10.18c.99 3.445 4.185 5.822 7.819 5.82 4.477 0 8.525-2.91 7.785-9.456Z"
              ></path>
            </svg>
          </div>
          <div class="catbp c96dc">
            <div class="c2bb0 cd99g ck5r6">
              {{ item.startDate }} <span class="cxuy4 crnoq">·</span>
              {{ item.endDate }}
            </div>
            <div class="cxmc9 cg0ht cpynq c670g" v-text="item.role"></div>
            <div class="cxmc9 cg0ht cnp10 cme8e" v-text="item.company"></div>
            <div class="cxslc c2bb0 cme8e" v-text="item.job"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  experience: Object,
});
</script>