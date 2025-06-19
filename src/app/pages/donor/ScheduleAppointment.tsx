import { useEffect, useState } from 'react';
import { donorService } from '@/app/api';
import { useParams } from 'react-router-dom';
import { ITransfusionCenterData } from '@/app/models/transfusion-center-models';

function ScheduleAppointment() {
  const [transfusionCenterId, setTransfusionCenterId] = useState(0);
  const [locations, setLocations] = useState<ITransfusionCenterData[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    donorService.scheduleAppointment(Number(id), {
      transfusionCenterId: transfusionCenterId,
      time: `${date}T${time}:00`
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
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Schedule Donation Appointment</h2>

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
        </div>
      )}
    </div>
  );
}

export default ScheduleAppointment;
