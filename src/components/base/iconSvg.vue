<script setup>
const props = defineProps({
  iconName: {
    type: String,
    default: "basket",
  },
  customClass: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    default: "27",
  },
  height: {
    type: [Number, String],
    default: "25",
  },
});
</script>

<template>
  <svg
    class="icon-svg"
    :class="[`icon-svg-${iconName}`, customClass]"
    :width="width"
    :height="height"
  >
    <use :xlink:href="`/sprite.svg#${iconName}`"></use>
  </svg>
</template>
