import React, { useState } from 'react';

function ScheduleAppointmentAdmin() {
  const [donorId, setDonorId] = useState('');
  const [transfusionCenterId, setTransfusionCenterId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState('');

  const generateToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToken = generateToken();
    setToken(newToken);
    setSubmitted(true);

  };

  return (
    <div className="appointment-container" style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Schedule Donation Appointment (Admin)</h2>

      {!submitted ? (
        <form method="POST" onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Donor ID:
            <input 
              type="number" 
              value={donorId} 
              onChange={(e) => setDonorId(e.target.value)} 
              required 
              min="1"
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Transfusion Center ID:
            <input 
              type="number" 
              value={transfusionCenterId} 
              onChange={(e) => setTransfusionCenterId(e.target.value)} 
              required 
              min="1"
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Select Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Select Time:
            <input 
              type="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              required 
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <button 
            type="submit" 
            style={{ width: '100%', padding: '0.75rem', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Schedule Appointment
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3>Appointment Scheduled ✅</h3>
          <p>Donor ID: <strong>{donorId}</strong></p>
          <p>Transfusion Center ID: <strong>{transfusionCenterId}</strong></p>
          <p>Date and Time: <strong>{date}</strong> at <strong>{time}</strong></p>
          <p>Generated Token:</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c', marginTop: '0.5rem' }}>
            {token}
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduleAppointmentAdmin;
