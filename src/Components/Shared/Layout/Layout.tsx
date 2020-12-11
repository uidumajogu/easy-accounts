import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import menus from "../../../Data/menus";
import NavBarUserDetails from "../NavBarUserDetails/NavBarUserDetails";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";


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
          <h3>{title}</h3>
          <NavBarUserDetails/>
        </div>
        {component}
      </div>
    </div>
  );
};

export default Layout;
