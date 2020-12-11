import BackgroundImage from "../BackgroundImage/BackgroundImage";
import "./SideBar.scss";
import Logo from "../../../Logo/logo.png"
import menus from "../../../Data/menus";



const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-logo">
        <BackgroundImage imageURL={Logo} height="calc(50px + 1vw)" width="calc(30px + 0.5vw)" />
        <h4>Easy Accounts</h4>
      </div>
      {menus.map((menu) => <div className="sidebar-menu-wrapper">
        <button>
        <menu.icon />
        <h5>{menu.title}</h5>
        </button>

      </div>)}
    </div>
  );
};

export default SideBar;
