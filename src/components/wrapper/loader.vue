<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  absolute: { type: Boolean, default: false },
});
</script>
<template>
  <div class="loader" :class="{ 'loader__absolute': absolute }">
    <div v-if="modelValue" class="loader__background"></div>
    <svg
      v-if="modelValue"
      class="loader__progress"
      stroke="#427cff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg preserveAspectRatio="xMidYMid meet" viewBox="-6 -6 50 50">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity="0.2" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </svg>
    <slot></slot>
  </div>
</template>
<style lang="scss">
.loader {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius:30rem;
  &__content {
    opacity: 0.2;
  }
  &__absolute{
    position: absolute;
    top: 0;
    left: 0;
  }
  > .loader__progress {
    position: absolute;
    z-index: 5;
    max-height: 75px;
    max-width: 75px;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    stroke: var(--blue);
  }
  > .loader__background {
    border-radius: 30rem;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: white, $alpha: 0.7);
    z-index: 5;
  }
  &.top-left {
    > .loaeder__progress {
      top: 0%;
      left: 0%;
      transform: translate(0%, 0%);
    }
  }
  &.top-center {
    > .loader__progress {
      top: 0%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }
  &.top-right {
    > .loader__progress {
      top: 0%;
      left: 100%;
      transform: translate(-100%, 0%);
    }
  }
  &.center-left {
    > .loader__progress {
      top: 50%;
      left: 0%;
      transform: translate(0%, -50%);
    }
  }
  &.center-right {
    > .loader__progress {
      top: 50%;
      left: 100%;
      transform: translate(-100%, -50%);
    }
  }
  &.bottom-left {
    > .loader__progress {
      top: 100%;
      left: 0%;
      transform: translate(0%, -100%);
    }
  }
  &.bottom-center {
    > .loader__progress {
      top: 100%;
      left: 50%;
      transform: translate(-50%, -100%);
    }
  }
  &.bottom-right {
    > .loader__progress {
      top: 100%;
      left: 100%;
      transform: translate(-100%, -100%);
    }
  }
}
</style>