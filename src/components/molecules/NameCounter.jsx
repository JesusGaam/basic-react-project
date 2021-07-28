import React from "react";
import NameContext from '../../contexts/NameContext'
import { observer } from "mobx-react-lite";

const NameCounter = observer(() => {
  const store = React.useContext(NameContext);
  return (<p>Tengo {store.nameCount} amigo(s)</p>)
});
export default NameCounter;