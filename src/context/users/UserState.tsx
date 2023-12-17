import React, { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer, { initialState } from "./UserReducer";
import {
  addUser,
  removeLastUser,
  clearUser
} from "./UserActions";
import { ContextUserState } from "@/interfaces";

export default function UserState({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const stateValue: ContextUserState = {
    state: state.state,
    addUser: addUser(dispatch, state),
    removeLastUser: removeLastUser(dispatch, state),
    clearUser: clearUser(dispatch,),
  };

  return (
    <UserContext.Provider value={stateValue}>
      {children}
    </UserContext.Provider>
  );
};
