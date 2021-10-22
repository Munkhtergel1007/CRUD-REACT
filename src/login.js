import Input from "./Components/Input";
import Label from "./Components/Label";
import Button from "./Components/Button";
import Form from "./Components/Form";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      const loginUser = {
        email: email,
        password: password
      }
    fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginUser)
    })
    .then(res => res.json())
    .then(result => {
      alert(result.message)
    })
  }
  }

    return (
      <Form>
        
        <Label lab="Email" htmlFor="email" />
        <Input
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          id="email"
          value={email}
        />

        <Label lab="Password" htmlFor="password" />
        <Input
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
          type="password"
          value={password}
        />
        <Button val='Nevtreh' type='normal' bg="green" click={submitHandler}></Button>
      </Form>
    )
}

export default Login