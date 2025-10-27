<script setup>
// props
const props = defineProps({
  cropHeight: {
    type: Number,
    default: 100, //rem
  },
  icon: {
    type: String,
    default: "",
  },
});

// variables
const contentRef = ref(null);
const fullHeight = ref(0);
const isOpen = ref(false);

// methods
const toggleReadMore = () => {
  isOpen.value = !isOpen.value;
  contentRef.value.style.height = isOpen.value
    ? `${fullHeight.value}rem`
    : `${props.cropHeight}rem`;
};

onMounted(() => {
  document.fonts.ready.then(() => {
    fullHeight.value = contentRef.value.offsetHeight;
    contentRef.value.style.height = `${props.cropHeight}rem`;
  });
});
</script>
<template>
  <div class="read-more" :class="{ open: isOpen }">
    <div ref="contentRef" class="read-more__content typography">
      <slot name="body" />
    </div>
    <button class="read-more__button" @click="toggleReadMore">
      <div class="show-more-button">
        <span class="show-more-button__title">{{ isOpen ? "Згорнути" : "Показати"}}</span>
      </div>
      <BaseIconSvg iconName="chevron" customClass="read-more__icon" />
    </button>
  </div>
</template>