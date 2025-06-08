function InfoNeedBlood() {
  return (
    <section className="info-need">
      <div className="container">
        <h1>Need Blood?</h1>
        <p>
          In order to request blood through BloodChain, you need to create an account or to log in. This ensures a secure and transparent system to match you with available donors and track requests.
        </p>

        <h2>Current Blood Supply Availability</h2>
        <table className="blood-stock-table">
          <thead>
            <tr>
              <th>Blood Type</th>
              <th>Available Units</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A+</td><td>42</td></tr>
            <tr><td>A−</td><td>15</td></tr>
            <tr><td>B+</td><td>33</td></tr>
            <tr><td>B−</td><td>12</td></tr>
            <tr><td>AB+</td><td>25</td></tr>
            <tr><td>AB−</td><td>10</td></tr>
            <tr><td>O+</td><td>58</td></tr>
            <tr><td>O−</td><td>20</td></tr>
          </tbody>
        </table>

        <p>
          If your required blood type is available, create an account to make a formal request through our platform.
        </p>
      </div>
    </section>
  );
}

export default InfoNeedBlood;
