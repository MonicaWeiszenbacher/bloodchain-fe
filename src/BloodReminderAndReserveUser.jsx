import React, { useState } from 'react';

function BloodReminderAndReserveUser() {
  const [transfusionCenterId, setTransfusionCenterId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState(2); // luni
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

    if (frequency < 2) {
      alert('Donation frequency must be at least 2 months apart.');
      return;
    }

    const newToken = generateToken();
    setToken(newToken);
    setSubmitted(true);
  };

  return (
    <div className="appointment-container" style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Blood Reminder and Reserve</h2>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>You can schedule periodic appointments via Blood Reminder and Reserve!</p>
      {!submitted ? (
        <form method="POST" onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Transfusion Center ID:
            <input 
              type="number"
              placeholder="Enter Transfusion Center Id"
              min="1"
              max="12"
              value={transfusionCenterId}
              onChange={(e) => setTransfusionCenterId(e.target.value)}
              required
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Time:
            <input 
              type="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              required 
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Frequency (in months, min 2):
            <input 
              type="number"
              min="2"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              required
              style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>

          <button 
            type="submit" 
            style={{ width: '100%', padding: '0.75rem', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Set Reminder & Reserve
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3>Reservation Scheduled! 🩸</h3>
          <p>Your blood reservation is scheduled for:</p>
          <p><strong>{date}</strong> at <strong>{time}</strong></p>
          <p>At transfusion center ID: <strong>{transfusionCenterId}</strong></p>
          <p>Reminder every <strong>{frequency}</strong> months</p>
          <p>Your reservation token:</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c', marginTop: '0.5rem' }}>
            {token}
          </div>
        </div>
      )}
    </div>
  );
}

export default BloodReminderAndReserveUser;
