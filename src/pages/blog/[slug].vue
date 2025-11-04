<script setup>
const route = useRoute();

//API

const { data: data } = await useAsyncData(
  () => `articles-${route?.params?.slug}`,
  () =>
    $fetch(`/articles/${route.params.slug}`, {
      ...defaultOptions(),
    })
);
const breadcrumbs = computed(() => [
  {
    name: "Головна",
    url: "/",
  },
  {
    name: "Блог",
    url: "/blog",
  },
  {
    name: data.value?.crumbs?.[1]?.name || "",
  },
]);
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="blog">
        <BaseBreadcrumbs :links="breadcrumbs" />
        <div class="blog__img-wrapper">
          <NuxtImg
            v-if="data?.data?.image?.url"
            :src="data.data.image.url"
            :alt="data.data.image.name"
            class="blog__img"
            width="1100"
            height="615"
          />
        </div>
        <div class="blog__wrapper">
          <div class="blog__info">
            <div class="blog__autor">Breez</div>
            <div class="blog__readtime">~ {{ data.data.duration }} хв.</div>
          </div>
          <div
            v-if="data?.data?.body"
            class="typography"
            v-html="data.data.body"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>
