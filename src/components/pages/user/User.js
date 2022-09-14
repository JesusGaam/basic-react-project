import React, { useContext } from "react";
import useUser from "@/hooks/useUser";

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
      <a to="/" style={{marginTop:"100px"}}>Go to home</a>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
          handleAddUser();
        }}
      >
        <div>
          <label htmlFor="firstName">Id: </label>
          <input
            id="id"
            type="text"
            onInput={(e) => updateUserData({ id: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            id="firstName"
            type="text"
            onInput={(e) => updateUserData({ firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name: </label>
          <input
            id="lastName"
            type="text"
            onInput={(e) => updateUserData({ lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            id="gender"
            type="text"
            onInput={(e) => updateUserData({ gender: e.target.value })}
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
