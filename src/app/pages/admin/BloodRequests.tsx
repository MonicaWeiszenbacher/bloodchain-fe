import { useEffect, useState } from 'react';
import './BloodRequests.css';
import { transfusionCenterService } from '@/app/services/api';
import { useParams } from 'react-router-dom';
import { IBloodRequestData, IBloodRequestStatus } from '@/app/models/transfusion-center-models';


function BloodRequests() {
  const [requests, setRequests] = useState<IBloodRequestData[]>([]);
  const { id } = useParams();

  useEffect(() => {
    transfusionCenterService.getBloodRequests(Number(id)).then(response => {
      setRequests(response.data);
    })
  }, []);

  const handleApprove = (reqId: any) => {
    const confirmed = window.confirm("Are you sure you want to approve this blood request?");
    if (confirmed) {
      console.log(`Approved request ID: ${reqId}`);
      setRequests(requests.filter(req => req.requesterId !== reqId));
      transfusionCenterService.updateBloodRequest(Number(id), reqId, IBloodRequestStatus.Approved);
    }
  };

  const handleReject = (reqId: any) => {
    const confirmed = window.confirm("Are you sure you want to reject this blood request?");
    if (confirmed) {
      console.log(`Rejected request ID: ${reqId}`);
      setRequests(requests.filter(req => req.requesterId !== reqId));
      transfusionCenterService.updateBloodRequest(Number(id), reqId, IBloodRequestStatus.Rejected);
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
              <th>Stock</th>
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
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.requesterId}</td>
                  <td>{req.currentStock}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.units}</td>
                  <td>{req.takeoverDate}</td>
                  <td>
                    <button onClick={() => handleApprove(req.id)} className="approve-btn">Approve</button>
                    <button onClick={() => handleReject(req.id)} className="reject-btn">Reject</button>
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
