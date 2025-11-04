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

</script>

<template>
  <main class="main">
    <div class="container">
      <section class="meditation">
        <BaseBreadcrumbs :links="breadcrumbs" />

        <div class="meditation__video-wrapper">
          <video
            src="../../public/video/video.mp4"
            class="meditation__video"
            width="1720"
            height="700"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
        <div class="meditation__wrapper">
          <h1 class="meditation__title">{{data?.data?.name || ""}}</h1>
          <div class="meditation__subtitle">
          <div v-if="data?.data?.body" class="typography" v-html="data.data.body"></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
