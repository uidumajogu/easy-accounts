import BackgroundImage from "../BackgroundImage/BackgroundImage";
import "./SideBar.scss";
import "../../../SharedSCSS/Styles.scss"
import Logo from "../../../Logo/logo.png"
import menus from "../../../Data/menus";
import { useHistory, useLocation } from "react-router-dom";


const SideBar = () =>
{
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-logo">
        <BackgroundImage imageURL={Logo} height="calc(50px + 1vw)" width="calc(30px + 0.5vw)" />
        <h3>Easy Accounts</h3>
      </div>
      {menus.map((menu) => <div className={`sidebar-menu-wrapper ${menu.path === location.pathname && "sidebar-active-menu"}`}>
        <button className="transparent-button" onClick={()=>history.push(menu.path)}>
        <menu.icon className="sidebar-menu-icon"/>
        <h4>{menu.title}</h4>
        </button>
      </div>)}
    </div>
  );
};

export default SideBar;
