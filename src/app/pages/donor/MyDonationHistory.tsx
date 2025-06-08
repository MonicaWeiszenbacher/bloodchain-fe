function MyDonationHistory() {
  const donationHistory = [
    { id: '1', transfusionCenter: 'transfusionCenter1', time: '2025-05-10 12:00', units: 1, token: 'BCT-XY91' },
    { id: '2', transfusionCenter: 'transfusionCenter1', time: '2025-03-02 08:00', units: 1, token: 'BCT-RD56' },
    { id: '3', transfusionCenter: 'transfusionCenter1', time: '2024-12-14 11:00', units: 2, token: 'BCT-ZT88' },
    { id: '4', transfusionCenter: 'transfusionCenter1', time: '2024-12-14 11:00', units: 2, token: 'BCT-ZT88' },
    { id: '5', transfusionCenter: 'transfusionCenter1', time: '2025-01-11 11:00', units: 2, token: 'BCT-ZB23' },


  ];

  return (
    <div className="donation-history-container" style={{ maxWidth: '800px', margin: '1rem auto', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>My Donation History</h2>
      
      <table className="donation-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#8B0000', color: 'white' }}>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Transfusion Center</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Date</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Units Donated</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd' }}>Token Received</th>
          </tr>
        </thead>
        <tbody>
          {donationHistory.map((entry, index) => (
            <tr key={index}>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{entry.id}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{entry.transfusionCenter}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{entry.time}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>{entry.units}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center', fontWeight: 'bold', color: '#c0392b' }}>{entry.token}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyDonationHistory;
