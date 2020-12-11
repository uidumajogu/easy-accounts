import { FiGrid } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import DashboardPage from "../Components/Pages/DashboardPage/DashboardPage";
import OpenAccountPage from "../Components/Pages/OpenAccountPage/OpenAccountPage";
import Layout from "../Components/Shared/Layout/Layout";
import { TMenu } from "../TypescriptUtils/Types";



type TMenus = TMenu[]

const routeComponent = Layout;


const menus:TMenus  = [
  {
    icon: FiGrid,
    title: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
    routeComponent,
  },
  {
    icon: FiBookOpen,
    title: "Open Account",
    path: "/open-account",
    component: OpenAccountPage,
    routeComponent,
  },
  {
    icon: FiColumns,
    title: "Set Limit",
    path: "/set-limit",
    component: DashboardPage,
    routeComponent,
  },
  {
    icon: FiBriefcase,
    title: "Mandate",
    path: "/mandate",
    component: DashboardPage,
    routeComponent,
  },
];

export default menus;
