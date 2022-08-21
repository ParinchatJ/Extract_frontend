import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from '/assets/logo.png'


const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt='logo'/>
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
