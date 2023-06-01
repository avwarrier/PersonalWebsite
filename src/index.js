import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Skills from './Skills'
import NavBar from './NavBar'
import './index.css';
import {useState} from 'react'
import Projects from "./Projects";
import Experience from "./Experience";
import About from "./About";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>}></Route>
        <Route path="/skills" element={<Skills darkMode={darkMode}/>}></Route>
        <Route path="/projects" element={<Projects darkMode={darkMode}/>}></Route>
        <Route path="/experience" element={<Experience darkMode={darkMode}/>}></Route>
        <Route path="/about" element={<About darkMode={darkMode}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);