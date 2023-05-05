import './App.css';
import Login from './component/Login';
import StudCheck from './component/StudCheck';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddDetails from './component/AddDetails';
import TeacherMenu from './component/TeacherMenu';
import StudMenu from './component/StudMenu';
import Error from './component/Error';
function App() {
  const teacher = localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudCheck />} />
          <Route path="/studMenu/:id" element={<StudMenu />} />
          <Route
            path="/addDetails"
            element={teacher ? <AddDetails /> : <Error />}
          />
          <Route
            path="/TeacherMenu"
            element={teacher ? <TeacherMenu /> : <Error />}
          />
          <Route path="/Teacher" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
