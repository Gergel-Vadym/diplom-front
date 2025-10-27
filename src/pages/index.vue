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
    img: "./images/stongs.png",
  },
  {
    name: "Публікацій у блозі",
    value: 20,
    img: "./images/blog.png",
  },
  {
    name: "Годин медитації",
    value: 500,
    img: "./images/time.png",
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

const cardHelp = ref([
  {
    title: "Менше стресу.",
    subtitle:
      "Отримайте миттєве полегшення від стресу та тривоги, щоб ви могли повернутися до життя.",
    icon: "./images/strees.png",
  },
  {
    title: "Більше спати.",
    subtitle: "Засинайте (і спіть) природно та спокійно.",
    icon: "./images/sleep.png",
  },
  {
    title: "Живи з розумом.",
    subtitle:
      "Долайте життєві злети та падіння зі стійкістю, впевненістю та спрямованою підтримкою.",
    icon: "./images/live.png",
  },
]);

let intervalId;

//metods

const animateCounts = () => {
  counter.value.forEach((item) => {
    item.current = 0;

    const end = item.value;
    const duration = 3000;
    const stepTime = Math.max(Math.floor(duration / end));

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

const checkboxesReadmoreBreakPoints = [
  {
    screen: 1024,
    cropHeight: 240,
  },
];
</script>

<template>
  <main class="main">
    <div class="home">
      <section class="home__hero container">
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
      </section>

      <div class="container">
        <section class="home__help">
          <h2 class="home__help-title">
            Ми тут, щоб допомогти вам почуватися краще.
          </h2>
          <div class="home__help-card__wrapper">
            <div
              v-for="(item, index) in cardHelp"
              :key="`home-card-help-${index}`"
              class="home__help-card"
            >
              <NuxtImg
                :src="item.icon"
                :alt="item.title"
                width="56"
                height="56"
                class="home__help-card__img"
              />
              <div class="home__help-card__title">
                {{ item.title || "" }}
              </div>
              <div class="home__help-card__subtitle">
                {{ item.subtitle || "" }}
              </div>
            </div>
          </div>
        </section>
      </div>

      <BaseSwiper :cardContents="card" noContainer link="/blog">
        <slot>
          <span class="swiper__wrapper-title"> Блог </span>
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
            </template>
          </div>
        </section>
      </div>

      <BaseSwiper
        :cardContents="cardM"
        noContainer
        link="/meditation"
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

      <div class="read-more-section">
        <div class="container">
          <ReadMore
            customClass="catalog-filter__read-more"
            cropHeight="210"
            :breakpoints="checkboxesReadmoreBreakPoints"
          >
            <template #body>
              <div class="typography">
            <h1>Медитація: гармонія розуму та тіла</h1>
            <p>
              Медитація — це практика самопізнання, що допомагає зосередитися на
              теперішньому моменті, заспокоїти розум і тіло. Вона здобула
              популярність завдяки своїй здатності зменшувати напруження,
              покращувати настрій і сприяти внутрішній рівновазі.
            </p>
            <p>
              Якщо ви тільки починаєте, оберіть просту техніку. Сядьте зручно,
              закрийте очі, спостерігайте за диханням і дозвольте думкам вільно
              проходити, не оцінюючи їх.
            </p>

            <h2>Суть медитації</h2>
            <p>
              Медитація — давня духовна практика, що бере свій початок у східних
              традиціях. Вона поєднує дихальні вправи, спостереження,
              концентрацію та усвідомлення для досягнення внутрішнього спокою й
              гармонії.
            </p>

            <h3>Навіщо медитувати?</h3>
            <p>
              Регулярна медитація допомагає розвинути
              <strong>уважність</strong> і <b>внутрішню стійкість</b> у
              щоденному житті. Наукові дослідження доводять, що
              <strong>свідоме тренування розуму</strong> позитивно впливає на
              фізичне та емоційне здоров’я.
            </p>

            <p>
              <em>
                Крім того, медитація зменшує тривожність, покращує концентрацію,
                допомагає краще справлятися зі стресом і відновлює емоційну
                рівновагу.
              </em>
            </p>

            <h4>Популярні види медитації</h4>
            <p>Існує багато способів медитувати. Ось кілька найпоширеніших:</p>
            <ol>
              <li>Медитація на диханні</li>
              <li>Медитація з повторенням мантри</li>
              <li>Рухома медитація (наприклад, йога або тай-чи)</li>
              <li>Медитація уяви (візуалізація)</li>
              <li>Медитація з відкритими очима</li>
            </ol>

            <h5>Позитивний вплив на організм</h5>
            <ul>
              <li>Зменшення стресу та напруги</li>
              <li>Покращення концентрації</li>
              <li>Підвищення емоційної стабільності</li>
              <li>Глибше усвідомлення себе</li>
            </ul>

            <h6>Як почати практику?</h6>
            <p>
              Почніть із коротких сеансів по 5–10 хвилин на день. Знайдіть
              спокійне місце, сядьте зручно та спостерігайте за своїм диханням.
              З часом ви навчитеся легше зосереджуватись і відчувати більше
              спокою.
            </p>
              </div>
            </template>
          </ReadMore>
        </div>
      </div>
    </div>
  </main>
</template>
