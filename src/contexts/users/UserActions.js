import * as types from "../../constants/actionTypes";

export const addUser =
  (dispatch, state) =>
  (user = {}) => {
    const userList = [...state.userList, user];

    return dispatch({
      type: types.ADD_USER,
      payload: { userList },
    });
  };

export const removeLastUser = (dispatch, state) => () => {
  const userList = state.userList.slice(0, -1);

  return dispatch({
    type: types.REMOVE_LAST_USER,
    payload: { userList },
  });
};

export const clearUser = (dispatch, state) => () => {
  return dispatch({
    type: types.CLEAR_USER,
  });
};
