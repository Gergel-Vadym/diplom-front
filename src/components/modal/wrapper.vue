<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const closeModal = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <div class="modal" v-if="modelValue" @click.self="closeModal">
        <div class="modal__dialog">
          <div class="modal__header">
            <slot name="title"/>
            <button class="modal__btn-close" @click="closeModal">
              <BaseIconSvg
                width="40"
                height="40"
                icon-name="close"
                class="close"
              />
            </button>
          </div>
          <div class="modal__content">
            <slot name="body"/>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-leave-active {
  transition: all 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>