<script setup>
//imports
import { useModalStore } from "~/store/modal";

// variables
const modalStore = useModalStore();
const form = ref({
  name: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
  password_confirmation: "",
});

const loader = ref(false);

const access_token = useCookie("access_token", { maxAge: 60 * 60 * 24 * 30 });

function toogleLogin() {
  modalStore.toggleModal("signUp", false);
  setTimeout(() => {
    modalStore.toggleModal("login", true);
  }, 500);
}

//API

const onSubmit = async (val, action) => {
  try {
    loader.value = true;
    const data = await $fetch("/register", {
      ...defaultOptions(),
      method: "POST",
      body: form.value,
    });
    modalStore.toggleModal("signUp", false);
    access_token.value = data.token;
    customToast("Ви успішно зареєструвались", "success");
  } catch (error) {
    console.error(error);
    action.setErrors(error.data.errors);
  } finally {
    loader.value = false;
  }
};
</script>
<template>
  <WrapperLoader v-show="loader" v-model="loader" absolute />
  <ClientOnly>
    <vee-form @submit="onSubmit" class="form form--signUp">
      <div class="form__wrapper">
        <FieldsInput v-model="form.name" name="name" label="Імя" />
        <FieldsInput v-model="form.lastname" name="lastname" label="Прізвище" />
        <FieldsInput
          v-model="form.phone"
          mask="+380(##)-###-##-##"
          placeholder="+380"
          name="phone"
          label="Номер телефону"
        />
        <FieldsInput v-model="form.email" name="email" label="Email" />
        <FieldsPassword
          v-model="form.password"
          name="password"
          label="Пароль"
        />
        <FieldsPassword
          v-model="form.password_confirmation"
          name="password_confirmation"
          label="Повторіть пароль"
        />
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
  </ClientOnly>
</template>