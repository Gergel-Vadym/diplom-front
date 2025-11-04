<script setup>
const breadcrumbs = ref([
  {
    name: "Головна",
    url: "/",
  },
  {
    name: "Блог",
  },
]);
const currentPage = ref(1);
const perPage = ref(6);

//API

const { data: articles, refresh } = await useAsyncData(
  () => `articles-page-${currentPage.value}`,
  () =>
    $fetch(`/articles`, {
      ...defaultOptions(),
      query: {
        per_page: perPage.value,
        page: currentPage.value,
      },
    })
);


const paginationMeta = computed(() => {
  return {
    total: articles.value.meta.total,
    per_page: articles.value.meta.per_page,
    last_page: articles.value.meta.last_page,
  };
});

watch(currentPage, async () => {
  await refresh();
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="blogs">
        <BaseBreadcrumbs :links="breadcrumbs" />
        <div class="blogs__wrapper">
          <CardBlog
            v-for="(card, index) in articles.data"
            :key="`card-blogs-${index}`"
            :data="card"
          />
        </div>
        <BasePagination v-model="currentPage" :meta="paginationMeta" />
      </div>
    </div>
  </main>
</template>
