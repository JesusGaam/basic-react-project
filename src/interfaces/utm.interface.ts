export interface UrlSearchParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
  fbclid?: string;
  [key: string]: string | undefined;
}

export interface UTM {
  urlSearchParams: UrlSearchParams,
  leadType?: string,
}

export interface ContextUTMState {
  state: UTM,
  updateUtms?: updateUtmsAction,
}

export type updateUtmsAction = (utms: UTM) => void;

export interface UTMActions {
  type: string,
  payload: UTM
}

export type UtmDispatch = React.Dispatch<UTMActions>;

// export type UserReducer = (state: UTM, action: UserActions) => ContextUTMState | UTM;