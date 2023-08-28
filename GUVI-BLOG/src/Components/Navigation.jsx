import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import GuviBlogLogo from '../assets/GuviBlogLogo.png'

export default function Navigation() {

    return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img width="121" height="53" src={GuviBlogLogo} alt="Guvi-blog-logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item me-3">
          <Link className="nav-link active" aria-current="page" href="#!">COURSES</Link>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LIVE CLASSES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="https://www.guvi.in/zen-class/full-stack-development-course/">Full Stack Development Program(FSD)</Link></li>
            <li><Link className="dropdown-item" href="https://www.guvi.in/zen-class/data-science-course/">IIT-M Advanced Programming & Data Science Program</Link></li>
            <li><Link className="dropdown-item" href="https://www.guvi.in/zen-class/automation-testing-course/">Automation & Testing Program</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRACTICE
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="https://www.guvi.in/code-kata/">Codekata</Link></li>
            <li><Link className="dropdown-item" href="https://www.guvi.in/webkata/">Webkata</Link></li>
            <li><Link className="dropdown-item" href="https://www.guvi.in/ide/">IDE - Online Compiler</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           RESOURCES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="https://www.guvi.in/rewards/">REWARDS</Link></li>
            <li><Link className="dropdown-item" href="https://www.guvi.in/referral/5/ai-for-india-2-0">REFERRAL</Link></li>
            <li><Link className="dropdown-item" href="https://forum.guvi.in/500">FORUM SUPPORT</Link></li>
            <li><Link className="dropdown-item" href="https://www.guvi.in/blog/?_gl=1*uxcd1k*_gcl_au*MTc0MTg4MDk3NS4xNjg4ODk1MjQ0">BLOGS</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR PRODUCTS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="https://www.hackerkid.org/">Hackerkid</Link></li>
            <li><Link className="dropdown-item" href="https://www.guvi.in/mlp/GUVI-for-corporates">GUVI for Corporates</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}