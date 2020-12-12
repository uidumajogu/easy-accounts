
import { FC, ReactNode } from "react";
import "./Step.scss";

type Props = {
    children: ReactNode;
}

const Step:FC<Props> = ({children}) =>
{

  return (
    <div className="step-wrapper">
        {children}
    </div>
  );
};

export default Step;
