<script setup>

</script>
<template>
  <div class="wrapper">
    <BaseHeader/>
    <main class="main">
      <div class="container">
        <section class="error">
          <h1 class="error__title">
          404
          </h1>
          <div class="error__subtitle">
            Упс. Щось пішло не так
          </div>
          <NuxtLink to="/" class="error__link btn">На головну</NuxtLink>
        </section>
      </div>
    </main>
    <BaseFooter/>
  </div>
</template>