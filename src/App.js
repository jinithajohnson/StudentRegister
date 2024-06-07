import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import StudentSearch from './StudentSearch';
import DeleteStudent from './components/DeleteStudent';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent/>}/>
        <Route path='/Search' element={<StudentSearch/>}/>
        <Route path='/Delete' element={<DeleteStudent/>}/>
        <Route path='/View' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
