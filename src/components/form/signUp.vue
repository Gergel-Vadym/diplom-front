<script setup>
//imports
import { useModalStore } from "~/store/modal";

// variables
const modalStore = useModalStore();
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  secondPassword: "",
});

const loader = ref(false);

function toogleLogin() {
  modalStore.toggleModal("signUp", false);
  setTimeout(() => {
    modalStore.toggleModal("login", true);
  }, 500);
}
</script>
<template>
  <WrapperLoader v-show="loader" v-model="loader" absolute />
  <vee-form class="form form--signUp">
    <div class="form__wrapper">
      <FieldsInput v-model="form.firstName" name="firstName" label="Імя" />
      <FieldsInput v-model="form.lastName" name="lastName" label="Прізвище" />
      <FieldsInput
        v-model="form.phone"
        mask="+380(##)-###-##-##"
        placeholder="+380"
        name="phone"
        label="Номер телефону"
      />
      <FieldsInput v-model="form.email" name="email" label="Email" />
      <FieldsPassword v-model="form.password" label="Пароль" />
      <FieldsPassword v-model="form.secondPassword" label="Повторіть пароль" />
    </div>

    <div class="form__info">
      <button class="btn">Зареєструватись</button>
      <div class="form__info-wrapper">
        вже маєте аккаунт
        <button @click="toogleLogin" type="button" class="form__btn">
          Увійти
        </button>
      </div>
    </div>
  </vee-form>
</template>