
import { FC } from "react";
import { FiBriefcase, FiUser } from "react-icons/fi";
import "./SelectAccountType.scss";

type Props = {
  onSelect: (type: string) => void;
}


const SelectAccountType:FC<Props> = ({onSelect}) =>
{

  return (
    <div className="select-account-type-wrapper">
      <h4>Select Account Type</h4>

      <div className="select-account-type-buttons">
        <button className="select-account-type-button" onClick={()=>onSelect("Individual")}>
          <FiUser className="select-account-type-button-icon"/>
          <h6>Individual</h6>
          <p>Open an individual account</p>
        </button>

        <button className="select-account-type-button" onClick={()=>onSelect("Corporate")}>
          <FiBriefcase className="select-account-type-button-icon"/>
          <h6>Corporate</h6>
          <p>Open a corporate account</p>
        </button>

      </div>

     </div>
  );
};

export default SelectAccountType;
