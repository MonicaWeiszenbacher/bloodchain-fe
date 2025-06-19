import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UserProfile.css';
import { donorService } from '@/app/api';
import { IDonorDetails } from '@/app/models/donor-models';

function UserProfile() {
  const [userData, setUserData] = useState<IDonorDetails | undefined>();
  const [healthQuestionnaire, setHealthQuestionnaire] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    donorService.getDonorDetails(Number(id)).then(response => {
      setUserData(response.data);
    })
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHealthQuestionnaire(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('file', file);
      donorService.uploadFile(Number(id), formData);
    }
  };

  return (
    <div className="user-profile-container">
      <h1>My Profile</h1>

      <div className="profile-section">
        <div className="profile-image-container">
          {healthQuestionnaire ? (
            <img src={healthQuestionnaire} alt="Profile" className="profile-image" />
          ) : (
            <div className="placeholder-image">Upload Health Questionnaire</div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        {userData && (
        <div className="profile-details">
          <p><strong>Full Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Age:</strong> {userData.age}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>BloodType:</strong> {userData.bloodGroup}</p>
          <p><strong>Tokens Available:</strong> {userData.numberOfTokens}</p>
          <p><strong>Next Donation Date:</strong> {userData.nextDonationDate || '-'}</p>

          <Link to={`/user-dashboard/profile/${id}/my-donation-history`}>
            <button className="history-button">My Donation History</button>
          </Link>
        </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
