declare global {
  interface Window {
    hbspt: any;
  }
}

export interface HsFormValues {
  name: string;
  value: any;
}
export type HsFormReady = ($form?: HTMLFormElement) => any;

export type HsFormSubmit = ($form?: HTMLFormElement, formValues?: HsFormValues[]) => any;