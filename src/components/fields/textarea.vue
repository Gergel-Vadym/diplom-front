<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  type: { type: String, default: "text" },
  name: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="textarea">
    <div class="textarea__label">
      {{ label }}
    </div>

    <textarea
      v-model="value"
      :name="name"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>