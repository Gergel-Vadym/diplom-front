/**
 * Returns an object containing reactive variables for window width and various device types.
 *
 * @return {object} An object containing windowWidth, isMobile, isTablet, isDesktopHD, and isDesktopFHD.
 */
export function useWindowWidth() {
  const windowWidth = ref(0);
  const isMobile = ref(false);
  const isTablet = ref(false);
  const isDesktopHD = ref(false);
  const isDesktopFHD = ref(false);

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
    isMobile.value = window.innerWidth >= 360 && window.innerWidth < 768;
    isTablet.value = window.innerWidth >= 768 && window.innerWidth < 1024;
    isDesktopHD.value = window.innerWidth >= 1024 && window.innerWidth < 1920;
    isDesktopFHD.value = window.innerWidth >= 1920;
  };

  onMounted(() => {
    if (process.client) {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("resize", updateWidth);
    }
  });

  return { windowWidth, isMobile, isTablet, isDesktopHD, isDesktopFHD };
}