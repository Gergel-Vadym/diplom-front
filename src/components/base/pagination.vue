<script setup>
// emits
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  meta: {
    type: Object,
    default: () => ({ total: 100, per_page: 10, last_page: 10 }),
  },
  modelValue: {
    type: [Number, String],
    default: 1,
  },
});

// computed
const pages = computed(() => {
  const totalPage = Math.ceil(props.meta.total / props.meta.per_page);
  const currentPage = Number(props.modelValue);
  const range = [];
  const delta = 1;

  range.push(1);

  if (currentPage > delta + 2) {
    range.push("...");
  }
  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPage - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }
  if (currentPage < totalPage - delta - 1) {
    range.push("...");
  }

  if (totalPage > 1) {
    range.push(totalPage);
  }

  return range;
});
</script>

<template>
  <nav
    v-if="meta.last_page > 1"
    class="pagination-wrapper"
    aria-label="Page navigation"
  >
    <ul class="pagination">
      <li class="pagination__item">
        <button
          type="button"
          :disabled="modelValue <= 1"
          class="pagination__link pagination__link--prev"
          aria-label="Previous page"
          @click="emit('update:modelValue', modelValue - 1)"
        >
          <BaseIconSvg
            iconName="chevron"
            width="30"
            height="30"
            customClass="pagination__icon prev"
          />
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="`pagination-page-${page}`"
        class="pagination__item"
      >
        <span v-if="page === '...'" class="pagination__item-dots">...</span>
        <template v-else>
          <button
            type="button"
            :class="['pagination__link', { active: page === modelValue }]"
            @click="emit('update:modelValue', page)"
          >
            {{ page }}
          </button>
        </template>
      </li>
      <li class="pagination__item">
        <button
          type="button"
          :disabled="modelValue >= meta.last_page"
          class="pagination__link pagination__link--prev"
          aria-label="Next page"
          @click="emit('update:modelValue', modelValue + 1)"
        >
          <BaseIconSvg
            iconName="chevron"
            width="30"
            height="30"
            customClass="pagination__icon next"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>