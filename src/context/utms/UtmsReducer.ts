import { createUTM } from "@/adapters";
import { UPDATE_UTMS } from "@/constants";
import { ContextUTMState, UTM, UTMActions } from "@/interfaces";
import { getURLSearchParams } from "@/utils";

export const initialState: ContextUTMState = {
  state: {
    urlSearchParams: {},
  }
};

/**
 * Modelo de atribución por last click, la prioridad obedece a:
 *  1.- Las UTMs que vienen en la URL
 *  2.- Las UTMS en localStorage
 *  3.- Las UTMs por defecto (initialState)
 */
export const initializer = (initialState: ContextUTMState): ContextUTMState => {

  if (typeof window !== "undefined") {

    const urlSearchParams = getURLSearchParams();
    if (Object.keys(urlSearchParams).length) {
      return { state: createUTM(urlSearchParams) }
    }

    const currentUtms = window.localStorage.getItem("utms") || JSON.stringify(initialState.state);
    const state = JSON.parse(currentUtms) as UTM;
    return { state };
  }

  return initialState
};

export default (state: ContextUTMState, action: UTMActions) => {
  switch (action.type) {
    case UPDATE_UTMS:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};
