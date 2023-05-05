import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StudMenu = () => {
  const [error, setError] = useState('');
  const [student, setStudent] = useState([]);
  const { id } = useParams();
  const teacher = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/student/one/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      if (response.ok) {
        setStudent([json]);
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
    fetchData();
  }, []);

  return (
    <div className="card-two-container">
      {console.log(student)}
      <h1>YOUR RESULT</h1>
      {student &&
        student.map((value, i) => {
          return (
            <Card key={i} className="m-5 p-5">
              <table border={2}>
                <tr>
                  <th>Name: {value.name}</th>
                  <th>Roll No: {value.rollNo}</th>
                </tr>
                <tr>
                  <th>Department: {value.department}</th>
                  <th>DOB: {value.dob}</th>
                </tr>
                <tr>
                  <th>Father's Name: {value.fName}</th>
                  <th>Mother's Name: {value.mName}</th>
                </tr>
                <tr>
                  <td>Mark 1</td>
                  <td>{value.mark1}</td>
                </tr>
                <tr>
                  <td>Mark 2</td>
                  <td>{value.mark2}</td>
                </tr>
                <tr>
                  <td>Mark 3</td>
                  <td>{value.mark3}</td>
                </tr>
                <tr>
                  <td>Mark 4</td>
                  <td>{value.mark4}</td>
                </tr>
                <tr>
                  <td>Mark 5</td>
                  <td>{value.mark5}</td>
                </tr>
                <tr>
                  <td>Mark 6</td>
                  <td>{value.mark6}</td>
                </tr>
              </table>
              <Button variant="success">Print</Button>
            </Card>
          );
        })}
      <ToastContainer />
    </div>
  );
};

export default StudMenu;
