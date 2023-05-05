import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLoginButton = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const fetchData = async () => {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      if (response.ok) {
        localStorage.setItem('token', json.token);
        navigate('/TeacherMenu');
        setError('');
      } else {
        console.log(json);
        setError(`Error: ${json.error}`);
      }
    };
    fetchData();
  };
  return (
    <div className="card-container">
      {' '}
      <h1 className="header">Teacher Log In</h1>
      <Card border="dark " className="mt-3 p-4">
        <Form.Control
          className="mb-2"
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Control
          className="mb-2"
          placeholder="Password"
          aria-label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="success" onClick={handleLoginButton}>
          Login
        </Button>
      </Card>
      {success ? (
        <Card
          border="success p-3 mt-4 font-weight-bold"
          className="text-success"
        >
          {success}
        </Card>
      ) : (
        <div></div>
      )}
      {error ? (
        <Card border="danger p-3 mt-4 font-weight-bold" className="text-danger">
          {error}
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Login;
