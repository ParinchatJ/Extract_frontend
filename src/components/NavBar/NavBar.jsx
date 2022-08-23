import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from '/assets/logo.png'

const NavBar = () => {
  let location = useLocation();

  let nav

  switch (location.pathname) {
    case "/":
      nav = <>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Get Statrted</Link>
      </>
      break;
    case "/signin":
      nav = <>
        <Link to="/signup">Sign Up</Link>
      </>
      break;
    case "/signup":
    case "/setgoal":
      nav = <>
        <Link to="/signin">Sign In</Link>
      </>
      break;
    default:
      nav = <>
        <Link to="/user/activities">My Activity</Link>
        <Link to="/user/dashboard">Dashboard</Link>
        <Link to="/user/setting">Setting</Link>
      </>
      break;
  }

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt='logo' />
        EXTRACKS
      </Link>
      <nav>
        {nav}
      </nav>
    </div>
  );
};

export default NavBar;
