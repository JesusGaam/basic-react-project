import React, { useReducer, useEffect } from "react";
import UtmsContext from "./UtmsContext";
import utmsReducer, { initialState, initializer } from "./UtmsReducer";
import { updateUtms } from "./UtmsActions";
import { ContextUTMState } from "@/interfaces";

export default function UTMState({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(utmsReducer, initialState, initializer);
  const stateValue: ContextUTMState = {
    state: state.state,
    updateUtms: updateUtms(dispatch, state),
  };

  useEffect(() => {
    localStorage.setItem("utms", JSON.stringify(state.state));
  }, [state]);

  return (
    <UtmsContext.Provider value={stateValue}>
      {children}
    </UtmsContext.Provider>
  );
};
