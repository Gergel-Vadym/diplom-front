<script setup>
import Slider from "@vueform/slider";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Chart from "chart.js/auto";

const breadcrumbs = ref([
  { name: "Головна", url: "/" },
  { name: "Аналітика" },
]);

const loader = ref(false);

const form = ref({
  anxiety: 1,
  mood: 1,
  comment: "",
  emotions: [],
});

const toggleEmotion = (id) => {
  const exists = form.value.emotions.find((e) => e.id === id);
  if (exists) {
    form.value.emotions = form.value.emotions.filter((e) => e.id !== id);
  } else {
    form.value.emotions.push({ id });
  }
};

const line = ref(null);
const bars = ref(null);
let lineChart = null;
let barsChart = null;

// variables
const date = ref(new Date());
const formatDate = (value) => {
  const d = new Date(value);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const handleDateChange = (modelValue) => {
  date.value = modelValue || new Date();
};
const formattedDate = computed(() => formatDate(date.value));

// API
const { data: emotion } = await useAsyncData(
  () => `my-tracks-emotion`,
  () => $fetch(`/my/tracks/form`, { ...defaultOptions() })
);

const { data: tracks, refresh: tracksRefresh } = await useAsyncData(
  () => `my-tracks`,
  () => $fetch(`/my/tracks/${formattedDate.value}/list`, { ...defaultOptions() })
);

const onSubmit = async (val, action) => {
  try {
    loader.value = true;
    await $fetch("/my/tracks", {
      ...defaultOptions(),
      method: "POST",
      body: form.value,
    });
    customToast("Дані успішно збережено", "success");
    await tracksRefresh();
    await statisticRefresh();
    await nextTick();
    updateCharts();
    form.value = { anxiety: 1, mood: 1, comment: "", emotions: [] };
  } catch (error) {
    console.error(error);
    action.setErrors(error.data.errors);
  } finally {
    loader.value = false;
  }
};

const { data: statistic, refresh: statisticRefresh } = await useAsyncData(
  () => `my-statistic`,
  () => $fetch(`/my/tracks/statistic`, { ...defaultOptions() })
);

console.log(statistic.value, "statistic")

// === Chart.js helpers ===
function createLineChart() {
  return new Chart(line.value, {
    type: "line",
    data: {
      labels: Array.from({ length: 31 }, (_, i) => i + 1),
      datasets: [
        {
          label: "Рівень настрою",
          data: statistic.value?.tracks?.map((e) => e.mood).reverse() ?? [],
          borderColor: "#6FA8DC",
          backgroundColor: "#6FA8DC",
          cubicInterpolationMode: "monotone",
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 2,
        },
        {
          label: "Рівень тривоги",
          data: statistic.value?.tracks?.map((e) => e.anxiety).reverse() ?? [],
          borderColor: "#E06666",
          backgroundColor: "#E06666",
          cubicInterpolationMode: "monotone",
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 2,
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
          min: 1,
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
}

function createBarsChart() {
  return new Chart(bars.value, {
    type: "doughnut",
    data: {
      labels: statistic.value?.emotions?.map((e) => e.name) ?? [],
      datasets: [
        {
          data: statistic.value?.emotions?.map((e) => e.count) ?? [],
          backgroundColor: statistic.value?.emotions?.map((e) => e.color) ?? [],
        },
      ],
    },
    options: { responsive: true, cutout: "40%" },
  });
}

function updateCharts() {
  if (lineChart && statistic.value?.tracks?.length) {
    lineChart.data.datasets[0].data = statistic.value.tracks.map((e) => e.mood).reverse();
    lineChart.data.datasets[1].data = statistic.value.tracks.map((e) => e.anxiety).reverse();
    lineChart.update();
  }

  if (barsChart && statistic.value?.emotions?.length) {
    barsChart.data.labels = statistic.value.emotions.map((e) => e.name);
    barsChart.data.datasets[0].data = statistic.value.emotions.map((e) => e.count);
    barsChart.data.datasets[0].backgroundColor = statistic.value.emotions.map((e) => e.color);
    barsChart.update();
  }
}

onMounted(async () => {
  await nextTick();
  lineChart = createLineChart();
  barsChart = createBarsChart();
});

watch(formattedDate, async () => {
  await statisticRefresh();
  await tracksRefresh();
  await nextTick();
  updateCharts();
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
                @update:model-value="handleDateChange"
              />
              {{ date }}
              {{ formattedDate }}
              <div class="analytics__block-text">
                <span
                  v-if="tracks?.data[0]?.comment"
                  class="analytics__block-text-info"
                >
                  {{ tracks.data[0].comment }}
                </span>
                <span v-else class="analytics__block-text-desc">
                  Ваш запис про настрій відсутній
                </span>
              </div>
            </div>
          </div>
          <div class="analytics__block">
            <h2 class="analytics__block-title">Форма настрою</h2>
            <WrapperLoader v-model="loader">
              <ClientOnly>
                <vee-form @submit="onSubmit" class="analytics__form">
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

                  <div
                    v-if="emotion?.form?.emotions.length > 0"
                    class="analytics__form-emotions"
                  >
                    <button
                      v-for="(item, index) in emotion.form.emotions"
                      :key="`analytics__form-emotions__btn-${index}`"
                      type="button"
                      class="analytics__form-emotions__btn"
                      :class="{
                        active: form.emotions.some((e) => e.id === item.id),
                      }"
                      @click="toggleEmotion(item.id)"
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

                  <FieldsTextarea
                    v-model="form.comment"
                    name="comment"
                    placeholder="Запис про настрій"
                  />

                  <button class="btn btn--light">Зберегти</button>
                </vee-form>
              </ClientOnly>
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
