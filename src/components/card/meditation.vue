<script setup>

  const card = ref([
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
    {
      img:"./images/meditation.jpg",
      title:"test",
      subtitle:"test test test test test",
    },
  ])

</script>
<template>
  <div v-for="(card, index) in card" :key="`card-meditation-${index}`" class="card card--meditation">
    <img
      :scr="card.img"
      :alt="card.title"
    />
    <div class="card__info">
      <div class="card__title">
        {{ card.title }}
      </div>
      <div class="card__subtitle">
        {{ card.subtitle }}
      </div>
    </div>
  </div>
</template>