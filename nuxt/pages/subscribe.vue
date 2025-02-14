<template>
  <div class="c6969 c9xin cr8w3 ci4j9 cr7br clwia cpqam c94qd c4a0m">
    <!-- Middle area -->
    <div class="c4a0m">
      <div class="c8b8k">
        <div class="c7qcc">
          <section>
            <!-- Page title -->
            <h1 class="cpynq cme53 ciz93">{{ $t('never_miss_an_update') }} ✨</h1>
            <!-- Page content -->
            <div class="cxslc c2bb0 cr8w3">
              <p class="c5rvt">
                This newsletter is written by Mark Ivings, who previously worked
                at Google, Medium, Vimeo, and Qonto. Here is what to expect by
                subscribing:
              </p>
              <ul class="c9gi4">
                <li class="c9noy cfwvb">
                  <svg
                    class="cjnrq chugl csb3e c9ahf cud2d cf4g2 cafn9"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    ></path>
                  </svg>
                  <span
                    >Big tech and high-growth startups, from the inside.</span
                  >
                </li>
                <li class="c9noy cfwvb">
                  <svg
                    class="cjnrq chugl csb3e c9ahf cud2d cf4g2 cafn9"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    ></path>
                  </svg>
                  <span
                    >Actionable advice for engineering managers, software
                    engineers and tech workers.</span
                  >
                </li>
                <li class="c9noy cfwvb">
                  <svg
                    class="cjnrq chugl csb3e c9ahf cud2d cf4g2 cafn9"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    ></path>
                  </svg>
                  <span
                    >A pulse on the tech market and scoop worth knowing.</span
                  >
                </li>
                <li class="c9noy cfwvb">
                  <svg
                    class="cjnrq chugl csb3e c9ahf cud2d cf4g2 cafn9"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    ></path>
                  </svg>
                  <span>An independent viewpoint.</span>
                </li>
              </ul>
              <div>
                <!-- Subscribe form -->
                <form>
                  <div class="cfup8 c0kj7 ccuah cgqwu c0bc4 cctnv cpphc cfwvb">
                    <input
                      type="email"
                      class="c899y c5mn7 c76s4 c8pgj c4udf"
                      :placeholder="$t('your_email')"
                      :aria-label="`${$t('your_email')}...`"
                    />
                    <button class="cwlj7 czzu3 craoz chuke">
                      {{ $t("subscribe") }}
                    </button>
                  </div>
                  <!-- Success message -->
                  <!-- <p class="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> -->
                </form>
                <div class="c5a0p c6av3 cfwvb">
                  <div class="cz5kb c2e3l cmrd7">
                    <img
                      v-for="i in 5"
                      :key="i"
                      :src="`/images/avatar-${i}.webp`"
                      class="cg3vi c3iz2 crjg4 c6nlo cywxr"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div class="c2bb0 cme8e c8r41">{{ $t('subscribe_and_grow_with_us') }}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Right sidebar -->
    <aside class="cd6k2 cf0x4 csb3e">
      <div class="c92wf">
        <!-- Sponsor widget -->
        <div
          class="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi"
        >
          <div class="c5a0p ckgwf c4udf cfwvb">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20">
              <path
                fill="#38BDF8"
                fill-rule="evenodd"
                d="M.73 6.173a9.92 9.92 0 0 1 3.527-4.488A9.294 9.294 0 0 1 9.58 0h.737v4.67l.14-.226a9.68 9.68 0 0 1 4.3-3.683A9.205 9.205 0 0 1 20.29.192a9.461 9.461 0 0 1 4.904 2.737 10.143 10.143 0 0 1 2.622 5.12c.37 1.94.18 3.95-.545 5.778a9.92 9.92 0 0 1-3.528 4.488A9.294 9.294 0 0 1 18.42 20h-.737v-4.67a10.459 10.459 0 0 1-.14.226 9.68 9.68 0 0 1-4.3 3.683 9.205 9.205 0 0 1-5.534.569 9.461 9.461 0 0 1-4.904-2.737 10.143 10.143 0 0 1-2.622-5.12C-.186 10.01.004 8 .73 6.173ZM8.841 10V1.573a7.89 7.89 0 0 0-3.766 1.391A8.394 8.394 0 0 0 2.09 6.762a8.808 8.808 0 0 0-.462 4.889 8.583 8.583 0 0 0 2.219 4.332 8.006 8.006 0 0 0 4.15 2.316 7.789 7.789 0 0 0 4.683-.482 8.18 8.18 0 0 0 3.528-2.95 4.958 4.958 0 0 1-2.209.518c-2.849 0-5.158-2.411-5.158-5.385Zm10.316 8.427a7.89 7.89 0 0 0 3.766-1.391 8.393 8.393 0 0 0 2.985-3.798 8.807 8.807 0 0 0 .462-4.889 8.583 8.583 0 0 0-2.219-4.332 8.006 8.006 0 0 0-4.15-2.316 7.789 7.789 0 0 0-4.683.482 8.179 8.179 0 0 0-3.528 2.95A4.958 4.958 0 0 1 14 4.615c2.849 0 5.158 2.411 5.158 5.385v8.427Z"
              ></path>
            </svg>
            <span class="cpvt7 crnoq ck5r6">*Sponsor</span>
          </div>
          <div class="cpynq c670g c0kco">Build The Site You Want!</div>
          <p class="cxslc c2bb0 cme8e">
            Your website should be an asset, not an engineering challenge.
          </p>
        </div>

        <!-- E-Book widget
        <div
          class="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi"
        >
          <div class="cpynq c670g c41ht cec5b">Free E-Book</div>
          <div class="c41ht">
            <img
              class="cz5kb czz51 c46gp cpe17"
              src="./images/book.png"
              width="148"
              height="190"
              alt="Book"
            />
          </div>
        </div> -->
      </div>
    </aside>
  </div>
</template>
