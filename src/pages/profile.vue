<script setup>
//global variables
const access_token = useCookie("access_token");

//api
const { data: profileInfo } = await useAsyncData("profile-info", () =>
  $fetch("/my/profile", { ...defaultOptions() })
);

console.log(profileInfo.value);

//variables
const form = ref({
  name: profileInfo?.value?.data?.name || "",
  lastname: profileInfo?.value?.data?.lastname || "",
  email: profileInfo?.value?.data?.email || "",
  phone: profileInfo?.value?.data?.phone || "",
});
const loader = ref(false);

//metods

async function logout() {
  try {
    const data = await $fetch("/logout", {
      ...defaultOptions(),
      method: "POST",
    });

    access_token.value = null;
    navigateTo({ path: "/" }, { redirectCode: 301 });
  } catch (error) {
    console.error(error);
    action.setErrors(error.data.errors);
  } finally {
  }
}

const onSubmit = async (val, action) => {
  try {
    loader.value = true;
    const data = await $fetch("/my/profile", {
      ...defaultOptions(),
      method: "POST",
      body: form.value,
    });
    customToast("Дані успішно оновлено", "success");
  } catch (error) {
    console.error(error);
    action.setErrors(error.data.errors);
  } finally {
    loader.value = false;
  }
};
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="profile__wrapper">
        <div class="profile__left">
          Особисті дані
          <button @click="logout" class="btn">
            <BaseIconSvg iconName="exit" width="24" height="24" />
            Вийти
          </button>
        </div>
        <div class="profile">
          <WrapperLoader v-model="loader">
            <ClientOnly>
              <vee-form @submit="onSubmit" class="profile__form">
                <div class="profile__form-wrapper">
                  <FieldsInput v-model="form.name" name="name" label="Імя" />
                  <FieldsInput
                    v-model="form.lastname"
                    name="lastname"
                    label="Прізвище"
                  />
                  <FieldsInput
                    v-model="form.phone"
                    mask="+380(##)-###-##-##"
                    placeholder="+380"
                    name="phone"
                    label="Номер телефону"
                  />
                  <FieldsInput
                    v-model="form.email"
                    name="email"
                    label="Email"
                  />
                </div>
                <div class="profile__form-btns">
                  <button
                    @click="logout"
                    type="button"
                    class="btn profile__form-btn--mobile"
                  >
                    <BaseIconSvg iconName="exit" width="24" height="24" />
                    Вийти
                  </button>
                  <button class="btn btn--light">Зберегти</button>
                </div>
              </vee-form>
            </ClientOnly>
          </WrapperLoader>
        </div>
      </div>
    </div>
  </main>
</template>
