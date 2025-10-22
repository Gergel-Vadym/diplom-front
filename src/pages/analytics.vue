<script setup>
import Slider from '@vueform/slider'
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();

const form = ref({

})
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="analytics">
        <div class="analytics__block">
          <h2 class="analytics__block-title">Календар настрою</h2>
          <VueDatePicker
            v-model="date"
            :enable-time-picker="false"
            inline="true"
          />
        </div>
        <div class="analytics__block">
          <h2 class="analytics__block-title">Календар настрою</h2>
          <vee-form class="analytics__form"> 
            <div class=""></div>
          </vee-form>
        </div>
      </div>
    </div>
  </main>
</template>
