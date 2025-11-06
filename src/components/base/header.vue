<script setup>
//imports
import { useModalStore } from "~/store/modal";

// variables
const modalStore = useModalStore();
const nav = ref([
  {
    name: "Медитації",
    link: "/meditation",
  },
  {
    name: "Аналітика",
    link: "/analytics",
  },
  {
    name: "Блог",
    link: "/blog",
  },
]);
const access_token = useCookie("access_token");
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" class="header__logo">
            <BaseIconSvg iconName="logo" width="50" height="50" />
        </NuxtLink>
        <div class="header__right">
          <nav class="header__nav">
            <ul class="header__ul">
              <li
                v-for="(item, index) in nav"
                :key="`header-nav-${index}`"
                class="header__li"
              >
                <NuxtLink :to="item.link" class="header__link">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="header__user-wrapper">
            <NuxtLink v-show="access_token" class="header__user" to="/profile">
              <BaseIconSvg iconName="user" width="24" height="24" customClass="header__user-icon header__user-icon--login"/>
            </NuxtLink> 
             <button v-show="!access_token" @click="modalStore.toggleModal('login')" class="header__user">
              <BaseIconSvg iconName="user" width="24" height="24" customClass="header__user-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
