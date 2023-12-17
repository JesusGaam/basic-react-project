import {
  ADD_USER,
  REMOVE_LAST_USER,
  CLEAR_USER
} from "@/constants"
import { ContextUserState, UserActions } from "@/interfaces";

export const initialState: ContextUserState = {
  state: []
};

export default (state: ContextUserState, action: UserActions): ContextUserState => {
  const payload = action.payload || [];

  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        state: payload,
      };

    case REMOVE_LAST_USER:
      return {
        ...state,
        state: payload,
      };

    case CLEAR_USER:
      return {
        ...state,
        state: initialState.state
      };

    default:
      return state;
  }
};
