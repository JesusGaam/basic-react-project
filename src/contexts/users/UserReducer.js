import * as types from "../../constants/actionTypes";

export const initialState = {
  userList: [],
};

export default (state, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        ...action.payload,
      };

    case types.REMOVE_LAST_USER:
      return {
        ...state,
        ...action.payload,
      };

    case types.CLEAR_USER:
      return initialState;

    default:
      return state;
  }
};
