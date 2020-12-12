import { FiGrid } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import DashboardPage from "../Components/Pages/DashboardPage/DashboardPage";
import MandatePage from "../Components/Pages/MandatePage/MandatePage";
import OpenAccountPage from "../Components/Pages/OpenAccountPage/OpenAccountPage";
import SetLimitPage from "../Components/Pages/SetLimitPage/SetLimitPage";
import Layout from "../Components/Shared/Layout/Layout";
import { TMenu } from "../TypescriptUtils/Types";



type TMenus = TMenu[]

const layoutComponent = Layout;


const menus:TMenus  = [
  {
    icon: FiGrid,
    title: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
    layoutComponent,
  },
  {
    icon: FiBookOpen,
    title: "Open Account",
    path: "/open-account",
    component: OpenAccountPage,
    layoutComponent,
  },
    {
    icon: FiColumns,
    title: "Set Limit",
    path: "/set-limit",
    component: SetLimitPage,
    layoutComponent,
  },
    {
    icon: FiBriefcase,
    title: "Mandate",
    path: "/mandate",
    component: MandatePage,
    layoutComponent,
  },

];

export default menus;
