
import { IconType } from "react-icons/lib"


export type TMenu = { icon: IconType, title: string, path: string, component: () => JSX.Element }
export type TAccountOpeningData = {isExistingCustomer: string, customerID:string}