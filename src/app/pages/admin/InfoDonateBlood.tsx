import { Link } from 'react-router-dom';

function InfoDonateBlood() {
  return (
    <section className="info-donate">
      <div className="container">
        <h1>Ready to Donate Blood?</h1>
        <p>
          To donate blood through BloodChain, you must first create an account. 
          This ensures secure tracking of your donations and access to your donation history.
        </p>
        <p>
          With BloodChain, we use blockchain technology to reward donors in a secure and safe way via tokens
          which can be redeemed at the address Bulevardul 123, Baia Mare, Maramureș, România.
        </p>

        <div className="button-wrapper">
          <Link to="/login" className="create-account-btn">Create Account / Log In</Link>
        </div>

        <h1>Requirements to Donate Blood</h1>
        <ul>
          <li>You must be between 18 and 65 years old.</li>
          <li>Weigh at least 50 kg (110 lbs).</li>
          <li>Be in good general health at the time of donation.</li>
          <li>No recent tattoos or piercings within the last 6 months.</li>
          <li>Not currently on antibiotics or experiencing an infection.</li>
          <li>No chronic illnesses that prevent donation.</li>
          <li>Must have eaten before donating and be well-hydrated.</li>
        </ul>

        <p>If you meet these criteria, create an account to get started and schedule your donation!</p>
      </div>
    </section>
  );
}

export default InfoDonateBlood;
