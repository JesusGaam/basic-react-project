import { UrlSearchParams } from "@/interfaces";

export const getURLSearchParams = (): UrlSearchParams => {
  const params = new URLSearchParams(window.location.search)
  const utms: UrlSearchParams = {};
  params.forEach((value, key) => {
    utms[key] = value
  });

  return utms
}