import { useContext, useState } from "react";
import UserContext from "@/contexts/users/UserContext";

const useUser = () => {
  const { state, addUser, removeLastUser, clearUser } = useContext(UserContext);
  const { userList } = state;
  const [userData, setUserData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
  });

  const handleAddUser = (e) => {
    addUser(userData);
  };

  const handleRemoveLastUser = () => {
    removeLastUser();
  };

  const handleClearUser = () => {
    clearUser();
  };

  const updateUserData = (data) => {
    setUserData({ ...userData, ...data });
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
