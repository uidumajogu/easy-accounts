
import Step from "../Step";
import "./IsExistingCustomer.scss";
import RadioButtons from "../../../../Shared/RadioButtons/RadioButtons";
import { Fragment, useEffect } from "react";
import { TAccountOpeningData } from "../../../../../TypescriptUtils/Types";
import { useDispatch, useSelector } from "react-redux";
import TextInputBox from "../../../../Shared/TextInputBox/TextInputBox";


type TReduxStateSelector = {
  accountOpeningData: TAccountOpeningData | null;
}


const IsExistingCustomer = () =>
{

  const currentAccountOpeningData:any = useSelector<TReduxStateSelector>(state => state.accountOpeningData)
  const dispatch = useDispatch();

  useEffect(() =>
  {

    if (currentAccountOpeningData)
    {
      if (currentAccountOpeningData.isExistingCustomer === "No")
      {
        dispatch({ type: "enableNext", value: true }) 
        return;
      } else
      {
        if (currentAccountOpeningData.customerID)
        {
          dispatch({ type: "enableNext", value: true }) 
          return;
        }
      }
    } 

    dispatch({type:"enableNext", value:false}) 
  }, [currentAccountOpeningData, dispatch])

  const handleSelection = (selection: string) =>
  {
    const copyOfAccountOpeningData: any = currentAccountOpeningData ? { ...currentAccountOpeningData } : {isExistingCustomer:false};
    copyOfAccountOpeningData.isExistingCustomer = selection;
    dispatch({type:"accountOpeningData", value: copyOfAccountOpeningData})
  }

    const handleCustomerIDInput = (event: React.ChangeEvent) =>
    {
      
      const copyOfAccountOpeningData: any = currentAccountOpeningData ? { ...currentAccountOpeningData } : {isExistingCustomer:false, customerID: ""};
    copyOfAccountOpeningData.customerID = (event.target as any).value;
    dispatch({type:"accountOpeningData", value: copyOfAccountOpeningData})
    }
  
  console.log("currentAccountOpeningData", currentAccountOpeningData)

  return (
    <Step>
      <Fragment>
        <h4>Is an existing customer?</h4>

        <div className="is-existing-customer-radio-buttons">
          <RadioButtons labels={["Yes", "No"]} value={currentAccountOpeningData?.isExistingCustomer ? currentAccountOpeningData.isExistingCustomer : ""} onSelect={(s)=>handleSelection(s)}/>
        </div>

        
        {currentAccountOpeningData?.isExistingCustomer === "Yes" && <div className="is-existing-customer-id-section">
          <h4>Enter customer ID</h4>
          <TextInputBox type="number" placeholder="Customer ID" value={currentAccountOpeningData.customerID ? currentAccountOpeningData.customerID : ""} onChange={(e) => handleCustomerIDInput(e)} />
        </div>}
      </Fragment>
    </Step>
  );
};

export default IsExistingCustomer;
