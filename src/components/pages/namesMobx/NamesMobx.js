import React from 'react';
import NameStore from '../../../stores/NameStore';

import NameList from '@/components/molecules/nameList/NameList';
import NameCounter from '@/components/molecules/nameCounter/NameCounter';
import NameForm from '@/components/organisms/nameForm/NameForm';


const App = () => {
  return (
    <NameStore>
      <h1>Mis amigs</h1>
      <NameList />
      <NameCounter />
      <NameForm />
    </NameStore>
  );
}

export default App