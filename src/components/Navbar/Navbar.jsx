import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Austin Grandmaster Chess Academy</div>

      <ul className="link">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <span className="learn">Learn ▾</span>

          <ul className="dropdown-menu">
            <li><Link to="/assessment">Assessment</Link></li>
            <li><Link to="/tactics">Tactics by Level</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/group">Group Lessons</Link></li>
            <li><Link to="/individual">Individual Lessons</Link></li>
          </ul>
        </li>
        <li><Link to="/membershipplans">Membership</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;