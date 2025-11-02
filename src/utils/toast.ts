import { h } from "vue";
import { toast } from "vue3-toastify";
import type { ToastOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { success } from "./icons.jsx";

type ToastType = "info" | "success" | "warn" | "error" | "default";

export const customToast = (message: string, type: ToastType = "default") => {
  const options: ToastOptions = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    hideProgressBar: true,
    transition: toast.TRANSITIONS.SLIDE,
    theme: "light",
    icon: ({ theme, type }: { theme: string; type: string }) =>
      h(success, { theme, type })
  };

  if (type in toast) {
    (toast as any)[type](message, options);
  } else {
    toast(message, options);
  }
};