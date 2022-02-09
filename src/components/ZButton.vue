<template>
  <i-button :class="buttonClass" :href="href" :size="size" :target="target" :variant="buttonVariant" :outline="outline"
    ><span><slot /></span
  ></i-button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ZButton",
  props: {
    glow: {
      required: false,
      type: Boolean,
      default: false,
    },
    target: {
      required: false,
      type: String,
      default: "_blank",
    },
    href: {
      required: false,
      type: String,
      default: null,
    },
    size: {
      required: false,
      type: String,
      default: null,
    },
    variant: {
      required: false,
      type: String,
      default: "primary",
    },
    content: {
      required: false,
      type: String,
      default: null,
    },
    outline: {
      required: false,
      type: String,
      default: null,
    },
    cssClass: {
      required: false,
      type: String,
      default: null,
    },
  },
  computed: {
    buttonVariant() {
      return this.variant === "glow" ? "Primary" : this.variant;
    },
    buttonClass() {
      const cssClasses = [];
      if (this.glow || this.variant === "glow") {
        cssClasses.push("glow-button");
      }
      if (this.cssClass) {
        const parsedClasses = (this.cssClass as string).split(" ");
        parsedClasses.forEach((singleClassName: string) => {
          cssClasses.push(singleClassName);
        });
      }
      return cssClasses;
    },
  },
});
</script>
<style lang="scss">
.button.-outline:focus {
  background: transparent !important;
  border-color: white !important;
  box-shadow: none !important;

  @media screen and (min-height: $mobile) {
    background: $color-secondary !important;
    border-color: $color-secondary !important;
  }
}

.button.-primary.-outline {
  margin-top: 25px;
  background: rgba(24, 24, 32, 0.01) !important;
  border: 1px solid $white !important;
  box-sizing: border-box;
  line-height: 24px;
  font-size: 20px;
  box-shadow: 0 6.66667px 13.3333px rgba(0, 0, 0, 0.08);
  border-radius: $borderRadiusXs;
  padding: 16px 46px !important;
  width: 356px;
  height: 56px;

  span {
    color: $white;
  }
}

.glow-button {
  margin: auto;
  position: relative;
  display: flex;
  font-weight: 400;
  box-shadow: none;
  border-radius: $borderRadius;
  width: 246px;
  height: 60px;
  font: 20px $openSans;
  line-height: 27px;
  text-align: center;
  color: $white !important;
  transition: color $transition2 !important;
  background: #121429 !important;

  &::before,
  &::after {
    transition: all $transition3;
    display: inline-block;
    width: calc(100%);
    height: calc(50%);
    content: "";
    position: absolute;
    filter: blur(20px);
    z-index: -1;
  }

  &::before {
    left: -2px;
    top: -2px;
    position: absolute;
    background: $gradientRegularPieceBefore;
    background-blend-mode: overlay, normal, normal, color-dodge, normal;
    mix-blend-mode: normal;
    filter: blur(5px);
    border-radius: 5px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
  }

  &::after {
    right: -6px;
    width: calc(100% + 12px);
    height: calc(100% + 4px);
    position: absolute;
    bottom: -1px;

    background: $gradientRegularPieceAfter;
    background-blend-mode: overlay, normal, normal, color-dodge, normal;
    mix-blend-mode: normal;
    filter: blur(48px);
  }

  &.no-hover-effect:hover {
    border-color: transparent !important;
  }

  &.-lg.antilink:hover,
  &:focus {
    box-shadow: none !important;
    border: none !important;
    @media (min-width: $mobile) {
      color: $white !important;
      background: lighten(#121429, 10) !important;
      &::after,
      &::before {
        filter: blur(60px);
      }
    }
  }
}
</style>
