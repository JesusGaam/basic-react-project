import React, { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer, { initialState } from "./UserReducer";
import * as userActions from "./UserActions";

export default ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const actions = {};
  Object.keys(userActions).forEach((key) => {
    actions[key] = userActions[key](dispatch, state);
  });

  return (
    <UserContext.Provider value={{ state, ...actions }}>
      {children}
    </UserContext.Provider>
  );
};
