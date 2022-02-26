
import React from "react";
import { useLocalObservable, observer } from "mobx-react-lite";

const NameContext = React.createContext();

const NameStore = ({ children }) => {
  const store = useLocalObservable(() => ({
    names: ["Joselito"],
    addName: name => {
      store.names.push(name);
    },
    get nameCount() {
      return store.names.length;
    }
  }));

  return (
    <NameContext.Provider value={store}>{children}</NameContext.Provider>
  );
};


const NameCounter = observer(() => {
  const store = React.useContext(NameContext);
  return (<p>Tengo {store.nameCount} amigo(s)</p>)
});

const NameList = observer(() => {
  const store = React.useContext(NameContext);

  return (<ul>
    {store.names.map((name, id) => (
      <li key={id}>{name}</li>
    ))}
  </ul>)
});

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

export default function App() {
  return (
    <NameStore>
        <h1>Mis amigos</h1>
        <NameList />
        <NameCounter />
        <NameForm />
    </NameStore>
  );
}
