<template>
  <a v-if="scroll" :class="classAttribute" @click.capture="scrollTo(scroll)">
    <slot />
    <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <g fill-rule="evenodd">
        <path class="HoverArrow__linePath" d="M0 5h7"></path>
        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
      </g>
    </svg>
  </a>
  <a v-else :class="classAttribute" :href="href" :target="target">
    <slot />
    <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <g fill-rule="evenodd">
        <path class="HoverArrow__linePath" d="M0 5h7"></path>
        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
      </g>
    </svg>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ZCta",
  props: {
    scroll: {
      required: false,
      type: String,
      default: "",
    },
    href: {
      required: false,
      type: String,
      default: "",
    },
    target: {
      required: false,
      type: String,
      default: "_blank",
    },
    cssClass: {
      required: false,
      type: String,
      default: "",
    },
  },
  computed: {
    classAttribute() {
      const cssClasses = ["CtaButton", "variant--Link", "CtaButton--arrow", "zk-cta"];
      if (this.cssClass) {
        const parsedClasses = this.cssClass.split(" ");
        parsedClasses.forEach(function (singleClassName) {
          cssClasses.push(singleClassName);
        });
      }
      return cssClasses;
    },
  },
});
</script>
<style lang="scss">
.CtaButton {
  border-radius: 16.5px;
  font: var(--ctaFont);
  color: var(--buttonColor);
  transition: var(--hoverTransition);
  outline: none;
  display: inline-flex;
  align-items: center;
}

.keyboard-navigation .CtaButton:focus {
  box-shadow: var(--focusBoxShadow);
}

.CtaButton.variant--Link {
  font-weight: var(--linkWeight, var(--fontWeightSemibold));
  transition-property: color, opacity;
}

@media (pointer: fine) {
  .CtaButton.variant--Link:hover {
    color: var(--linkHoverColor, var(--linkColor));
    opacity: var(--linkHoverOpacity, 1);
  }
}

@media (pointer: coarse) {
  .CtaButton.variant--Link:active {
    color: var(--linkHoverColor, var(--linkColor));
    opacity: var(--linkHoverOpacity, 1);
  }
}

.CtaButton.variant--Button {
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--buttonColor);
  color: var(--knockoutColor);
  white-space: nowrap;
  transition-property: background-color, opacity;
}

.CtaButton.variant--Button.CtaButton--arrow {
  padding-right: 12px;
}

@media (pointer: fine) {
  .CtaButton.variant--Button:hover {
    background-color: var(--buttonHoverColor, var(--buttonColor));
    opacity: var(--buttonHoverOpacity, 1);
  }
}

@media (pointer: coarse) {
  .CtaButton.variant--Button:active {
    background-color: var(--buttonHoverColor, var(--buttonColor));
    opacity: var(--buttonHoverOpacity, 1);
  }
}

.HoverArrow {
  --arrowSpacing: 8px;
  --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --arrowHoverOffset: translateX(3px);
  position: relative;
  top: 1px;
  margin-left: var(--arrowSpacing);
  stroke-width: 2px;
  fill: none;
  stroke: currentColor;
}

.HoverArrow--sizeSmall {
  --arrowSpacing: 4px;
  stroke-width: 1.5px;
}

.HoverArrow__linePath {
  opacity: 0;
  transition: opacity var(--hoverTransition, var(--arrowHoverTransition));
}

.HoverArrow__tipPath {
  transition: transform var(--hoverTransition, var(--arrowHoverTransition));
}

@media (pointer: fine) {
  a:hover .HoverArrow__linePath,
  button:hover .HoverArrow__linePath {
    opacity: 1;
  }
  a:hover .HoverArrow__tipPath,
  button:hover .HoverArrow__tipPath {
    transform: var(--arrowHoverOffset);
  }
}

@media (pointer: coarse) {
  a:active .HoverArrow__linePath,
  button:active .HoverArrow__linePath {
    opacity: 1;
  }
  a:active .HoverArrow__tipPath,
  button:active .HoverArrow__tipPath {
    transform: var(--arrowHoverOffset);
  }
}
</style>
