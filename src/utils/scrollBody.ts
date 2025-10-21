export function scrollBody(val: boolean) {
  const htmlStyle = document.documentElement.style,
    scrollWindow = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
  if (val) {
    htmlStyle.overflow = "hidden";
    htmlStyle.paddingRight = scrollWindow;
  } else {
    htmlStyle.overflow = "auto";
    htmlStyle.paddingRight = "0px";
  }
}