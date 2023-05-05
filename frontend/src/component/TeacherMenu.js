import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useNavigation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const TeacherMenu = () => {
  const [student, setStudent] = useState([]);

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const teacher = localStorage.getItem('token');
  console.log(teacher);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/student', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${teacher}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setStudent(json);
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
  const handleLogOutButton = () => {
    localStorage.removeItem('token');
    navigate('/Teacher');
  };
  const handleDataButton = () => {
    navigate('/addDetails');
  };
  return (
    <div className="card-two-container">
      <Button
        className="mb-2"
        variant="dark"
        style={{ marginLeft: '75%' }}
        onClick={handleLogOutButton}
      >
        Log out
      </Button>
      <Button
        variant="primary"
        style={{ marginLeft: '75%' }}
        onClick={handleDataButton}
      >
        Add Data
      </Button>
      <h1>Students List</h1>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">SI No</th>
            <th scope="col">Name</th>
            <th scope="col">Roll No</th>
            <th scope="col">Department</th>
            <th scope="col">DOB</th>
            <th scope="col">Semester</th>
            <th scope="col">Father's Name</th>
            <th scope="col">Mother's Name</th>
            <th scope="col">Mark 1</th>
            <th scope="col">Mark 2</th>
            <th scope="col">Mark 3</th>
            <th scope="col">Mark 4</th>
            <th scope="col">Mark 5</th>
            <th scope="col">Mark 6</th>
            <th scope="col"></th>
          </tr>
        </thead>

        {student &&
          student.map((value, i) => {
            return (
              <tbody key={i}>
                <tr style={{ verticalAlign: 'middle' }}>
                  <th scope="row">{i + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.rollNo}</td>
                  <td>{value.department}</td>
                  <td>{value.dob}</td>
                  <td>{value.semester}</td>
                  <td>{value.fName}</td>
                  <td>{value.mName}</td>
                  <td>{value.mark1}</td>
                  <td>{value.mark2}</td>
                  <td>{value.mark3}</td>
                  <td>{value.mark4}</td>
                  <td>{value.mark5}</td>
                  <td>{value.mark6}</td>
                  <td>
                    <Button
                      variant="danger"
                      style={{ marginLeft: '75%' }}
                      onClick={async () => {
                        const response = await fetch(`/student/${value._id}`, {
                          method: 'DELETE',
                          headers: {
                            Authorization: `Bearer ${teacher}`,
                          },
                        });
                        const json = await response.json();
                        if (response.ok) {
                          console.log(json);
                        } else {
                          setError(`Error: ${json.error}`);
                        }
                      }}
                    >
                      dlt
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <ToastContainer />
    </div>
  );
};

export default TeacherMenu;
