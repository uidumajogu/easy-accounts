
import "./OpenAccountPage.scss";
import StepContainer from "./StepContainer/StepContainer";





const OpenAccountPage = () =>
{

const handlePrevious = () =>
{
  console.log("previous")
}
  
const handleNext = () =>
{
  console.log("next")
}


  
  return (
    <div className="open-account-page-wrapper">
      <StepContainer totalSteps={7} currentStep={1} stepStartAt={1} onClickPrevious={handlePrevious} onClickNext={handleNext} /></div>
  );
};

export default OpenAccountPage;
