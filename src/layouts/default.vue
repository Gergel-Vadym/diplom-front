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
    <BaseFooter />
  </div>
  <ModalWrapper
    v-model="modalStore.modals.login"
    @update:model-value="(val) => modalStore.toggleModal('login', val)"
  >
      <template #title>
      <div class="modal__title">Вхід</div>
    </template>
    <template #body>
      <ModalContentLogin />
    </template>
  </ModalWrapper>
  <ModalWrapper
    v-model="modalStore.modals.signUp"
    @update:model-value="(val) => modalStore.toggleModal('signUp', val)"
  >
        <template #title>
      <div class="modal__title">Реєстрація</div>
    </template>
    <template #body>
    <ModalContentSignUp />
    </template>

  </ModalWrapper>
</template>