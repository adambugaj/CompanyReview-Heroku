import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div>
      <button><Link to="/login">Log out</Link></button>
    </div>
  )
}

export default UserDashboard;
