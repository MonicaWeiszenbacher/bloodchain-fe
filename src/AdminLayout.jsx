import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './images/logo.png';

function AdminLayout() {
  const [menuActive, setMenuActive] = useState(false);

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <>
      <header className="navbar">
        <Link to="/admin-dashboard" className="logo-link" onClick={handleLinkClick}>
          <img src={logo} alt="BloodChain Logo" className="logo-img" />
          <span className="logo-text">BloodChain Admin</span>
        </Link>

        <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/admin-dashboard/donation-history" className="nav-link" onClick={handleLinkClick}>Donation History</Link>
          <Link to="/admin-dashboard/blood-requests" className="nav-link" onClick={handleLinkClick}>Blood Requests</Link>
          <Link to="/admin-dashboard/schedule-admin" className="nav-link" onClick={handleLinkClick}>Schedule Appointments</Link>
          <Link to="/admin-dashboard/users" className="nav-link" onClick={handleLinkClick}>Users</Link>
          <Link to="/login" className="nav-link" onClick={handleLinkClick}>Log Out</Link>
        </nav>

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

export default AdminLayout;
