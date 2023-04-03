import './App.css';
import Login from './component/Login';
import StudCheck from './component/StudCheck';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddDetails from './component/AddDetails';
import TeacherMenu from './component/TeacherMenu';
import StudMenu from './component/StudMenu';
import Error from './component/Error';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudCheck />} />
          <Route path="/studMenu/:id" element={<StudMenu />} />
          <Route path="/addDetails" element={<AddDetails />} />
          <Route path="/TeacherMenu" element={<TeacherMenu />} />
          <Route path="/Teacher" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
