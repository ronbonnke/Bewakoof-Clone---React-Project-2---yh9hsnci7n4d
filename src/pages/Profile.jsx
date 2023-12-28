import React,{useState} from 'react';
import '../styles/profile/Profile.css';

const Profile = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleArrowClick = (section) => {
    setFormVisibility(!isFormVisible);
    setSelectedSection(section);
  };

  return (
    <div className="profile-container">MY PROFILE
      <div className="profile-sections">
        <div className="profile-section">
          <h2>Info</h2>
          {selectedSection === 'details' && isFormVisible && <div className="form-overlay">Details Form</div>}
          <span className="profile-arrow" onClick={() => handleArrowClick('details')}></span>
        </div>

        <div className="profile-section">
          <h2>Orders</h2>
          {selectedSection === 'orders' && isFormVisible && <div className="form-overlay">Orders Form</div>}
          <span className="profile-arrow" onClick={() => handleArrowClick('orders')}></span>
        </div>
        <div className="profile-section">
          <h2>Orders</h2>
          {selectedSection === 'orders' && isFormVisible && <div className="form-overlay">Orders Form</div>}
          <span className="profile-arrow" onClick={() => handleArrowClick('orders')}></span>
        </div>
        <div className="profile-section">
          <h2>Orders</h2>
          {selectedSection === 'orders' && isFormVisible && <div className="form-overlay">Orders Form</div>}
          <span className="profile-arrow" onClick={() => handleArrowClick('orders')}></span>
        </div>
        <div className="profile-section">
          <h2>Orders</h2>
          {selectedSection === 'orders' && isFormVisible && <div className="form-overlay">Orders Form</div>}
          <span className="profile-arrow" onClick={() => handleArrowClick('orders')}></span>
        </div>
        <div className="profile-section">
          <h2>Orders</h2>
          {selectedSection === 'orders' && isFormVisible && <div className="form-overlay">Orders Form</div>}
          <span className="profile-arrow" onClick={() => handleArrowClick('orders')}></span>
        </div>

        {/* Repeat the above pattern for other sections */}
      </div>
    </div>
  );
};

export default Profile;
