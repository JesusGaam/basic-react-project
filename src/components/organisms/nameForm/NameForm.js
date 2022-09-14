import React from "react";
import NameContext from '@/contexts/NameContext'

const NameForm = () => {
  const store = React.useContext(NameContext);
  const [name, setName] = React.useState("");

  return (
    <form
      onSubmit={e => {
        store.addName(name);
        setName("");
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button type="submit">Agregar amigo</button>
    </form>
  );
};
export default NameForm;