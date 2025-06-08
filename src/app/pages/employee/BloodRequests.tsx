import { useState } from 'react';
import './BloodRequests.css';

const mockRequests = [
  {
    reqId: 1,
    donorId: 4,
    transfusionCenterId: 1,
    bloodType: 'B+',
    units: 2,
    time: '2025-06-01',
  },
  {
    reqId: 2,
    donorId: 5,
    transfusionCenterId: 1,
    bloodType: 'O-',
    units: 1,
    time: '2025-05-30',
  },
  {
    reqId: 3,
    donorId: 7,
    transfusionCenterId: 3,
    bloodType: 'AB+',
    units: 3,
    time: '2025-05-28',
  },
];

function BloodRequests() {
  const [requests, setRequests] = useState(mockRequests);

  const handleApprove = (reqId: any) => {
    const confirmed = window.confirm("Are you sure you want to approve this blood request?");
    if (confirmed) {
      console.log(`Approved request ID: ${reqId}`);
      setRequests(requests.filter(req => req.reqId !== reqId));
    }
  };

  const handleReject = (reqId: any) => {
    const confirmed = window.confirm("Are you sure you want to reject this blood request?");
    if (confirmed) {
      console.log(`Rejected request ID: ${reqId}`);
      setRequests(requests.filter(req => req.reqId !== reqId));
    }
  };

  return (
    <section className="blood-requests">
      <div className="container">
        <h1>Blood Requests</h1>
        <p>Review and manage blood requests submitted by users.</p>
        <table className="requests-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>User ID</th>
              <th>Transfusion Center ID</th>
              <th>Blood Type</th>
              <th>Units</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan={7}>No pending requests.</td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req.reqId}>
                  <td>{req.reqId}</td>
                  <td>{req.donorId}</td>
                  <td>{req.transfusionCenterId}</td>
                  <td>{req.bloodType}</td>
                  <td>{req.units}</td>
                  <td>{req.time}</td>
                  <td>
                    <button onClick={() => handleApprove(req.reqId)} className="approve-btn">Approve</button>
                    <button onClick={() => handleReject(req.reqId)} className="reject-btn">Reject</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default BloodRequests;
