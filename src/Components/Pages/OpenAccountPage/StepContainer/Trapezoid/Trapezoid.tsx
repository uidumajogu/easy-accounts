
import { FC } from "react";
import "./Trapezoid.scss";

type Props = {
  title: string;
  active: boolean;
  onClick: (title:string)=>void
}

const Trapezoid:FC<Props> = ({title, active, onClick}) => {
  return (
    <div className="trapezoid-wrapper">
      <div className={`trapezoid-background ${active && "trapezoid-background-active"}`}></div>
      <div className={`trapezoid-button-container ${active && "trapezoid-button-container-active"}`}><button className="transparent-button" onClick={()=>onClick(title)}>{title}</button></div>
    </div>
  );
};

export default Trapezoid;
