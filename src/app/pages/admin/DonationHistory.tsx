import { useEffect, useState } from 'react';
import { ITransfusionCenterDonationHistory } from '@/app/models/transfusion-center-models';
import { formatDate } from '@/app/utils';
import { transfusionCenterService } from '@/app/api';
import { useParams } from 'react-router-dom';

function DonationHistory() {

  const [history, setHistory] = useState<ITransfusionCenterDonationHistory[]>([]);
  const { id } = useParams();

  useEffect(() => {
    transfusionCenterService.getDonations(Number(id)).then(response => {
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
                <td>{donation.donorId}</td>
                <td>{donation.donorBloodGroup}</td>
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
