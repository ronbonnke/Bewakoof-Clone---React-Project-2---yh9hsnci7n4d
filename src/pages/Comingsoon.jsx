import React from 'react';
import '../styles/comingsoon/ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <img
        src="https://entrackr.com/storage/2023/04/bewakoof.png" 
        alt="Coming Soon Background"
        className="background-image"
      />
      <div className="text-overlay">
        <h1>COMING SOON..</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
