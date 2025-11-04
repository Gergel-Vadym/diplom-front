<script setup>


const breadcrumbs = ref([
  {
    name: "Головна",
    url:"/",
  },
  {
    name: "Медитації",
  },
]);

const currentPage = ref(1);
const perPage = ref(8);

//API

const { data: meditations, refresh } = await useAsyncData(
  () => `meditations-page-${currentPage.value}`,
  () =>
    $fetch(`/meditations`, {
      ...defaultOptions(),
      query: {
        per_page: perPage.value,
        page: currentPage.value,
      },
    })
);


const paginationMeta = computed(() => {
  return {
    total: meditations.value.meta.total,
    per_page: meditations.value.meta.per_page,
    last_page: meditations.value.meta.last_page,
  };
});

watch(currentPage, async () => {
  await refresh();
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="meditations">
        <BaseBreadcrumbs :links="breadcrumbs"/>
        <div class="meditations__wrapper">
          <CardMeditation
            v-for="(card, index) in meditations.data"
            :key="`card-meditations-${index}`"
            :data="card"
          />
        </div>
        <BasePagination v-model="currentPage" :meta="paginationMeta" />
      </div>
    </div>
  </main>
</template>
