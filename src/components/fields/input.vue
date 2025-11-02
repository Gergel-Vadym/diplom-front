<script setup>
import { vMaska } from "maska";
import { useField } from "vee-validate";

const emit = defineEmits(["input:focus", "update:modelValue"]);

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
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
    default: "",
  },
  classInp: {
    type: String,
    default: "",
  },
  mask: {
    type: String,
    default: "",
  },
  label:{
    type:String,
    default:"",
  }
});
const name = toRef(props, "name");
let optionsMask = ref({
  mask: props.mask,
});

function handleFocus(e) {
  props.mask && !props.modelValue
    ? (e.target.value = props.mask.replace(/[^+0-9]/gm, ""))
    : false;
  emit("input:focus");
}
function handleInput(e) {
  emit("update:modelValue", e.target.value);
}
const {
  value: inputValue,
  errorMessage,
  // handleBlur,
  errors,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});

watch(inputValue, (val) => {
  emit("update:modelValue", val);
});
</script>

<template>
  <div
    class="input"
    :class="{ className, 'has-error': !meta.valid && errorMessage }"
  >
    <label
      v-if="label"
      :for="name"
      class="label"
      >{{ label }}</label
    >
    <div class="input__wrapper">
      <input
        v-model="inputValue"
        :name="name"
        :id="name"
        :type="type"
        :placeholder="placeholder"
        v-maska:[optionsMask]
        :class="classInp"
        @input="handleInput"
        @focus="handleFocus"
      />
    </div>
    <div v-if="errorMessage" class="errors">
      <p>
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>