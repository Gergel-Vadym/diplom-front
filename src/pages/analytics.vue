<script setup>
import Slider from "@vueform/slider";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref(new Date());
const activeEmotions = ref([]);

const emotions = ref([
  {
    name: "Сум",
    value: "Sumy",
  },
  {
    name: "Злість",
    value: "Malice",
  },
  {
    name: "Радість",
    value: "Joy",
  },
  {
    name: "Страх",
    value: "Fear",
  },
  {
    name: "Цікавість",
    value: "Interest",
  },
  {
    name: "Безсилля",
    value: "Impotence",
  },
  {
    name: "Натхнення",
    value: "Inspiration",
  },
]);

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
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="analytics">
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
                <div class="form-slider-title">Вкажіть свій рівень тривоги</div>
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

            <FieldsTextarea v-model="form.info" />

            <button class="btn btn--light">Зберегти</button>
          </vee-form>
        </div>
        <div class="analytics__block"></div>
        <div class="analytics__block"></div>
      </div>
    </div>
  </main>
</template>
<style src="@vueform/slider/themes/default.css"></style>
