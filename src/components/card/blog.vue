<script setup>
const props = defineProps({
  data: Object,
  default: () => ({}),
});
</script>
<template>
  <NuxtLink :to="data.link" class="card card--blog">
    <div class="card__img-wrapper">
      <NuxtImg :src="data.img" :alt="data.title" class="card__img" width="200" height="200" />
    </div>
    <div class="card__info">
      <div class="card__wrapper">
        <div class="card__autor">Breez</div>
        <div class="card__readtime">~ {{ data.readTime || 5 }} хв.</div>
      </div>
      <div class="card__title">{{ data.title || "" }}</div>
      <div class="card__subtitle">{{ data.subtitle || "" }}</div>
    </div>
  </NuxtLink>
</template>