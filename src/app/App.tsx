import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import InfoDonateBlood from '@/app/pages/admin/InfoDonateBlood';
import InfoNeedBlood from '@/app/pages/admin/InfoNeedBlood';
import LogInPage from '@/app/pages/auth/LogInPage';
import RegisterPage from './pages/register/RegisterPage';
import UserLayout from '@/app/pages/admin/UserLayout';
import UserDashboard from '@/app/pages/admin/UserDashboard';
import UserProfile from './pages/donor/UserProfile';
import MyDonationHistory from './pages/donor/MyDonationHistory';
import ScheduleAppointment from './pages/donor/ScheduleAppointment';
import BloodReminderAndReserveUser from './pages/donor/BloodReminderAndReserveUser';
import RequestBlood from '@/app/pages/admin/RequestBlood';
import AdminLayout from '@/app/pages/admin/AdminLayout';
import AdminDashboard from '@/app/pages/admin/AdminDashboard';
import DonationHistory from '@/app/pages/admin/DonationHistory';
import BloodRequests from '@/app/pages/admin/BloodRequests';
import ScheduleAppointmentAdmin from '@/app/pages/admin/ScheduleAppointmentAdmin';
import Users from '@/app/pages/admin/Users';
import logo from '../images/logo.png';
import bloodDonationImg from '../images/blood_donation1.jpg';
import bloodBagImg from '../images/blood_donation2.png';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <header className="navbar">
          <Link to="/" className="logo-link" onClick={handleLinkClick}>
            <img src={logo} alt="BloodChain Logo" className="logo-img" />
            <span className="logo-text">BloodChain</span>
          </Link>

          <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
            <Link to="/info-donate" className="nav-link" onClick={handleLinkClick}>Donate Blood</Link>
            <Link to="/need-info" className="nav-link" onClick={handleLinkClick}>Need Blood</Link>
            <Link to="/login" className="nav-link" onClick={handleLinkClick}>Log In</Link>
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

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/need-info" element={<InfoNeedBlood />} />
            <Route path="/info-donate" element={<InfoDonateBlood />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* User Dashboard cu layout și rute nested */}
            <Route path="/user-dashboard/*" element={<UserLayout />}>
              <Route index element={<UserDashboard />} /> {/* ruta /user-dashboard */}
              <Route path="profile/:id" element={<UserProfile />} />
              <Route path="profile/:id/my-donation-history" element={<MyDonationHistory />} />
              <Route path="schedule/:id" element={<ScheduleAppointment />} />
              <Route path="blood-reminder-and-reserve-user/:id" element={<BloodReminderAndReserveUser />} />
              <Route path="request-blood/:id" element={<RequestBlood />} />
            </Route>

            {/* Admin Dashboard */}
            <Route path="/admin-dashboard" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="donation-history/:id" element={<DonationHistory />} />
              <Route path="blood-requests/:id" element={<BloodRequests />} />
              <Route path="schedule-admin/:id" element={<ScheduleAppointmentAdmin />} />
              <Route path="users/:id" element={<Users />} />
            </Route>
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div>
            <p>&copy; 2025 BloodChain. All rights reserved.</p>
            <p>Contact: <a href="mailto:contact@bloodchain.org">contact@bloodchain.org</a> | Phone: +40 123 456 789</p>
          </div>
          <div>
            <p><strong>Address:</strong> Bulevardul 123, Baia Mare, Maramureș, România</p>
            <p><strong>Working Hours:</strong> Mon-Fri: 8am - 6pm | Sat: 9am - 2pm</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Homepage() {
  return (
    <section className="homepage">
      <div className="hero-image">
        <img src={bloodDonationImg} alt="Blood Donation" className="homepage-image" />
        <div className="hero-text">
          <h3>
            Welcome to BloodChain!
            Donating blood is a lifesaving act that directly helps those in need.
            With BloodChain, each donor becomes part of a transparent and secure community.
          </h3>
        </div>
      </div>

      <section className="donation-info" style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', textAlign: 'left' }}>
        <h2>About Blood Donation</h2>
        <p>
          Donating blood is a simple yet powerful way to save lives. Every donation can help multiple patients in need — from emergency surgeries to chronic illnesses.
          At BloodChain, we believe in creating a transparent and secure community where every donor’s contribution is valued and tracked with care.
        </p>

        <h2>Who Can Donate Blood?</h2>
        <ul>
          <li>You must be healthy and feeling well on the day of donation.</li>
          <li>Age between 17 and 65 years old.</li>
          <li>Minimum weight of 50 kg (110 lbs).</li>
          <li>At least 8 weeks (56 days) since your last donation.</li>
          <li>No recent surgeries or serious illnesses.</li>
          <li>Free from infections like HIV or hepatitis.</li>
          <li>Pregnant or breastfeeding women should wait until medically cleared.</li>
          <li>Avoid donating if under the influence of drugs or alcohol.</li>
          <li>Recent travel to certain countries may require a waiting period.</li>
        </ul>

        <p>Check with your local BloodChain center for more details and personalized advice.</p>
      </section>

      <div className="images-column">
        <img src={bloodBagImg} alt="Blood Bags" className="homepage-image" />
      </div>
    </section>
  );
}

export default App;
