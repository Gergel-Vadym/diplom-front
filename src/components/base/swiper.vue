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
      :class="{ container: noContainer }"
    >
      <slot />
      <div
        v-if="!showBtns || cardContents.length > 3"
        class="swiper__wrapper-btns"
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
        :breakpoints="{
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }"
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