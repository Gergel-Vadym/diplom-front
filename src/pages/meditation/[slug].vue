<script setup>
const route = useRoute();

//API
const { data: data } = await useAsyncData(
  () => `meditations-${route?.params?.slug}`,
  () =>
    $fetch(`/meditations/${route.params.slug}`, {
      ...defaultOptions(),
    })
);

const breadcrumbs = computed(() => [
  {
    name: "Головна",
    url: "/",
  },
  {
    name: "Медитації",
    url: "/meditation",
  },
  {
    name: data.value?.crumbs?.[1]?.name || "",
  },
]);

console.log(data.value);
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="meditation">
        <BaseBreadcrumbs :links="breadcrumbs" />

        <div class="meditation__video-wrapper">
          <template v-if="data?.data?.video?.url">
            <video
              :src="data.data.video.url"
              :alt="data.data.name"
              class="meditation__video"
              width="1720"
              height="900"
              controls
              loop
            />
          </template>
          <template v-else>
            <NuxtImg
              :src="data.data.image.url"
              :alt="data.data.name"
              class="meditation__video"
              width="1720"
              height="900"
            />
          </template>
        </div>
        <div class="meditation__wrapper">
          <h1 class="meditation__title">{{ data?.data?.name || "" }}</h1>
          <div class="meditation__subtitle">
            <div
              v-if="data?.data?.body"
              class="typography"
              v-html="data.data.body"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
