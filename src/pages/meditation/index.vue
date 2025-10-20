<script setup>
const card = ref([
  {
    img: "./images/meditation/meditation1.jpg",
    title: "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle: "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation2.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation3.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation4.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation5.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation6.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation7.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation8.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation9.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
  {
    img: "./images/meditation/meditation10.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/blog/1",
  },
]);

const currentPage = ref(1);
const perPage = ref(8);

const paginatedResults = computed(() => {
  const items = card.value || []
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return items.slice(start, end)
})

const paginationMeta = computed(() => {
  const total = card.value.length
  return {
    total,
    per_page: perPage.value,
    last_page: Math.ceil(total / perPage.value),
  }
})
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="meditation">
        <div class="meditation__wrapper">
          <CardMeditation
            v-for="(card, index) in paginatedResults"
            :key="`card-meditation-${index}`"
            :data="card"
          />
        </div>
        <BasePagination v-model="currentPage" :meta="paginationMeta" />
      </div>
    </div>
  </main>
</template>
