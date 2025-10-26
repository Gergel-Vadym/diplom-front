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
    title:
      "testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test ",
    subtitle:
      "test test test test test testtesttesttesttesttest testtesttest testtesttest testtest testv test test test test test test test test",
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

const counter = ref([
  {
    name: "Користувачів",
    value: 110,
    img: "./images/users.png",
  },
  {
    name: "Років на ринку",
    value: 3,
    img: "./images/time.png",
  },
  {
    name: "Публікацій у блозі",
    value: 20,
    img: "./images/blog.png",
  },
]);

const counterSection = ref(null);
const slide = ref([
  {
    id: 1,
    img: "./images/blog/blog1.jpg",
    active: true,
  },
  {
    id: 2,
    img: "./images/blog/blog2.jpg",
    active: false,
  },
]);

let intervalId;

//metods

const animateCounts = () => {
  counter.value.forEach((item) => {
    item.current = 0;

    const end = item.value;
    const duration = 3000;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      item.current++;
      if (item.current >= end) {
        item.current = end;
        clearInterval(timer);
      }
    }, stepTime);
  });
};

function changeActiveSlide() {
  const activeIndex = slide.value.findIndex((slide) => slide.active);
  slide.value[activeIndex].active = false;

  const nextIndex = (activeIndex + 1) % slide.value.length;
  slide.value[nextIndex].active = true;
}

onMounted(() => {});

onMounted(() => {
  intervalId = setInterval(changeActiveSlide, 5000);
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        animateCounts();
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: [0.3],
    }
  );

  if (counterSection.value) {
    observer.observe(counterSection.value);
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <main class="main">
    <div class="home">
      <section class="home__hero container">
        <div class="home__hero-wrapper">
          <h1 class="home__hero-title">
            Ми піклуємося про ментальне здоров’я та допомагаємо знайти гармонію
            кожного дня.
          </h1>
          <div class="home__hero-img__wrapper">
            <NuxtImg
              v-for="(item, index) in slide"
              :key="`home__hero-slide-${index}`"
              class="home__hero-img"
              :src="item.img"
              :alt="`home-promo-img-${index}`"
              width="830"
              height="550"
              :class="{ active: item.active }"
            />
          </div>
        </div>
      </section>

      <BaseSwiper :cardContents="card" noContainer titleCenter btnAbs>
        <slot>
          <span class="swiper__wrapper-title">
            Перегляньте наш блог, щоб знати більше про медитацію, сон, стрес та
            ментальне здоров'я.
          </span>
        </slot>
        <template #slide="{ item }">
          <CardBlog :data="item" />
        </template>
      </BaseSwiper>

      <div class="container">
        <section ref="counterSection" class="home__counter-wrapper">
          <h2 class="home__counter-title">Технології для гармонійного життя</h2>
          <div class="home__counter-subtitle">
            Ми створюємо цифровий простір, який допомагає краще розуміти себе,
            піклуватися про ментальне здоров’я та знаходити внутрішній баланс.
          </div>

          <div class="home__counter-block">
            <template
              v-for="(item, index) in counter"
              :key="`home-counter-${index}`"
            >
              <div v-if="item.name && item.value" class="home__counter">
                <NuxtImg
                  :src="item.img"
                  :alt="item.name"
                  width="40"
                  height="40"
                  class="home__counter-img"
                />
                <div class="home__counter-info">
                  <div class="home__counter-count">
                    <span class="home__counter-value">
                      {{ item.current }}
                    </span>
                    <span> + </span>
                  </div>
                  <span class="home__counter-name">{{ item.name }}</span>
                </div>
              </div>
              <div
                v-if="index !== counter.length - 1"
                class="home__counter-line"
              ></div>
            </template>
          </div>
        </section>
      </div>

      <BaseSwiper
        :cardContents="cardM"
        noContainer
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }"
      >
        <slot>
          <span class="swiper__wrapper-title"> Медитації </span>
        </slot>
        <template #slide="{ item }">
          <CardMeditation :data="item" />
        </template>
      </BaseSwiper>
    </div>
  </main>
</template>
