
import "./NavBarUserDetails.scss";
import { FaUserCircle } from "react-icons/fa";


const NavBarUserDetails = ()  =>
{

  
  return (
          <div className="navbar-user-details-wrapper">
            <div className="navbar-user-details">
              <h6>Ini Obong</h6>
              <p>Customer Service</p>
      </div>
      <FaUserCircle className="navbar-user-icon"/>
      
          </div>
  );
};

export default NavBarUserDetails;
