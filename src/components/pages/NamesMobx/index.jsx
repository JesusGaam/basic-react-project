import React from 'react';
import NameStore from '../../../stores/NameStore';

import NameCounter from '../../molecules/NameCounter';
import NameList from '../../molecules/NameList';
import NameForm from '../../organisms/NameForm';

const App = () => {
  return (
    <NameStore>
      <h1>Mis amigos</h1>
      <NameList />
      <NameCounter />
      <NameForm />
    </NameStore>
  );
}

export default App