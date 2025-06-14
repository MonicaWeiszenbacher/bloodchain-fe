import axios from 'axios';
import { useEffect, useState } from 'react';
import { ITransfusionCenterDonationHistory } from '@/app/models/employee-models';
import { formatDate } from '@/app/utils/utils';
import { transfusionCenterService } from '@/app/services/api';

function DonationHistory() {

  const [history, setHistory] = useState<ITransfusionCenterDonationHistory[]>([]);

  useEffect(() => {
    transfusionCenterService.getDonations(1).then(response => {
      setHistory(response.data);
    })
  }, []);
  
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
            {history.map((donation, index) => (
              <tr key={index}>
                <td>{donation.id}</td>
                <td>{formatDate(donation.time)}</td>
                <td>tbd</td>
                <td>tbd</td>
                <td>{donation.donorBloodGroup}</td>
                <td>tbd</td>
                <td>tbd</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DonationHistory;
