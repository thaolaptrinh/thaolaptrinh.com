<template>
  <div class="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
    <div class="c41ht c0kco">
      <div class="cz5kb c2e3l cmrd7">
        <img
          v-for="i in 5"
          :key="i"
          class="cg3vi c3iz2 crjg4 c6nlo cywxr"
          :src="`/images/avatar-${i}.webp`"
          width="24"
          height="24"
        />
      </div>
    </div>
    <div class="c41ht cpl46">
      <div class="cpynq c670g c0kco">{{ $t('never_miss_an_update') }}</div>
      <p class="cxslc c2bb0 cme8e">{{ $t('subscribe_and_grow_with_us') }}</p>
    </div>
    <form>
      <div class="c4udf">
        <label class="c4g5b" for="newsletter">Your email…</label>
        <input
          id="newsletter"
          type="email"
          class="c899y c8pgj cfi31"
          :placeholder="`${$t('your_email')}...`"
        />
      </div>
      <button class="cwlj7 c0kjz czzu3 csfon c8pgj" type="submit">
        {{ $t('subscribe') }}
      </button>
    </form>
  </div>
</template>
