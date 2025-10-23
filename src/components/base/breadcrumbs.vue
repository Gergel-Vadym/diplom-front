<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <template
        v-for="(item, index) in links"
        :key="'breadcrumbs-item-' + index"
      >
        <li v-if="item?.name" class="breadcrumbs__item">
          <span v-if="index !== 0" class="breadcrumbs__slash">/</span>
          <NuxtLink
            v-if="index < links.length - 1 || links.length === 1"
            :to="item.url"
            class="breadcrumbs__link"
          >
            {{ item.name }}
          </NuxtLink>
          <span v-else class="breadcrumbs__link breadcrumbs__link--last">
            {{ item.name }}
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>
