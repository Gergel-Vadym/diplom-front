export const useModalStore = defineStore("modal", () => {
  const modals = reactive({
    login: false,
    signUp: false,
  });

  const animationTime = 500;

  let timeoutId: ReturnType<typeof setTimeout>;

  /**
   * debouncedModalHide
   *
   * @description A debounced function that hides the modal after animation time
   * @returns {void}
   */
  const debouncedModalHide = () => {
    timeoutId = setTimeout(() => {
      scrollBody(false);
    }, animationTime);
  };

  /**
   * toggleScroll
   *
   * @description Function to toggle the modal, handles animation and body scroll
   * @param {boolean} val - true to show modal, false to hide
   */
  function toggleScroll(val: boolean) {
    if (!val) {
      debouncedModalHide();
    } else {
      clearTimeout(timeoutId);
      scrollBody(true);
    }
  }

  function toggleModal(name: keyof typeof modals, value: boolean = true) {
    modals[name] = value;
    toggleScroll(value);
  }

  return {
    modals,
    toggleModal,
    toggleScroll
  };
});