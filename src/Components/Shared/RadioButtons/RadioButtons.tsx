import { FC, Fragment, useEffect, useState} from "react";
import { FiCheck } from "react-icons/fi";
import { v4 } from "uuid";
import "./RadioButtons.scss";


type Props = {
  labels: string[];
  value?: string;
  onSelect: (selection: string) => void;
}

const RadioButtons:FC<Props> = ({labels, value = null, onSelect})  =>
{

  const [activeLabel, setActiveLabel] = useState<string>("")

  useEffect(() => {
    if(value)setActiveLabel(value)
  }, [value])

  const handleRadioSelection = (selection:string) =>
  {
    setActiveLabel(selection);
    onSelect(selection);
  }

    return <Fragment>
      {labels.map((label) => <div key={v4()} className="radio-button-wrapper">
            <div className={`radio-button ${activeLabel === label && "radio-button-active"}`} onClick={()=>handleRadioSelection(label)}>
          {activeLabel === label && <FiCheck className="radio-button-icon" />}
            </div>
            <p className={`radio-button-label ${activeLabel === label && "radio-button-label-active"}`}>{label}</p>
        </div>
          
        )}
        </Fragment>
};

export default RadioButtons;
