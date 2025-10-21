<script setup>
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="profile__wrapper">
        <div class="profile__left">
          Особисті дані
          <button class="btn">
            <BaseIconSvg iconName="exit" width="24" height="24" />
            Вийти
          </button>
        </div>
        <div class="profile">
          <vee-form class="profile__form">
            <div class="profile__form-wrapper">
              <FieldsInput
                v-model="form.firstName"
                name="firstName"
                label="Імя"
              />
              <FieldsInput
                v-model="form.lastName"
                name="lastName"
                label="Прізвище"
              />
              <FieldsInput
                v-model="form.phone"
                mask="+380(##)-###-##-##"
                placeholder="+380"
                name="phone"
                label="Номер телефону"
              />
              <FieldsInput v-model="form.email" name="email" label="Email" />
            </div>
            <div class="profile__form-btns">
              <button type="button" class="btn profile__form-btn--mobile">
                <BaseIconSvg iconName="exit" width="24" height="24" />
                Вийти
              </button>
              <button class="btn btn--light">Зберегти</button>
            </div>
          </vee-form>
        </div>
      </div>
    </div>
  </main>
</template>
