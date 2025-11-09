<script setup>
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
const social = ref([
  {
    name: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "tik-tok",
    link: "https://www.tiktok.com/",
  },
]);
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
        <NuxtLink to="/" class="footer__logo">
          <BaseIconSvg
            iconName="logo-footer"
            width="50"
            height="50"
            customClass="footer__logo-icon"
          />
        </NuxtLink>
        <nav class="footer__nav">
          <ul class="footer__ul">
            <li
              v-for="(item, index) in nav"
              :key="`footer-nav-${index}`"
              class="footer__li"
            >
              <NuxtLink :to="item.link" class="footer__link">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <nav class="footer__nav--social">
          <ul class="footer__ul">
            <li
              v-for="(item, index) in social"
              :key="`footer-social-${index}`"
              class="footer__li"
            >
              <NuxtLink :to="item.link" class="footer__social" target="_blank">
                <BaseIconSvg
                  :iconName="item.name"
                  width="40"
                  height="40"
                  customClass="footer__social-icon"
                />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      <div class="footer__line"></div>
      <div class="footer__copyright">
        Copyright ® 2025 Гергель Вадим Всі права захищені
      </div>
    </div>
  </footer>
</template>
