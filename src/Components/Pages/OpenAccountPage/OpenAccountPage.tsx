
import { Fragment, useState } from "react";
import Layout from "../../Shared/Layout/Layout";
import "./OpenAccountPage.scss";
import StepContainer from "./StepContainer/StepContainer";
import EnterCustomerBVN from "./Steps/EnterCustomerBVN/EnterCustomerBVN";
import IsExistingCustomer from "./Steps/IsExistingCustomer/IsExistingCustomer";
import SelectAccountType from "./Steps/SelectAccountType/SelectAccountType";

type TStepComponent = () => JSX.Element;
type TStepComponents = {[key:string]:TStepComponent[]}

const accountStepComponents:TStepComponents = {
  individual: [ IsExistingCustomer, EnterCustomerBVN],
  corporate: [IsExistingCustomer, EnterCustomerBVN],
}


const OpenAccountPage = () =>
{
  const [accountType, setAccountType] = useState<string | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);


  const handleAccountTypeSelected = (accountTypeSelected: string) =>
  {
    setAccountType(accountTypeSelected);
    setActiveStepIndex(1)

  }

  const handlePrevious = () =>
  {
    if (accountType)
      if (activeStepIndex === 1)
      {
      setAccountType(null);
      } else {
        const currentActiveStepComponentIndex = activeStepIndex - 1
        
        setActiveStepIndex(currentActiveStepComponentIndex)
    }
  }
    
  const handleNext = () =>
  {
    if (accountType)
      if (activeStepIndex < accountStepComponents[accountType.toLowerCase()].length)
      {
        const currentActiveStepComponentIndex = activeStepIndex + 1
         setActiveStepIndex(currentActiveStepComponentIndex) 
      }
  }


  
  return (
    <Layout>
      <div className="open-account-page-wrapper">
        {accountType ? <StepContainer tab="Single" totalSteps={7} currentStep={activeStepIndex} stepStartAt={1} onClickPrevious={handlePrevious} onClickNext={handleNext} >
          {accountType === "Individual" && <Fragment>
            {activeStepIndex === 1 && <IsExistingCustomer />}
            {activeStepIndex === 2 && <EnterCustomerBVN />}
          </Fragment>}
          {accountType === "Corporate" && <Fragment>
            {activeStepIndex === 1 && <IsExistingCustomer />}
            {activeStepIndex === 2 && <EnterCustomerBVN />}
          </Fragment> }
          
        </StepContainer> :
        <StepContainer tab="Single">
            <SelectAccountType onSelect={(t)=>handleAccountTypeSelected(t)}/>
        </StepContainer>
        }
      </div>
    </Layout>
  );
};

export default OpenAccountPage;
