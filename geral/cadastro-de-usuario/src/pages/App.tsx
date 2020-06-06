import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import TextInput from '../components/TextInput'
import { SimpleUser } from '../constants/User';
import { Button } from '@material-ui/core'



function App() {

  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  let box = {name, surname, email, password}

  const sendData = () => {
    fetch('http://localhost:3030/data', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({name: "asdsad"}) })
      .then(data => console.log(data.bodyUsed))
      .catch(error => console.log(error))
  }


  return (
    <div style={{alignItems: 'center'}}>
      <Form title="Cadastro de Usuário">
        <TextInput nameInput="Name" value={name} onChange={event => setName(event.target.value)} />
        <TextInput nameInput="Surname" value={surname} onChange={event => setSurname(event.target.value)} />
        <TextInput nameInput="Email" value={email} onChange={event => setEmail(event.target.value)} />
        <TextInput nameInput="Password" value={password} onChange={event => setPassword(event.target.value)} />
        <Button style={{ fontFamily: 'Quattrocento Sans', marginTop: 15 }} onClick={() => sendData()} >Cadastrar</Button>
      </Form>
    </div>
  );
}

export default App;
