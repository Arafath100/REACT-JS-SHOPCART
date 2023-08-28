import React,{useState} from 'react';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import '../src/App.css';
import All from './GuviPages/All';
import DataScience from './GuviPages/DataScience';
import CyberSecurity from './GuviPages/CyberSecurity';
import Career from './GuviPages/Career';
import FullStack from './GuviPages/FSD';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

function App() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
     
      <div className="App">
      <Navigation/>
      <Header/>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {navbarExpanded ? 'Blog Category' : null}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/full-stack-development">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-science">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber-security">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">
                CAREER
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/full-stack-development' element={<FullStack />} />
        <Route path='/data-science' element={<DataScience />} />
        <Route path='/cyber-security' element={<CyberSecurity />} />
        <Route path='/career' element={<Career />} />
      </Routes>
    </div>
     
  );
}

export default App;
