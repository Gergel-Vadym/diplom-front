export default defineNuxtRouteMiddleware((to, from) => {
  const access_token = useCookie('access_token')

  if (to.path.includes('/profile') && !access_token.value) {
    return navigateTo('/login')
  }
  if (to.path.includes('/analytics') && !access_token.value) {
    return navigateTo('/login')
  }
})