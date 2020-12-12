
import { useState } from "react";
import Layout from "../../Shared/Layout/Layout";
import "./OpenAccountPage.scss";
import StepContainer from "./StepContainer/StepContainer";
import SelectAccountType from "./Steps/SelectAccountType/SelectAccountType";


const individualAccountStepComponents = [ ]


const OpenAccountPage = () =>
{

  const [accountType, setAccountType] = useState<string | null>(null)

const handlePrevious = () =>
{
  console.log("previous")
}
  
const handleNext = () =>
{
  console.log("next")
}


  
  return (
    <Layout>
      <div className="open-account-page-wrapper">
        {accountType ? <StepContainer totalSteps={7} currentStep={1} stepStartAt={1} onClickPrevious={handlePrevious} onClickNext={handleNext} ></StepContainer> : 
        <StepContainer>
            <SelectAccountType onSelect={(t)=>setAccountType(t)}/>
        </StepContainer>
        }
      </div>
    </Layout>
  );
};

export default OpenAccountPage;
