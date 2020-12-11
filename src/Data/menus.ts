import { FiBarChart } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { IconType } from "react-icons/lib";

type TMenu = {icon: IconType, title: string, link:string}
type TMenus = TMenu[]

const menus:TMenus  = [
  {
    icon: FiBarChart,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: FiBookmark,
    title: "Open Account",
    link: "/open-account",
  },
  {
    icon: FiBookOpen,
    title: "Set Limits",
    link: "/set-limits",
  },
  {
    icon: FiShoppingBag,
    title: "Mandates",
    link: "/mandate",
  },
];

export default menus;
