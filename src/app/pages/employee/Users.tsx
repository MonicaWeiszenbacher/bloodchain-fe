const mockUsers = [
  {
    id: 1,
    fullName: 'Alice Popescu',
    email: 'alice.popescu@example.com',
    bloodType: 'B+',
    age: 29,
    sex: 'Female',
  },
  {
    id: 2,
    fullName: 'Mihai Ionescu',
    email: 'mihai.ionescu@example.com',
    bloodType: 'O-',
    age: 35,
    sex: 'Male',
  },
  {
    id: 3,
    fullName: 'Elena Stan',
    email: 'elena.stan@example.com',
    bloodType: 'AB+',
    age: 42,
    sex: 'Female',
  },
];

function Users() {
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
            {mockUsers.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.bloodType}</td>
                <td>{user.age}</td>
                <td>{user.sex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Users;
