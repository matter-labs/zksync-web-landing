<template>
  <i-container v-if="notEmpty" class="_margin-bottom-2 _padding-bottom-2">
    <h2 v-if="$slots.default" class="h2" :data-aos="animate ? 'fade-up' : null" :data-aos-delay="animate ? 100 : null" :data-aos-duration="animate ? 1200 : null">
      <slot />
    </h2>
    <h3
      v-if="$slots.subtitle || subtitle"
      class="subheaderText grayText"
      :data-aos="animate ? 'fade-up' : null"
      :data-aos-delay="animate ? 100 : null"
      :data-aos-duration="animate ?
        1200 :
        null"
    >
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </h3>
  </i-container>
</template>
<script lang="ts">
import Vue from "vue";
import { PropOptions } from "vue/types";

export default Vue.extend({
  name: "ZkAtomSectionHeader",
  props: {
    animate: {
      type: Boolean,
      default: false,
      required: false
    } as PropOptions<boolean>,
    subtitle: {
      type: String,
      default: "",
      required: false
    } as PropOptions<string>
  },
  computed: {
    notEmpty(): boolean {
      return this.$slots.default !== undefined || this.$slots.subtitle!==undefined || this.subtitle !== ""
    }
  }
});
</script>
<style lang="scss">

</style>
