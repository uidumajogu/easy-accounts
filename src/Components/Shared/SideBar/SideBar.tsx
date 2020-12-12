import BackgroundImage from "../BackgroundImage/BackgroundImage";
import "./SideBar.scss";
import Logo from "../../../Logo/logo.png"
import menus from "../../../Data/menus";
import { useHistory, useLocation } from "react-router-dom";
import { v4 } from "uuid";


const SideBar = () =>
{
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-logo">
        <BackgroundImage imageURL={Logo} />
        <h3>Easy Accounts</h3>
      </div>
      {menus.map((menu) => <div key={v4()} className={`sidebar-menu-wrapper ${menu.path === location.pathname && "sidebar-active-menu"}`}>
        <button className="transparent-button" onClick={()=>history.push(menu.path)}>
        <menu.icon className="sidebar-menu-icon"/>
        <h4>{menu.title}</h4>
        </button>
      </div>)}
    </div>
  );
};

export default SideBar;
