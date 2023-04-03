import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const StudMenu = () => {
  const [error, setError] = useState('');
  const [student, setStudent] = useState([]);
  const { id } = useParams();

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
    </div>
  );
};

export default StudMenu;
