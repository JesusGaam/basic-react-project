export interface User {
  id?: string,
  firstName?: string,
  lastName?: string,
  gender?: string,
}
export interface UserBackend {
  ID?: string,
  FIRST_NAME?: string,
  LAST_NAME?: string,
  GENDER?: string,
}
export type UserList = User[];

export interface ContextUserState {
  state: UserList,
  addUser?: AddUserAction,
  removeLastUser?: RemoveLastUserAction,
  clearUser?: ClearUserAction,
}

export type AddUserAction = (user: User) => void;
export type RemoveLastUserAction = () => void;
export type ClearUserAction = () => void;

export interface UserActions {
  type: string,
  payload?: UserList
}

export type UserDispatch = React.Dispatch<UserActions>;

export type UserReducer = (state: UserList, action: UserActions) => ContextUserState | UserList;