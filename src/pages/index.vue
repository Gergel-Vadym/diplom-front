<script setup>
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


const cardM = ref([
  {
    img: "./images/meditation/meditation1.jpg",
    title: "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle: "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation2.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation3.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation4.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation5.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation6.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation7.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation8.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation9.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
  {
    img: "./images/meditation/meditation10.jpg",
    title: "test",
    subtitle: "test test test test test",
    link: "/meditation/1",
  },
]);



</script>

<template>
  <main class="main">
    <BaseSwiper :cardContents="card" noContainer>
      <slot>
        <span class="swiper__wrapper-title"> Статті </span>
      </slot>
      <template #slide="{ item }">
        <CardBlog :data="item" />
      </template>
    </BaseSwiper>
    <BaseSwiper :cardContents="cardM" noContainer>
      <slot>
        <span class="swiper__wrapper-title"> Медитації </span>
      </slot>
      <template #slide="{ item }">
        <CardMeditation :data="item" />
      </template>
    </BaseSwiper>
  </main>
</template>
