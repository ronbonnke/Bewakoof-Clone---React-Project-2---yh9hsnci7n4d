// // Footer.js
// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           
//         </div>

//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <a >Offers</a>
//           <a >Sitemap</a>
//           <a >Fanbook</a>
//         </div>

//         <div className="footer-section">
//           <h3>Get updates on your inbox</h3>
//           <input type="text" placeholder="Enter your email address" />
//           <button>Subscribe</button>
//         </div>
//       </div>

//       <div className="copyright">
//         <p>4.7M People like this</p>
//         <p>1M Followers</p>
//         <p>&copy; 2023 Your Company Name. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// Footer.js



import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation Links */}


      <div className="footer-section">
        <h3>About Bewakoof</h3>
        <p>Who are we?</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Customer Service</p>
        <p>Contact us</p>
      </div>

      {/* Categories */}
      <div className="footer-section">
        <h3>Men</h3>
        <p>Topwear</p>
        <p>Bottomwear</p>
        <p>Winterwear</p>
        <p>Footwear</p>
        <p>Accessories</p>
        <p>Plus Size</p>
        <p>Indian Wear</p>
        <p>Innerwear & Loungewear</p>
      </div>

      <div className="footer-section">
        <h3>Women</h3>
        <p>Topwear</p>
        <p>Bottomwear</p>
        <p>Accessories</p>
        <p>Loungewear</p>
        <p>Winterwear</p>
        <p>Footwear</p>
        <p>Plus Size</p>
      </div>

      <div className="footer-section">
        <h3>Mobile Covers</h3>
        <p>Nothing</p>
        <p>Apple</p>
        <p>Xiaomi</p>
        <p>Samsung</p>
        <p>Oneplus</p>
        <p>Realme</p>
        <p>Vivo</p>
        <p>Oppo</p>
      </div>
    
      </div>

      {/* Bewakoof Info */}
      <div className="bewakoof-info">
        <p>
          <strong>BEWAKOOF®</strong>THE NEW AGE ONLINE SHOPPING EXPERIENCE.
        </p>
        <p>
          Founded in 2012, Bewakoof®is a lifestyle fashion brand that makes
          creative, distinctive fashion for the trendy, contemporary Indian.
        </p>
        {/* Add more content from the provided information */}
        {/* ... */}
      </div>

      {/* Quick Links */}
      <div className="quick-links">
        <h3>Quick Links</h3>
        <a >Offers</a>
        <a >Sitemap</a>
        <a >Fanbook</a>
      </div>

      {/* Newsletter Subscription */}
      <div className="newsletter">
        <h3>Get updates on your inbox</h3>
        <input
          type="text"
          placeholder="Enter your email address"
          className="email-input"
        />
        <button className="subscribe-btn">Subscribe</button>
      </div>

      {/* Social Media and Copyright */}
      <div className="social-media">
        <div className="social-icons">
          <p>4.7M People like this</p>
          <p>1M Followers</p>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
