<script setup>
//props

const props = defineProps({
  showBtns: {
    type: Boolean,
    default: false,
  },
  cardContents: {
    type: Array,
    default: [],
  },
  noContainer: {
    type: Boolean,
    default: false,
  },
  titleCenter: {
    type: Boolean,
    default: false,
  },
  btnAbs: {
    type: Boolean,
    default: false,
  },
  link:{
    type:String,
    default:"",
  },
  breakpoints: {
    type: Object,
    default: () => ({
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }),
  },
});

//variables
const btnId = useId();
</script>

<template>
  <div
    class="swiper__wrapper"
    :class="{ 'swiper__wrapper-noWrapper': noContainer }"
  >
    <div
      class="swiper__wrapper-title-container"
      :class="[
        {
          container: noContainer,
          'swiper__wrapper-title--center': titleCenter,
        },
      ]"
    >
      <slot />
      <div class="swiper__btns-wrapper">
        <NuxtLink :to="link" class="btn">
          Дивитись всі
        </NuxtLink>
        <div
          v-if="!showBtns"
          class="swiper__wrapper-btns"
          :class="[{'swiper__wrapper-btns--absolute' : btnAbs}]"
        >
          <button
            :class="`swiper-button-prev swiper-button-prev-${btnId} swiper-button`"
          >
            <BaseIconSvg
              iconName="chevron"
              width="24"
              height="24"
              customClass="swiper-button-icon"
            />
          </button>
          <button
            :class="`swiper-button-next swiper-button-next-${btnId} swiper-button`"
          >
            <BaseIconSvg
              iconName="chevron"
              width="24"
              height="24"
              customClass="swiper-button-icon"
            />
          </button>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Swiper
        class="main-swiper"
        :modules="[SwiperNavigation]"
        :navigation="{
          nextEl: `.swiper-button-next-${btnId}`,
          prevEl: `.swiper-button-prev-${btnId}`,
        }"
        :space-between="10"
        :slides-per-view="1"
        :breakpoints="breakpoints"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="(item, index) in cardContents"
          :key="index"
        >
          <slot name="slide" :item="item" />
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>