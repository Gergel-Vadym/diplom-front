<script setup>

const route = useRoute();

const breadcrumbs = ref([
  {
    name: "Головна",
    url: "/",
  },
  {
    name: "Медитації",
    url: "/meditation",
  },
  {
    name: route?.params?.slug || "",
  },
]);
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="meditation">
        <BaseBreadcrumbs :links="breadcrumbs" />

        <div class="meditation__video-wrapper">
          <!-- <video src="" class="meditation__video"></video> -->

          <NuxtImg
            src="./images/meditation/meditation1.jpg"
            class="meditation__video"
            width="1720"
            height="900"
          />
        </div>
        <div class="meditation__wrapper">
          <h1 class="meditation__title">test</h1>
          <div class="meditation__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, cum
            corrupti veritatis asperiores neque perferendis praesentium maxime
            ipsa eligendi, architecto assumenda numquam quibusdam illo autem
            quas iste. Consequuntur, saepe quidem.
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
