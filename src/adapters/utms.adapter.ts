import { UTM, UrlSearchParams } from "@/interfaces";

export const cloneUTM = (utm: UTM): UTM => ({
  urlSearchParams: { ...utm.urlSearchParams },
  leadType: utm.leadType
});

export const createUTM = (urlSearchParams: UrlSearchParams) => {
  const leadType = getLeadType(urlSearchParams)
  return cloneUTM({ urlSearchParams, leadType });
}

export const getLeadType = (urlSearchParams: UrlSearchParams) =>
  urlSearchParams.gclid || urlSearchParams.fbclid ? "paid" : "organic";
