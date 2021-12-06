<template>
  <div class="_display-flex flex-col m-5 pb-4 shadow-lg rounded-xl itemBlockCard p-6 w-60">
    <div
      class="relative h-30 w-full mb-3 filter inner-shadow-xl"
      style="
                background-color: rgba(0, 0, 0, 0.03922) !important;
                box-shadow: inset 1px 1px 12px rgba(0, 0, 0, 0.935) !important;
                border-radius: 50%;
              "
    >
      <div class="absolute flex flex-col -top-1 -left-2 shadow-xl">
        <span
          class="px-2 inline-flex text-sm bg-green-800 shadow-md text-white rounded w-auto text-center items-center p-1/6"
        >
          <span class="rounded bg-green-200 w-2 h-2 mr-1" />
          live
        </span>
      </div>

      <img
        src="https://uniswap.org/_next/image?url=%2Fecosystem%2F1inch.svg&amp;w=256&amp;q=75"
        alt="Just a flower"
        class="w-auto h-30 inner-shadow object-fill rounded-2xl"
        style="/* opacity: 0.4; */"
      >
    </div>
    <h3 class="text-md cursor-pointer text-gray-200 truncate mt-2 mb-5">
      ALCHEMY
    </h3>
    <div class="flex items-center w-full flex-auto justify-between">
      <ul class="flex text-xs flex-row justify-center items-center space-x-2 text-white cursor-default">
        <li class="block px-2 py-1/8 bg-gray-700 rounded-md mb-0">
          India
        </li>
        <li class="block px-2 py-1/8 bg-gray-700 rounded-md mb-0">
          India
        </li>
      </ul>
      <div class="justify-end items-center space-x-2">
        <a
          href="https://google.com"
          class="
                      transition
                      ease-in
                      duration-300
                      hover:bg-gray-800
                      border-gray-700
                      hover:shadow-lg
                      text-gray-400
                      rounded-full
                    "
        >
          <v-icon name="bi-github" class="githubInline" />
        </a>
        <a
          href="https://google.com"
          class="
                       transition
                      ease-in
                      duration-300
                      hover:bg-gray-800
                      border-gray-700
                      hover:shadow-lg
                      text-gray-400
                      rounded-full
                    "
        >
          <v-icon name="bi-twitter" class="githubInline" />
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PortalItemCard"
});
</script>
<style lang="scss">
.itemBlockCard {
  background-color: #1d2039;
  max-width: 28rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: $mobile) {
    max-width: 100% !important;
    width: 100% !important;
  }
}
</style>
