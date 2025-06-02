import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './images/logo.png';

function UserLayout() {
  const [menuActive, setMenuActive] = useState(false);

  const handleLinkClick = () => {
    setMenuActive(false); // Închide meniul la click pe link
  };

  return (
    <>
      <header className="navbar">
        <Link to="/user-dashboard" className="logo-link" onClick={handleLinkClick}>
          <img src={logo} alt="BloodChain Logo" className="logo-img" />
          <span className="logo-text">BloodChain</span>
        </Link>

        <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/user-dashboard/profile" className="nav-link" onClick={handleLinkClick}>My Profile</Link>
          <Link to="/user-dashboard/request-blood" className="nav-link" onClick={handleLinkClick}>Request Blood</Link>
          <Link to="/user-dashboard/schedule" className="nav-link" onClick={handleLinkClick}>Schedule Appointment</Link>
          <Link to="/user-dashboard/blood-reminder-and-reserve-user" className="nav-link" onClick={handleLinkClick}>Blood Reminder And Reserve</Link>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Log Out</Link>
        </nav>

        {/* Hamburger menu */}
        <div
          className="hamburger"
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') setMenuActive(!menuActive); }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default UserLayout;
