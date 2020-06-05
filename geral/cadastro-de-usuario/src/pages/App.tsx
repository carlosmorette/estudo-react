import React from 'react';
import TextInput from '../components/TextInput';
import { makeStyles } from '@material-ui/core'



function App() {
  return (
    <div style={{alignItems: 'center'}}>
      <TextInput nameInput="Email" />
    </div>
  );
}

export default App;
