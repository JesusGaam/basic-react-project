export const createUser = (user = {}) => ({
  id: user.ID,
  firstName: user.FIRST_NAME,
  lastdName: user.LAST_NAME,
  gender: user.GENDER,
});
