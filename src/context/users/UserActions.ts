import { ADD_USER, REMOVE_LAST_USER, CLEAR_USER } from "@/constants";
import { User, UserDispatch, ContextUserState } from "@/interfaces";

export const addUser = (dispatch: UserDispatch, state: ContextUserState) =>
  (user: User) => {

    return dispatch({
      type: ADD_USER,
      payload: [...state.state, { ...user }]
    });
  };

export const removeLastUser = (dispatch: UserDispatch, state: ContextUserState) =>
  () => {
    const userList = state.state.slice(0, -1);

    return dispatch({
      type: REMOVE_LAST_USER,
      payload: userList,
    });
  };

export const clearUser = (dispatch: UserDispatch) =>
  () => {
    return dispatch({
      type: CLEAR_USER,
    });
  };
