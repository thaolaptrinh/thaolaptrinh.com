<template>
  <div
    class="navigation cg3vi cax03 c5e9s cadmo cqmvi csb3e cxxfw c9cru c70js cfydh c5zj3"
  >
    <div class="cpk71 co9go c9hv0 c0bc4 cglmn cfwvb">
      <div class="cew4t"></div>
      <div class="c5a0p cew4t cfwvb c4a0m">
        <nav class="c8pgj">
          <ul class="c9gi4">
            <li class="cgktm">
              <nuxt-link to="/" :class="getClass('index')">
                <span class="c4g5b">Home</span>
                <svg
                  class="cjnrq"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="19"
                >
                  <path fill-opacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
                  <path
                    d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"
                  ></path>
                </svg>
              </nuxt-link>
            </li>

            <li class="cgktm">
              <nuxt-link to="/about" :class="getClass('about')">
                <span class="c4g5b">About</span>
                <svg
                  class="cjnrq"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path
                    fill-opacity=".16"
                    d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                  ></path>
                  <path
                    d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                  ></path>
                </svg>
              </nuxt-link>
            </li>

            <li class="cgktm">
              <nuxt-link to="/resume" :class="getClass('resume')">
                <span class="c4g5b">Resume</span>
                <svg
                  class="cjnrq"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                >
                  <path
                    fill-opacity=".16"
                    fill-rule="nonzero"
                    d="M1 5h16v14H1z"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
                  ></path>
                </svg>
              </nuxt-link>
            </li>

            <li class="cgktm">
              <nuxt-link to="/subscribe" :class="getClass('subscribe')">
                <span class="c4g5b">Subscribe</span>
                <svg
                  class="cjnrq"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                >
                  <path
                    fill-opacity=".16"
                    d="m13.4 18-3-7.4-7.4-3L19 2z"
                  ></path>
                  <path
                    d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z"
                  ></path>
                </svg>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="navigation-mobile hidden w-full">
    <ul class="flex justify-around items-center h-full">
      <li class="cgktm">
        <nuxt-link
          class="c5c77 c4ugg csbvt cpvt7 cfup8 crnoq c5a0p c8pgj cfwvb cq87d"
          to="/"
        >
          <svg
            class="cjnrq"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
          >
            <path fill-opacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
            <path
              d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"
            ></path>
          </svg>
        </nuxt-link>
      </li>
      <li class="cgktm">
        <nuxt-link
          class="c5c77 c4ugg csbvt cpvt7 cfup8 crnoq c5a0p c8pgj cfwvb cq87d"
          to="/about"
        >
          <svg
            class="cjnrq"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              fill-opacity=".16"
              d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
            ></path>
            <path
              d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
            ></path>
          </svg>
        </nuxt-link>
      </li>
      <li class="cgktm">
        <nuxt-link
          to="/resume"
          class="c5c77 c4ugg csbvt cpvt7 cfup8 crnoq c5a0p c8pgj cfwvb cq87d"
        >
          <svg
            class="cjnrq"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
          >
            <path
              fill-opacity=".16"
              fill-rule="nonzero"
              d="M1 5h16v14H1z"
            ></path>
            <path
              fill-rule="nonzero"
              d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
            ></path>
          </svg>
        </nuxt-link>
      </li>
      <li class="cgktm">
        <nuxt-link
          class="c5c77 c4ugg csbvt cpvt7 cfup8 crnoq c5a0p c8pgj cfwvb cq87d"
          to="/subscribe"
        >
          <svg
            class="cjnrq"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
          >
            <path fill-opacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z"></path>
            <path
              d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z"
            ></path>
          </svg>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.navigation-mobile {
  --tw-bg-opacity: 1;
  position: fixed;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
  z-index: 9;
  bottom: 0;
  right: 0;
  height: 40px;
}

:is(.dark .navigation-mobile) {
  --tw-bg-opacity: 1;
  background-color: white;
}

@media screen and (max-width: 400px) {
  .navigation {
    display: none;
  }

  .navigation-mobile {
    display: block;
  }
}
</style>

<script setup>
const route = useRoute();

const defaultClass =
  "c4ugg csbvt cpvt7 cfup8 crnoq c5a0p c8pgj cfwvb cq87d outline-none";
const activeClass =
  "cgla5 cjg8k cj6ii cfup8 cdxil csov4 c5a0p chugl c53su c5c77 c8pgj cfwvb cq87d outline-none";

const getClass = (routeName) => {
  return route.name === routeName ? activeClass : defaultClass;
};
</script>
