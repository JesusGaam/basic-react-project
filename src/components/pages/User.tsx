import React from "react";
import useUser from "@/hooks/useUser"
import { NavLink } from "react-router-dom";
import Navigation from "../organisms/navigation";

const User = () => {
  const {
    userList,
    updateUserData,
    handleAddUser,
    handleRemoveLastUser,
    handleClearUser,
  } = useUser();

  return (
    <>
      <Navigation />
      <NavLink to="/" style={{ marginTop: "100px" }}>Go to home</NavLink>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          (e.target as HTMLFormElement).reset();
          handleAddUser();
        }}
      >
        <div>
          <label htmlFor="firstName">Id: </label>
          <input
            id="id"
            type="text"
            onInput={(e: React.FormEvent<HTMLInputElement>) => updateUserData({ id: (e.target as HTMLInputElement).value })}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            id="firstName"
            type="text"
            onInput={(e: React.FormEvent<HTMLInputElement>) => updateUserData({ firstName: (e.target as HTMLInputElement).value })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name: </label>
          <input
            id="lastName"
            type="text"
            onInput={(e: React.FormEvent<HTMLInputElement>) => updateUserData({ lastName: (e.target as HTMLInputElement).value })}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            id="gender"
            type="text"
            onInput={(e: React.FormEvent<HTMLInputElement>) => updateUserData({ gender: (e.target as HTMLInputElement).value })}
          />
        </div>
        <div>
          <input type="submit" value={"Agregar usuario"} />
        </div>
      </form>
      <h3>List of users</h3>
      <ul>
        {userList.map((user, i) => (
          <li key={i}>
            Full name: {`${user.firstName} ${user.lastName} `}
            <br />
            Gender: {user.gender}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handleRemoveLastUser()}>Remove last</button>
        <button onClick={() => handleClearUser()}>Clear list</button>
      </div>
    </>
  );
};
export default User;
