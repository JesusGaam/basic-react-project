import React from 'react';
import { observer } from 'mobx-react-lite';
import NameContext from '../../contexts/NameContext'

const NameList = observer(() => {
  const store = React.useContext(NameContext);

  return (<ul>
    {store.names.map(name => (
      <li key={name}>{name}</li>
    ))}
  </ul>)
});
export default NameList