import { useEffect, useState } from 'react';
import { ITransfusionCenterData } from '@/app/models/transfusion-center-models';
import { useParams } from 'react-router-dom';
import { donorService } from '@/app/services/api';

function BloodReminderAndReserveUser() {
  const [transfusionCenterId, setTransfusionCenterId] = useState(0);
  const [locations, setLocations] = useState<ITransfusionCenterData[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState<any>(2); // luni
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (frequency < 2) {
      alert('Donation frequency must be at least 2 months apart.');
      return;
    }

    donorService.reminderAndReserve(Number(id), {
      transfusionCenterId: transfusionCenterId,
      startDate: `${date}T${time}:00.000`,
      frequency: frequency
    }).then(() => {
      setSubmitted(true);
    })
  };

  useEffect(() => {
    donorService.getClosestCentersForUser(Number(id)).then(response => {
      setLocations(response.data);
      setTransfusionCenterId(response.data[0]?.id)
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTransfusionCenterId(Number(event.target.value));
  };

  return (
    <div className="appointment-container" style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Blood Reminder and Reserve</h2>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>You can schedule periodic appointments via Blood Reminder and Reserve!</p>
      {!submitted ? (
        <form method="POST" onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '1rem' }}>
            Select TransfusionCenter:
            <select id="location-select" value={transfusionCenterId} onChange={handleChange}
                    required
                    style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
              <option value="" disabled>-- Please choose a location --</option>
              {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {`${location.name} - ${location.cityName}`}
                  </option>
              ))}
            </select>
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
        </div>
      )}
    </div>
  );
}

export default BloodReminderAndReserveUser;
