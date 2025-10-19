<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
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
});
</script>

<template>
  <div
    class="textarea"
  >
  <div class="textarea__label">
    {{ label }}
  </div>
    <textarea
      :name="name"
      :placeholder="placeholder"
    ></textarea>

  </div>
</template>
