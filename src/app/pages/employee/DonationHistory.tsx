
const mockDonationHistory = [
  {
    id: '1',
    date: '2025-03-15',
    transfusionCenter: 'TransfusionCenter1',
    user: 'john.doe@example.com',
    bloodType: 'A+',
    units: 1,
    token: 'TXN-9341-A',
  },
  {
    id: '2',
    date: '2024-12-10',
    transfusionCenter: 'TransfusionCenter2',
    user: 'jane.smith@example.com',
    bloodType: 'B-',
    units: 2,
    token: 'TXN-2389-B',
  },
  {
    id: '3',
    date: '2024-06-21',
    transfusionCenter: 'TransfusionCenter3',
    user: 'alex.green@example.com',
    bloodType: 'O+',
    units: 1,
    token: 'TXN-7742-C',
  },
];

function DonationHistory() {
  return (
    <section className="donation-history">
      <div className="container">
        <h1>Donation History</h1>
        <p>All recorded blood donations are shown below for administrative review.</p>
        <table className="donation-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Transfusion Center</th>
              <th>User</th>
              <th>Blood Type</th>
              <th>Units</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            {mockDonationHistory.map((donation, index) => (
              <tr key={index}>
                <td>{donation.id}</td>
                <td>{donation.date}</td>
                <td>{donation.transfusionCenter}</td>
                <td>{donation.user}</td>
                <td>{donation.bloodType}</td>
                <td>{donation.units}</td>
                <td>{donation.token}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DonationHistory;
