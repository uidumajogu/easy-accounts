
import { FC, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import "./StepContainer.scss";
import Trapezoid from "./Trapezoid/Trapezoid";


type TReduxStateSelector = {
  enableNext: boolean;
}

type Props = {
  tab: "Single" | "Bulk";
  children?: ReactNode;
  totalSteps?: number;
  currentStep?: number;
  stepStartAt?: 0 | 1 | null;
  onClickPrevious?: () => void;
  onClickNext?: () => void;
}


const StepContainer: FC<Props> =({tab, children, totalSteps, currentStep = 0, stepStartAt = null, onClickPrevious, onClickNext }) =>
{
    const enableNextStatus:any = useSelector<TReduxStateSelector>(state => state.enableNext)
  const [activeTab, setActiveTab] = useState<string>("Single");
  const [stepsArray, setStepsArray] = useState<number[]>([]);

  useEffect(() =>
  {
    if (stepStartAt)
    {
          let totalStepsArray = [0];
    if (totalSteps)
    {
      totalStepsArray = []
      for (let i = stepStartAt; i < (totalSteps + stepStartAt); i++)
      {
        totalStepsArray.push(i)
      }
    }

    setStepsArray(totalStepsArray)
    }
  }, [totalSteps, stepStartAt])

  return (
    <div className="step-container-wrapper">
      <div className="step-container-overlay">
        <div className="step-container-tabs">
          <Trapezoid title="Single" active={activeTab === "Single"} onClick={(t)=>setActiveTab(t)}/>
          <Trapezoid title="Bulk" active={activeTab === "Bulk"} onClick={(t)=>setActiveTab(t)}/>
        </div>
        <div className="step-container-body">
          {activeTab === tab && children}
        </div>
        {stepStartAt && <div className="step-container-footer">
          <div className="step-container-footer-step-indicators">
            {stepsArray.map((step) => <div key={v4()} className={`step-container-footer-step-indicator ${step <= currentStep && "step-container-footer-step-indicator-active"}`}>
            </div>)}

          </div>
          <div className="step-container-footer-buttons">
            <button className="step-container-footer-button" onClick={onClickPrevious}>Previous</button>
            <button className={`step-container-footer-button step-container-footer-button-next ${!enableNextStatus && "step-container-footer-button-next-disabled"}`} disabled={!enableNextStatus} onClick={onClickNext}>Next</button>
          </div>
        </div>}
        </div>
    </div>
  );
};

export default StepContainer;
