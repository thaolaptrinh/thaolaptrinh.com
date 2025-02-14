<template>
  <header>
    <div class="cpk71 cdxms c5a0p cfwvb co6sp">
      <div class="creo2 ckjll cfwvb c4a0m">
        <!-- Search form -->
        <form class="cm8gy c8pgj">
          <div class="cnxqt cfwvb">
            <div class="c8pgj">
              <label class="c4g5b cme8e chipd" for="search">{{
                $t("search")
              }}</label>
              <div class="c5a0p c5c77 cfwvb">
                <input
                  id="search"
                  type="search"
                  class="c899y c8pgj cw009 cfi31"
                />
                <div class="cfup8 c5a0p cqn5a chzqd c5u91 cfwvb">
                  <svg
                    class="csb3e c0vrt cjhbj cu9sk"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="cwnoo"
                      d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>

        <!-- Color mode toggle -->
        <app-color-mode-toggle />

        <!-- Button -->
        <div>
          <nuxt-link class="cwlj7 c0kjz czzu3 csfon" to="/subscribe">
            {{ $t("subscribe") }}
          </nuxt-link>
        </div>

        <select
          class="c899y csfon !pr-7 !py-[6px] cursor-pointer"
          v-model="locale"
          @change="$event.target.blur()"
        >
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale } = useI18n({ useScope: "global" });
</script>