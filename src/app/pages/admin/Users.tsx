import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { transfusionCenterService } from '@/app/services/api';
import { ITransfusionCenterDonor } from '@/app/models/transfusion-center-models';

function Users() {

  const [users, setUsers] = useState<ITransfusionCenterDonor[]>([]);
  const { id } = useParams();

  useEffect(() => {
    transfusionCenterService.getDonors(Number(id)).then(response => {
      setUsers(response.data);
    })
  }, []);
  
  return (
    <section className="users-section">
      <div className="container">
        <h1>Users</h1>
        <p>List of registered users with basic information.</p>
        <table className="users-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Blood Type</th>
              <th>Age</th>
              <th>Sex</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Users;
