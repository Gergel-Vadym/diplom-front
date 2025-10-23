<script setup>
import Slider from "@vueform/slider";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Chart from "chart.js/auto";

const date = ref(new Date());
const activeEmotions = ref([]);

const breadcrumbs = ref([
  {
    name: "Головна",
    url: "/",
  },
  {
    name: "Аналітика",
  },
]);

const emotions = ref([
  { name: "Сум", value: 4, color: "#00BFFF" },
  { name: "Злість", value: 7, color: "#FF3366" },
  { name: "Радість", value: 9, color: "#FFD700" },
  { name: "Страх", value: 5, color: "#00FA9A" },
  { name: "Цікавість", value: 8, color: "#9932CC" },
  { name: "Безсилля", value: 3, color: "#FF8C00" },
  { name: "Натхнення", value: 10, color: "#00CED1" },
]);

const loader = ref(false);

const form = ref({
  anxiety: 1,
  mood: 1,
  info: "",
});
const toggleEmotion = (value) => {
  if (activeEmotions.value.includes(value)) {
    activeEmotions.value = activeEmotions.value.filter((v) => v !== value);
  } else {
    activeEmotions.value.push(value);
  }
};

const line = ref(null);
const bars = ref(null);

const moodData = [
  5, 6, 10, 4, 3, 8, 1, 5, 7, 4, 6, 5, 7, 8, 4, 5, 6, 7, 5, 6, 4, 5, 7, 6, 5, 9,
  7, 6, 0, 4, 6,
];

const anxietyData = [
  2, 3, 5, 7, 1, 4, 3, 2, 6, 5, 3, 4, 5, 6, 2, 3, 4, 5, 3, 4, 2, 4, 6, 5, 3, 6,
  5, 4, 2, 3, 4,
];

onMounted(() => {
  new Chart(line.value, {
    type: "line",
    data: {
      labels: Array.from({ length: 31 }, (_, i) => i + 1),
      datasets: [
        {
          label: "Рівень настрою",
          data: moodData,
          borderColor: "#6FA8DC",
          backgroundColor: "#6FA8DC",
          borderWidth: 2,
          cubicInterpolationMode: "monotone",
          tension: 0.4,
          pointRadius: 0,
        },
        {
          label: "Рівень тривоги",
          data: anxietyData,
          borderColor: "#E06666",
          backgroundColor: "#E06666",
          borderWidth: 2,
          cubicInterpolationMode: "monotone",
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        title: {
          text: "Рівень настрою та тривоги за місяць",
        },
      },
      scales: {
        y: {
          min: 0,
          max: 10,
          ticks: {
            autoSkip: false,
            padding: 0,
            maxRotation: 0,
          },
        },
        x: {
          ticks: {
            autoSkip: false,
            padding: 0,
            maxRotation: 0,
            callback: (value, index, values) => {
              return index + 1 === 1 ||
                index + 1 === values.length ||
                ((index + 1) % 5 === 0 && values.length - index + 1 >= 5)
                ? index + 1
                : "";
            },
          },
        },
      },
    },
  });

  new Chart(bars.value, {
    type: "doughnut",
    data: {
      labels: emotions.value.map((e) => e.name),
      datasets: [
        {
          data: emotions.value.map((e) => e.value),
          backgroundColor: emotions.value.map((e) => e.color),
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "40%",
    },
  });
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="analytics">
        <BaseBreadcrumbs :links="breadcrumbs" />
        <div class="analytics__wrapper">
          <div class="analytics__block">
            <h2 class="analytics__block-title">Календар настрою</h2>
            <div class="analytics__block-wrapper">
              <VueDatePicker
                v-model="date"
                :enable-time-picker="false"
                :inline="true"
              />
              <div class="analytics__block-text">
                <span class="analytics__block-text-desc">
                  Ваш запис про настрій відсутній
                </span>
              </div>
            </div>
          </div>
          <div class="analytics__block">
            <h2 class="analytics__block-title">Форма настрою</h2>
            <WrapperLoader v-model="loader">
              <vee-form class="analytics__form">
                <div class="analytics__form-slider">
                  <div class="analytics__form-slider__wrapper">
                    <div class="analytics__form-slider-title">
                      Вкажіть свій рівень настрою
                    </div>
                    <Slider
                      v-model="form.mood"
                      class="analytics__form-slider__input"
                      :min="1"
                      :max="10"
                      :step="1"
                      :tooltips="false"
                    />
                  </div>
                  <div class="analytics__form-slider__labels">
                    <span class="analytics__form-slider__labels-items"
                      >низький</span
                    >
                    <span class="analytics__form-slider__labels-items"
                      >високий</span
                    >
                  </div>
                </div>

                <div class="analytics__form-emotions">
                  <button
                    v-for="(item, index) in emotions"
                    :key="`analytics__form-emotions__btn-${index}`"
                    type="button"
                    class="analytics__form-emotions__btn"
                    :class="{ active: activeEmotions.includes(item.value) }"
                    @click="toggleEmotion(item.value)"
                  >
                    {{ item.name }}
                  </button>
                </div>

                <div class="analytics__form-slider">
                  <div class="analytics__form-slider__wrapper">
                    <div class="form-slider-title">
                      Вкажіть свій рівень тривоги
                    </div>
                    <Slider
                      v-model="form.anxiety"
                      class="analytics__form-slider__input"
                      :min="1"
                      :max="10"
                      :step="1"
                      :tooltips="false"
                    />
                  </div>
                  <div class="analytics__form-slider__labels">
                    <span class="analytics__form-slider__labels-items"
                      >низький</span
                    >
                    <span class="analytics__form-slider__labels-items"
                      >високий</span
                    >
                  </div>
                </div>

                <FieldsTextarea v-model="form.info" placeholder="Запис про настрій" />

                <button class="btn btn--light">Зберегти</button>
              </vee-form>
            </WrapperLoader>
          </div>
          <div class="analytics__block">
            <div class="analytics__chart-wrapper">
              <h2 class="analytics__block-title">Як змінювався мій настрій</h2>
              <div class="analytics__chart">
                <div class="analytics__chart-container">
                  <canvas ref="line"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="analytics__block">
            <div class="analytics__chart-wrapper">
              <h2 class="analytics__block-title">Які емоції переважали</h2>
              <div class="analytics__chart">
                <div class="analytics__chart-container">
                  <canvas ref="bars"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style src="@vueform/slider/themes/default.css"></style>
