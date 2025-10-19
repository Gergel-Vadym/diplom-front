<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "input__default",
  },
});
</script>

<template>
  <div class="input" :class="className">
    <div class="input__wrapper">
      <div v-if="label" class="input__label">
        {{ label }}
      </div>
      <input 
        :name="name" 
        :id="name" 
        :type="type" 
        :placeholder="placeholder" 
      />
    </div>
  </div>
</template>
