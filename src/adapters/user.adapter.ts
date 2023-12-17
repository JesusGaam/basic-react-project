import { UserBackend } from "../interfaces";

export const createUser = (user: UserBackend) => ({
  id: user.ID,
  firstName: user.FIRST_NAME,
  lastdName: user.LAST_NAME,
  gender: user.GENDER,
});
