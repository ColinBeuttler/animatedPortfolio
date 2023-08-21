import logo from './logo.svg';
import React  from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/HomePage';
import CodePage from './Components/PanelPages/CodePage';
import ProjectPage from './Components/PanelPages/ProjectPage';

function App() {
  return (
    <div className="App">

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="code" element={<CodePage />} />
          <Route exact path="projects" element={<ProjectPage />} />

        </Routes>

    </div>
  );
}

export default App;
