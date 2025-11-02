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
const inputType = ref("password");
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

function toggleInputType() {
  inputType.value = inputType.value === "password" ? "text" : "password";
}
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
        :name="name"
        :id="name"
        :type="inputType"
        :placeholder="placeholder"
        :value="modelValue"
        v-maska:[optionsMask]
        :class="classInp"
        @input="handleInput"
        @focus="handleFocus"
      />
        <div
          class="input__icon"
          @click="toggleInputType"
        >
          <BaseIconSvg
            v-show="inputType === 'password'"
            icon-name="eye"
            width="24"
            height="24"
          />
          <BaseIconSvg
            v-show="inputType === 'text'"
            icon-name="eye-close"
            width="24"
            height="24"
          />
        </div>
    </div>
    <div v-if="errorMessage" class="errors">
      <p>
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>