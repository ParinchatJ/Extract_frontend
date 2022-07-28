import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to='/' className="logo"><img src={logo} /> EXTRACKS</Link>
        <nav>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/activities'>My Activity</Link>
            <Link to='/community'>Community</Link>
            <Link to='/setting'>Setting</Link>
        </nav>
    </div>
  )
}

export default NavBar