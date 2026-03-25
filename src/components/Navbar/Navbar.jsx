import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Austin Grandmaster Chess Academy</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;