
import { FC, useEffect, useState } from "react";
import { v4 } from "uuid";
import "./StepContainer.scss";
import Trapezoid from "./Trapezoid/Trapezoid";

type Props = {
  component?: () => JSX.Element;
  totalSteps?: number;
  currentStep?: number;
  stepStartAt: 0 | 1;
  onClickPrevious?: () => void;
  onClickNext?: () => void;
}


const StepContainer: FC<Props> =({ component, totalSteps, currentStep, stepStartAt, onClickPrevious, onClickNext }) =>
{
  
  const [activeTab, setActiveTab] = useState<string>("Single");
  const [stepsArray, setStepsArray] = useState<number[]>([]);

  useEffect(() =>
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

  }, [totalSteps, stepStartAt])

  return (
    <div className="step-container-wrapper">
      <div className="step-container-overlay">
        <div className="step-container-tabs">
          <Trapezoid title="Single" active={activeTab === "Single"} onClick={(t)=>setActiveTab(t)}/>
          <Trapezoid title="Bulk" active={activeTab === "Bulk"} onClick={(t)=>setActiveTab(t)}/>
        </div>
        <div className="step-container-body">
          {component}
        </div>
        <div className="step-container-footer">
          <div className="step-container-footer-step-indicators">
            {stepsArray.map((step) => <div key={v4()} className={`step-container-footer-step-indicator ${step === currentStep && "step-container-footer-step-indicator-active"}`}>
            </div>)}

          </div>
          <div className="step-container-footer-buttons">
            <button className="transparent-button step-container-footer-button" onClick={onClickPrevious}>Previous</button>
            <button className="transparent-button step-container-footer-button step-container-footer-button-next " onClick={onClickNext}>Next</button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default StepContainer;
