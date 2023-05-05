import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddDetails = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [fName, setFName] = useState('');
  const [mName, setMName] = useState('');
  const [nameOfExam, setNameOfExam] = useState('');
  const [semester, setSemester] = useState('');
  const [mark1, setMark1] = useState('');
  const [mark2, setMark2] = useState('');
  const [mark3, setMark3] = useState('');
  const [mark4, setMark4] = useState('');
  const [mark5, setMark5] = useState('');
  const [mark6, setMark6] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmitButton = (e) => {
    e.preventDefault();
    const data = {
      name,
      rollNo,
      department,
      dob: date,
      fName,
      mName,
      nameOfExam,
      semester,
      mark1,
      mark2,
      mark3,
      mark4,
      mark5,
      mark6,
    };
    console.log(data);

    const fetchData = async () => {
      const response = await fetch('/student', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      if (response.ok) {
        navigate('/TeacherMenu');
        setError('');
      } else {
        console.log(json);
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
    fetchData();
  };
  return (
    <div className="card-two-container">
      <Card className="m-5 p-5">
        <h1 className="header" style={{ marginBottom: 50 }}>
          Add Details
        </h1>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Name of examination"
          aria-label="Name of examination"
          value={nameOfExam}
          onChange={(e) => {
            setNameOfExam(e.target.value);
          }}
          required
        />
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Name"
          aria-label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Roll No"
          aria-label="Roll No"
          value={rollNo}
          onChange={(e) => {
            setRollNo(e.target.value);
          }}
          required
        />
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Department"
          aria-label="Department"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
          required
        />
        <Form.Control
          className="mb-2"
          placeholder="Date of birth"
          aria-label="Date of birth"
          type="Date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
        />
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="semester"
          aria-label="semester"
          value={semester}
          onChange={(e) => {
            setSemester(e.target.value);
          }}
          required
        />
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Father's Name"
          aria-label="Father's Name"
          value={fName}
          onChange={(e) => {
            setFName(e.target.value);
          }}
          required
        />
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Mother's Name"
          aria-label="Mother's Name"
          value={mName}
          onChange={(e) => {
            setMName(e.target.value);
          }}
          required
        />
        <h3>Enter the students Mark</h3>
        <table>
          <tr>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Mark 3</th>
            <th>Mark 4</th>
            <th>Mark 5</th>
            <th>Mark 6</th>
          </tr>
          <tr>
            <th>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Mark"
                aria-label="Mark"
                value={mark1}
                onChange={(e) => {
                  setMark1(e.target.value);
                }}
                required
              />
            </th>
            <th>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Mark"
                aria-label="Mark"
                value={mark2}
                onChange={(e) => {
                  setMark2(e.target.value);
                }}
                required
              />
            </th>
            <th>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Mark"
                aria-label="Mark"
                value={mark3}
                onChange={(e) => {
                  setMark3(e.target.value);
                }}
                required
              />
            </th>
            <th>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Mark"
                aria-label="Mark"
                value={mark4}
                onChange={(e) => {
                  setMark4(e.target.value);
                }}
                required
              />
            </th>
            <th>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Mark"
                aria-label="Mark"
                value={mark5}
                onChange={(e) => {
                  setMark5(e.target.value);
                }}
                required
              />
            </th>
            <th>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Mark"
                aria-label="Mark"
                value={mark6}
                onChange={(e) => {
                  setMark6(e.target.value);
                }}
                required
              />
            </th>
          </tr>
        </table>
        <Button variant="success" onClick={handleSubmitButton}>
          Submit
        </Button>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default AddDetails;
