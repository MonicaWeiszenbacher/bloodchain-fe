import React, { useState } from 'react';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodtype, setBloodType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Poți înlocui acest log cu un apel API real
    console.log('Register with:', { name, email, age, gender, bloodtype, password });
    alert('Account created successfully!');
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h1>Create Your Account</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            required
            min="18"
            max="65"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />

          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="bloodtype">BloodType</label>
          <select
            id="bloodtype"
            required
            value={bloodtype}
            onChange={(e) => setBloodType(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB-</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />

          <button type="submit" className="register-button">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
