import { User } from "@/interfaces";

const ROOT_PATH = `${process.env.BACKEND_ENDPOINT}users/`;

export const getUsers = () => ({
  path: `${ROOT_PATH}`,
  method: "GET",
});

export const updateUsers = (user: User) => ({
  path: `${ROOT_PATH + user.id}`,
  method: "PUT",
  body: JSON.stringify(user),
});