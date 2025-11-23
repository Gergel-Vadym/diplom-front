<script setup>
//imports
import { useModalStore } from "~/store/modal";

// variables
const modalStore = useModalStore();
</script>
<template>
  <div class="wrapper">
    <BaseHeader />
    <NuxtPage />
    <LazyBaseFooter />
  </div>
  <LazyModalWrapper
    v-model="modalStore.modals.login"
    @update:model-value="(val) => modalStore.toggleModal('login', val)"
  >
    <template #title>
      <h2 class="modal__title">Вхід</h2>
    </template>
    <template #body>
      <LazyModalContentLogin />
    </template>
  </LazyModalWrapper>
  <LazyModalWrapper
    v-model="modalStore.modals.signUp"
    @update:model-value="(val) => modalStore.toggleModal('signUp', val)"
  >
    <template #title>
      <h2 class="modal__title">Реєстрація</h2>
    </template>
    <template #body>
      <LazyModalContentSignUp />
    </template>
  </LazyModalWrapper>
</template>