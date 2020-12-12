import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import menus from "../../../Data/menus";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import NavBarUserDetails from "../NavBarUserDetails/NavBarUserDetails";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";
import Logo from "../../../Logo/logo.png";


const Layout = ()  =>
{
  const location = useLocation();
  const [title, setTitle] = useState<string>("")
  const [component, setComponent] = useState<(() => JSX.Element) | null>(null)
  useEffect(() =>
  {
    
    menus.forEach((menu) =>
    {
      if (menu.path === location.pathname)
      {
        setTitle(menu.title)
        setComponent(menu.component)
      }
    })

  }, [location.pathname])

  
  return (
    <div className="layout-wrapper">
        <div className="layout-left-section">
        <SideBar/>
        </div>
      <div className="layout-right-section">
        <div className="layout-right-section-navbar">
        <div className="layout-right-section-navbar-logo-mobile">
        <FiMenu className="layout-right-section-navbar-menu-icon-mobile"/>
        <BackgroundImage imageURL={Logo} />
      </div>
          <h3>{title}</h3>
          <NavBarUserDetails/>
        </div>
        <div className="layout-right-section-body">
          {component}
          </div>
      </div>
    </div>
  );
};

export default Layout;
