import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const [profileImage, setProfileImage] = useState(null);

  const userData = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    gender: 'Male',
    bloodtype: 'A+',
    tokens: 3,
    nextDonationDate: '2025-07-15'
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="user-profile-container">
      <h1>My Profile</h1>

      <div className="profile-section">
        <div className="profile-image-container">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-image" />
          ) : (
            <div className="placeholder-image">Upload Image</div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="profile-details">
          <p><strong>Full Name:</strong> {userData.fullName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>BloodType:</strong> {userData.bloodtype}</p>
          <p><strong>Tokens Available:</strong> {userData.tokens}</p>
          <p><strong>Next Donation Date:</strong> {userData.nextDonationDate}</p>

          <Link to="/user-dashboard/profile/my-donation-history">
            <button className="history-button">My Donation History</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
