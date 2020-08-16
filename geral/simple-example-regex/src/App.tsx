import React, { useState } from 'react';

function App() {
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const loginUser = (event?: Event) => {
    event?.preventDefault()
    
    const regex = /\w{6,20}[@!$&]?/g

    const validatePassword = password.match(regex)
    console.log(validatePassword)
    
  }
  
  return (
    <div className="App">
      <input type="email" placeholder="email..." value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="senha..." value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => loginUser()} >Login</button>
    </div>
  );
}
  
  export default App;