<script setup>
const props = defineProps({
  data: Object,
  default: () => ({}),
});
</script>
<template>
  <NuxtLink :to="`/blog/${data.slug}`" class="card card--blog">
    <div class="card__img-wrapper">
      <NuxtImg :src="data.image.url" :alt="data.image.name" class="card__img" width="200" height="200" />
    </div>
    <div class="card__info">
      <div class="card__wrapper">
        <div class="card__autor">Breez</div>
        <div class="card__readtime">~ {{ data.duration }} хв.</div>
      </div>
      <div class="card__title">{{ data.name || "" }}</div>
      <div class="card__subtitle">{{ data.teaser || "" }}</div>
    </div>
  </NuxtLink>
</template>