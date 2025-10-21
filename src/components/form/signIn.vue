<script setup>

//imports
import { useModalStore } from "~/store/modal";

// variables
const modalStore = useModalStore();
const form = ref({
  email: "",
  password: "",
});

function toogleSignUp() {
  modalStore.toggleModal("login", false);
  setTimeout(() => {
    modalStore.toggleModal("signUp", true);
  }, 500);
}
</script>
<template>
  <vee-form class="form form--signIn">
    <div class="form__wrapper">
      <FieldsInput v-model="form.email" name="email" label="Email" />
      <FieldsPassword v-model="form.password" label="Пароль" />
    </div>
    <div class="form__info">
      <button class="btn">Увійти</button>
      <div class="form__info-wrapper">
        <button @click="toogleSignUp" type="button" class="form__btn">Зареєструватись</button>
      </div>
    </div>
  </vee-form>
</template>