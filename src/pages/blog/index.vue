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
const card = ref([
  {
    img: "./images/blog/blog1.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 7,
  },
  {
    img: "./images/blog/blog2.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 12,
  },
  {
    img: "./images/blog/blog3.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 18,
  },
  {
    img: "./images/blog/blog4.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 5,
  },
  {
    img: "./images/blog/blog5.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 6,
  },
  {
    img: "./images/blog/blog6.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 9,
  },
  {
    img: "./images/blog/blog7.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 3,
  },
  {
    img: "./images/blog/blog8.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 14,
  },
  {
    img: "./images/blog/blog9.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 6,
  },
  {
    img: "./images/blog/blog10.jpg",
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/blog/1",
    readTime: 17,
  },
]);

const currentPage = ref(1);
const perPage = ref(6);

const paginatedResults = computed(() => {
  const items = card.value || [];
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return items.slice(start, end);
});

const paginationMeta = computed(() => {
  const total = card.value.length;
  return {
    total,
    per_page: perPage.value,
    last_page: Math.ceil(total / perPage.value),
  };
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="blogs">
        <BaseBreadcrumbs :links="breadcrumbs" />
        <div class="blogs__wrapper">
          <CardBlog
            v-for="(card, index) in paginatedResults"
            :key="`card-blogs-${index}`"
            :data="card"
          />
        </div>
        <BasePagination v-model="currentPage" :meta="paginationMeta" />
      </div>
    </div>
  </main>
</template>
