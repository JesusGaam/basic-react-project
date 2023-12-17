import { cloneUTM, createUTM } from "@/adapters";
import { UPDATE_UTMS } from "@/constants";
import { UTM, ContextUTMState, UtmDispatch } from "@/interfaces";

/**
 * Este action recibe las UTMs ORGANICAS por defecto de una página
 */
export const updateUtms = (dispatch: UtmDispatch, state: ContextUTMState) =>
  (utms: UTM) => {
    let payload: UTM = cloneUTM(state.state)

    if (!state.state.leadType) {
      payload = createUTM(utms.urlSearchParams)
    }

    return dispatch({
      type: UPDATE_UTMS,
      payload,
    });
  };
