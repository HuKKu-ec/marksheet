import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StudCheck = () => {
  const navigate = useNavigate();
  const [rollNo, setRollNo] = useState('');
  const [dob, setDob] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    const data = { rollNo, dob };
    const response = await fetch('/student/check', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    if (response.ok) {
      navigate('studMenu/' + json._id);
      setError('');
    } else {
      setError(`Error: ${json.error}`);
      toast(`Error: ${json.error}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <div className="card-container">
      {' '}
      <h1 className="header">Check your result</h1>
      <Card border="dark " className="mt-3 p-4">
        <Form.Control
          className="mb-2"
          type="Roll No"
          placeholder="Roll No"
          aria-label="Roll No"
          value={rollNo}
          onChange={(e) => {
            setRollNo(e.target.value);
          }}
        />
        <Form.Control
          className="mb-2"
          placeholder="DOB"
          aria-label="Date"
          type="Date"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />

        <Button variant="success" onClick={handleSubmitButton}>
          Submit
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
      <ToastContainer />
    </div>
  );
};

export default StudCheck;
