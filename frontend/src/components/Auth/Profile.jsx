import React, { useEffect, useState } from 'react';
import API from '../../api';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get('/users/profile/');
        setProfile(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching profile');
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      {/* Add profile editing form here if needed */}
    </div>
  );
};

export default Profile;
