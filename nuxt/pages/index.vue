<template>
  <!-- Hero -->
  <section>
    <div class="c8b8k">
      <div class="c2r2p c7sw6">
        <img
          :src="`images/avatar-1.webp`"
          class="c3iz2 cme53"
          width="56"
          height="56"
        />
        <h1 class="cpynq cme53 ciz93">
          I write about coding and being a
          <span
            class="cfsb7 cofz6 cdaqi c3ntq csd7h c4ezg c8xm0 c6esp chugl cz5kb c5c77"
            >full-time</span
          >
          maker.
        </h1>
        <p class="cxslc c2bb0 c5rvt">
          Writer, Speaker, Developer, and Co-Founder of Code.co, and AppForYou.
          I write about coding, startups, and my journey as a full-time maker.
        </p>
      </div>
    </div>
  </section>

  <!-- Content -->
  <div class="c6969 c9xin cr8w3 ci4j9 clwia cpqam c4a0m">
    <!-- Middle area -->
    <div class="c4a0m">
      <div class="c8b8k">
        <div class="c7qcc">
          <!-- Latest Articles -->
          <section>
            <h2 class="cpynq c670g c8dzi cec5b">{{ $t("latest_articles") }}</h2>

            <!-- Filters -->
            <ul class="cg3vi crdpf cnxqt c8z7y cme8e cfwvb">
              <li class="cz4pw c59mu">
                <a class="cxmc9 cgygf cg0ht cnp10 ch63g chipd cen0e" href="#0"
                  >Coding</a
                >
              </li>
              <li class="cz4pw c59mu">
                <a class="cts6h cb9ru cxslc c2bb0 chipd cen0e" href="#0"
                  >Startups</a
                >
              </li>
              <li class="cz4pw c59mu">
                <a class="cts6h cb9ru cxslc c2bb0 chipd cen0e" href="#0"
                  >Tutorials</a
                >
              </li>
              <li class="cz4pw c59mu">
                <a class="cts6h cb9ru cxslc c2bb0 chipd cen0e" href="#0"
                  >Indie Hacking</a
                >
              </li>
            </ul>

            <!-- Articles list -->
            <div>
              <article class="cg3vi crdpf c8z7y c3bdg">
                <div class="c9noy cfwvb">
                  <img
                    class="c906c cr6xl c8c2x c9xwx ccj8i co6sp c5zj3"
                    width="88"
                    height="88"
                  />
                  <div>
                    <div class="c2bb0 cd99g ck5r6 c0kco">
                      <span class="chugl">—</span> Dec 24, 2023
                    </div>
                    <h3 class="cpynq c670g c5rvt c0kco">
                      <a
                        class="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cofma cz5kb c5c77 cn2yf"
                        href="post.html"
                        >An Interactive Guide to Flexbox</a
                      >
                    </h3>
                    <div class="cfwvb">
                      <div class="cxslc c2bb0 cme8e c4a0m">
                        Flexbox is a remarkably flexible layout mode. When we
                        understand how it works, we can build responsive designs
                        that rearrange themselves as needed.
                      </div>
                      <a
                        class="cfup8 c5a0p chugl csb3e c86uy cw2lf cpnf3 cgej2"
                        href="post.html"
                        tabindex="-1"
                      >
                        <svg
                          class="cqlhq cjnrq cofma chtu4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="12"
                        >
                          <path
                            d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Right sidebar -->
    <aside class="cd6k2 cf0x4 csb3e">
      <div class="c92wf">
        <!-- Subscribe widget -->
        <widgets-blog-subscribe />
      </div>
    </aside>
  </div>
</template>
