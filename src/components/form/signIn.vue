<script setup>
//imports
import { useModalStore } from "~/store/modal";

// variables
const route = useRoute();
const modalStore = useModalStore();
const form = ref({
  email: "",
  password: "",
});
const loader = ref(false);
const access_token = useCookie("access_token", { maxAge: 60 * 60 * 24 * 30 });

function toogleSignUp() {
  modalStore.toggleModal("login", false);
  setTimeout(() => {
    modalStore.toggleModal("signUp", true);
  }, 500);
}
//API

const onSubmit = async (val, action) => {
  try {
    loader.value = true;
    const data = await $fetch("/login", {
      ...defaultOptions(),
      method: "POST",
      body: form.value,
    });
    modalStore.toggleModal("login", false);
    access_token.value = data.token;
    if (route.path === "/login") {
      navigateTo({ path: "/profile" }, { redirectCode: 301 });
    }
    if (route.path !== "/login") {
    customToast("Ви успішно увійшли у свій акаунт", "success");
    }
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
    <vee-form @submit="onSubmit" class="form form--signIn">
      <div class="form__wrapper">
        <FieldsInput v-model="form.email" name="email" label="Email" />
        <FieldsPassword
          v-model="form.password"
          name="password"
          label="Пароль"
        />
      </div>
      <div class="form__info">
        <button class="btn">Увійти</button>
        <div class="form__info-wrapper">
          <button @click="toogleSignUp" type="button" class="form__btn">
            Зареєструватись
          </button>
        </div>
      </div>
    </vee-form>
  </ClientOnly>
</template>