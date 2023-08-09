import React from 'react';

function NavigationBar({ cartValue }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <form className="d-flex">
        <button className="btn btn-outline-dark" href="#!" type="submit">
          <i className="bi bi-cart me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cartValue}
          </span>
        </button>
      </form>
    </nav>
  );
}

export default NavigationBar;
