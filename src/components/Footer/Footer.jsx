import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h3>Austin Grandmaster Chess Academy</h3>
          <p>Professional coaching for all skill levels.</p>

          <p>+1 (512) 222-8172</p>
          <p> info@austin-chess.com</p>
          <p>12466 Los Indios Trail, Ste. 100,</p>
          <p> Austin, TX 78729</p>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <p>Group Lessons</p>
          <p>Courses</p>
          <p>Tournaments</p>
          <p>Tactics Training</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 Austin Chess Academy. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;