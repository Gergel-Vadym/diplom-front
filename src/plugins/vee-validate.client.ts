import { Form, Field, ErrorMessage } from "vee-validate";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('vee-form', Form)
  nuxtApp.vueApp.component('vee-field', Field)
  nuxtApp.vueApp.component('vee-error-message', ErrorMessage)
})