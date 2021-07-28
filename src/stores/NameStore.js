import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import NameContext from '../contexts/NameContext'

const Store = ({ children }) => {
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
export default Store;