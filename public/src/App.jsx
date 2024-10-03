import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import PersonalForm from './components/PersonalForm';
import ShowResult from './components/ShowResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form-Details" element={<PersonalForm/>} />
        <Route path="/result" element={<ShowResult />} />

        {/* <Route path="/personal" element={<PersonalForm/>}/> */}
      </Routes>

  </BrowserRouter>
  )
}

export default App
