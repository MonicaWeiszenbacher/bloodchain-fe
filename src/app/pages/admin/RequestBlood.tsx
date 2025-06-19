import { useState } from 'react';
import { donorService } from '@/app/api';
import { useParams } from 'react-router-dom';

export default function RequestBlood() {
  const [bloodType, setBloodType] = useState('');
  const [units, setUnits] = useState<any>(1);
  const [takeoverDate, setTakeoverDate] = useState('');
  const { id } = useParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    donorService.requestBlood(Number(id), {
      bloodGroup: bloodType,
      units: units,
      takeoverDate: takeoverDate
    });

    // Simulare trimitere
    alert(`Request submitted:\nBlood Type: ${bloodType}\nUnits: ${units}\nDate: ${takeoverDate}`);
    
    // Resetare formular
    setBloodType('');
    setUnits(1);
    setTakeoverDate('');
  };

  return (
    <div className="request-blood-container" style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Request Blood</h2>
      <form onSubmit={handleSubmit}>
        {/* Select blood type */}
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Blood Type:
          <select 
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          >
            <option value="">Select type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </label>

        {/* Number of units */}
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Units needed:
          <input 
            type="number"
            min="1"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </label>

        {/* Takeover date */}
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Takeover Date:
          <input 
            type="date"
            value={takeoverDate}
            onChange={(e) => setTakeoverDate(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </label>

        {/* Submit button */}
        <button 
          type="submit" 
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
