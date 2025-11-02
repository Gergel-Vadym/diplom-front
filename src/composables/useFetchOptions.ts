import type { UseFetchOptions } from "#app";

type ErrObjType = {
  status: number;
  message: string;
  errors: {
    [key: string]: string;
  };
};

type T = {};

export function defaultOptions() {
  const config = useRuntimeConfig();
  const access_token = useCookie("access_token", { maxAge: 60 * 60 * 24 * 30 });
  const rawHeaders = useRequestHeaders();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.API_BASE_URL || "",
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      Authorization: `Bearer ${access_token.value || ""}`,
      "X-Forwarded-For": rawHeaders["x-forwarded-for"],
      "X-Real-Ip": rawHeaders["x-real-ip"],
      sHost: "Breez",
    },

    onResponseError({ request, response, options }) {
      if (response.status == 422) {
        let errObj: ErrObjType = {
          status: response.status,
          message: response._data.message,
          errors: {},
        };
        for (const key in response._data.errors) {
          if (response._data.errors.hasOwnProperty(key)) {
            errObj.errors[key] = response._data.errors[key][0];
          }
        }
        return errObj;
      }

      if (response.status == 401) {
        access_token.value = null;
        navigateTo({ path: "/login" }, { redirectCode: 301 });
        return response._data;
      }
    },
  };

  return defaults;
}
