import { FC } from "react";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";

type Props = {
  children?: JSX.Element,
};


const Layout:FC<Props> = ({children}) =>
{
  
  
  return (
    <div className="layout-wrapper">
        <div className="layout-left-section">
        <SideBar/>
        </div>
      <div className="layout-right-section">
        {children}
      </div>
    </div>
  );
};

export default Layout;
