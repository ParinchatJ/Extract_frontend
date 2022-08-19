import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src='./assets/logo.png' alt=''/>
        EXTRACKS
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/activities">My Activity</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/setting">Setting</Link>
      </nav>
    </div>
  );
};

export default NavBar;
