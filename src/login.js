import Input from "./Components/Input";
import Label from "./Components/Label";
import Button from "./Components/Button";
import Form from "./Components/Form";
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Redirect } from "react-router";
import Card from "./Components/Card";

const Login = ({ history }) => {
  useEffect(() => {
    if (localStorage.loggedUser) {
      history.push('/profile')
    }
  }, [])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
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
          swal(result.message);
          if (result.data) {
            localStorage.setItem('loggedUser', JSON.stringify(result.data))
            history.push('/profile')
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <Card>

      <Form submitHandler={submitHandler}>

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
        <Button val='Nevtreh' type='normal' bg="green"></Button>
      </Form>
    </Card>
  )
}

export default Login