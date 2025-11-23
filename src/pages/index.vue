<script setup>
//variables
const checkboxesReadmoreBreakPoints = [
  {
    screen: 1024,
    cropHeight: 240,
  },
];

const counterSection = ref(null);

let intervalId;
const activeIndex = ref(0);

//api
const { data: page } = await useAsyncData(
  `home`,
  () =>
    $fetch(`/pages/home`, {
      ...defaultOptions(),
    }),
  {
    transform: (page) => {
      let blocksObj = {};
      page.blocks.forEach((el) => {
        blocksObj[el.type] = el;
      });

      return { ...blocksObj, data: page.data };
    },
  }
);

//metods
const slides = computed(() => {
  const items = page.value?.hero?.data?.items ?? [];
  return items.map((item, i) => ({
    ...item,
    active: i === activeIndex.value
  }));
});

function nextSlide() {
  const length = slides.value.length;
  if (!length) return;
  activeIndex.value = (activeIndex.value + 1) % length;
}

// --- COUNTER ---
const counter = ref([]);

function initCounter() {
  if (page.value?.harmony_tech?.data?.items?.length) {
    counter.value = page.value.harmony_tech.data.items.map((item) => ({
      ...item,
      current: 0,
    }));
  }
}

const animateCounts = () => {
  if (!counter.value.length) return;

  const duration = 4000;
  const startTime = performance.now();

  const update = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    counter.value.forEach((item) => {
      const end = item.count;
      item.current = Math.floor(end * progress);
    });

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.value.forEach((item) => (item.current = item.count));
    }
  };

  requestAnimationFrame(update);
};

onMounted(() => {
  initCounter();

  requestIdleCallback(() => {
    intervalId.value = setInterval(nextSlide, 5000);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        animateCounts();
        observer.unobserve(entry.target);
      }
    },
    { threshold: [0.3] }
  );

  if (counterSection.value) {
    observer.observe(counterSection.value);
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value);
});
</script>

<template>
  <main class="main">
    <div class="home">
      <div v-if="page?.hero?.data" class="home__hero container">
        <div v-if="page?.hero?.data?.title" class="home__hero-title">
          {{ page.hero.data.title || "" }}
        </div>
        <div v-if="slides" class="home__hero-img__wrapper">
          <NuxtImg
            preload
            v-for="(item, index) in slides"
            :key="`home__hero-slide-${index}`"
            class="home__hero-img"
            :src="item.img"
            :alt="`home-promo-img-${index}`"
            width="830"
            height="550"
            :class="{ active: item.active }"
            :fetchpriority="index === 0 ? 'high' : 'low'"
            :loading="index === 0 ? 'eager' : 'lazy'"
            format="webp"
          />
        </div>
      </div>

      <div v-if="page?.support_section?.data" class="container">
        <div class="home__help">
          <div
            v-if="page?.support_section?.data?.title"
            class="home__help-title"
          >
            {{ page.support_section.data.title || "" }}
          </div>
          <div
            v-if="page?.support_section?.data?.items.length > 0"
            class="home__help-card__wrapper"
          >
            <div
              v-for="(item, index) in page.support_section.data.items"
              :key="`home-card-help-${index}`"
              class="home__help-card"
            >
              <NuxtImg
                :src="item.img"
                :alt="item.title"
                width="56"
                height="56"
                class="home__help-card__img"
                fetchpriority="low"
                loading="lazy"
                format="webp"
              />
              <div v-if="item?.title" class="home__help-card__title">
                {{ item.title || "" }}
              </div>
              <div v-if="item?.subtitle" class="home__help-card__subtitle">
                {{ item.subtitle || "" }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LazyBaseSwiper
        v-if="page?.posts?.data?.posts.length > 0"
        :cardContents="page.posts.data.posts"
        noContainer
        link="/blog"
      >
        <slot>
          <span class="swiper__wrapper-title">
            {{ page.posts.data.posts.title || "Статті" }}
          </span>
        </slot>
        <template #slide="{ item }">
          <LazyCardBlog :data="item" />
        </template>
      </LazyBaseSwiper>

      <div v-if="page?.harmony_tech?.data" class="container">
        <div ref="counterSection" class="home__counter-wrapper">
          <div
            v-if="page?.harmony_tech?.data?.title"
            class="home__counter-title"
          >
            {{ page.harmony_tech.data.title || "" }}
          </div>
          <div
            v-if="page?.harmony_tech?.data?.subtitle"
            class="home__counter-subtitle"
          >
            {{ page.harmony_tech.data.subtitle || "" }}
          </div>

          <div class="home__counter-block">
            <template
              v-for="(item, index) in counter"
              :key="`home-counter-${index}`"
            >
              <div v-if="item?.desc && item?.count" class="home__counter">
                <div class="home__counter-info">
                  <div class="home__counter-count">
                    <NuxtImg
                      :src="item.img"
                      :alt="item.desc"
                      width="40"
                      height="40"
                      class="home__counter-img"
                      fetchpriority="low"
                      loading="lazy"
                      format="webp"
                    />
                    <div class="home__counter-value">
                      {{ item.current }}
                    </div>
                    <span> + </span>
                  </div>
                  <span class="home__counter-name">{{ item.desc }}</span>
                </div>
              </div>
              <div
                v-if="index < counter.length - 1"
                class="home__counter-line"
              ></div>
            </template>
          </div>
        </div>
      </div>

      <LazyBaseSwiper
        v-if="page?.meditations?.data?.posts.length > 0"
        :cardContents="page.meditations.data.posts"
        noContainer
        link="/meditation"
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }"
      >
        <slot>
          <span class="swiper__wrapper-title"
            >{{ page?.meditations?.data?.title || "Медитації" }}
          </span>
        </slot>
        <template #slide="{ item }">
          <LazyCardMeditation :data="item" />
        </template>
      </LazyBaseSwiper>

      <div v-if="page?.data?.body" class="read-more-section">
        <div class="container">
          <LazyReadMore
            cropHeight="210"
            :breakpoints="checkboxesReadmoreBreakPoints"
          >
            <template #body>
              <div class="typography" v-html="page.data.body"></div>
            </template>
          </LazyReadMore>
        </div>
      </div>
    </div>
  </main>
</template>
