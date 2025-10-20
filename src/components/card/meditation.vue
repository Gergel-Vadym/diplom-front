<script setup>
  const props = defineProps({
    data: Object,
    default: () => ({}),
  })
</script>
<template>
  <NuxtLink
    class="card card--meditation"
    :to="data.link"
  >
  <div class="card__img-wrapper">
    <NuxtImg :src="data.img" :alt="data.title" class="card__img" width="415" height="415" />
  </div>
    <div class="card__info">
      <div class="card__title">
        {{ data?.title || "" }}
      </div>
      <div class="card__subtitle">
        {{ data?.subtitle || "" }}
      </div>
    </div>
  </NuxtLink>
</template>