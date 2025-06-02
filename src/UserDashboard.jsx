import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import RequestBlood from './RequestBlood';
import ScheduleAppointment from './ScheduleAppointment';
import BloodReminderAndReserveUser from './BloodReminderAndReserveUser';

function UserDashboard() {
  return (
    <>

      {/* Main content with nested routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="profile/*" element={<UserProfile />} />
          <Route path="request-blood" element={<RequestBlood />} />
          <Route path="schedule" element={<ScheduleAppointment />} />
          <Route path="blood-reminder-and-reserve-user" element={< BloodReminderAndReserveUser />} />
        </Routes>
      </main>
    </>
  );
}

// Componenta de întâmpinare
function WelcomeMessage() {
  return (
    <div className="welcome-message">
      <h2>Welcome to BloodChain! <span role="img" aria-label="heart">🩸</span></h2>
      <p>Thank you for your continued support and contribution to saving lives through blood donations.</p>
    </div>
  );
}

export default UserDashboard;
