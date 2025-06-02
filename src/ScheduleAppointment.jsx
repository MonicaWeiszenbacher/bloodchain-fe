import React, { useState } from 'react';

function ScheduleAppointment() {
  const [transfusionCenterId, setTransfusionCenterId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState('');

  const generateToken = () => {
    // Token simplu simulat (ex: AB1234CD)
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
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Schedule Donation Appointment</h2>

      {!submitted ? (
        <form method="POST" onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Select TransfusionCenterId:
            <input 
              type="number" 
              value={transfusionCenterId} 
              placeholder="Enter Transfusion Center Id"
              min="1"
              max="20"
              onChange={(e) => setTransfusionCenterId(e.target.value)} 
              required 
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
            Submit Appointment
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3>Appointment Scheduled! 🩸</h3>
          <p>Your donation is scheduled for:</p>
          <p>at transfusion center id <strong>{transfusionCenterId}</strong>
          , <strong>{date}</strong> <strong>{time}</strong></p>
          <p>Your donation token:</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c', marginTop: '0.5rem' }}>
            {token}
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduleAppointment;
