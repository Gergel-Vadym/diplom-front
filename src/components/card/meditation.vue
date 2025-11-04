<script setup>
const props = defineProps({
  data: Object,
  default: () => ({}),
});
</script>
<template>
  <NuxtLink class="card card--meditation" :to="`/meditation/${data.slug}`">
    <div class="card__img-wrapper">
      <NuxtImg
        :src="data.image.url"
        :alt="data.image.name"
        class="card__img"
        width="415"
        height="415"
      />
    </div>
    <div class="card__info">
      <div class="card__title">
        {{ data?.name || "" }}
      </div>
    </div>
  </NuxtLink>
</template>