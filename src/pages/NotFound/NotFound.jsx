import { Link, useLocation } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound">
      <img src="./assets/jaconda-17.gif" alt="" />
      {/* <button> */}
      <Link to="/user/dashboard">Back to Dashboard</Link>
      {/* </button> */}
    </div>
  )
}

export default NotFound