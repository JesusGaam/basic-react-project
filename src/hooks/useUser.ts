import { useContext, useState } from "react";
import UserContext from "@/context/users/UserContext";
import { User } from "@/interfaces";

const useUser = () => {
  const { state: userList, addUser, removeLastUser, clearUser } = useContext(UserContext);
  const [userData, setUserData] = useState<User>();

  const handleAddUser = () => {
    addUser!(userData!);
  };

  const handleRemoveLastUser = () => {
    removeLastUser!();
  };

  const handleClearUser = () => {
    clearUser!();
  };

  const updateUserData = (user: User) => {
    setUserData({ ...userData, ...user });
  };

  return {
    userList,
    userData,
    updateUserData,
    handleAddUser,
    handleRemoveLastUser,
    handleClearUser,
  };
};

export default useUser;
