import { FC } from "react";
import "./TextInputBox.scss";

type Props = {
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  type: "number" | "text" | "email" | "password";
  name?: string;
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
};

let TextInputBox: FC<Props> = ({
  defaultValue,
  value,
  placeholder,
  type,
  name,
  autoComplete,
  autoFocus,
  readOnly,
  onChange,
  onBlur,
}) => {
  let handleEnteredInput = (event: React.ChangeEvent) => {
    event.stopPropagation();
    onChange && onChange(event);
  };

  let handleOnBlur = (event: React.FocusEvent) => {
    onBlur && onBlur(event);
  };

  return (
    <div className="input-box-wrapper">
      <input
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleEnteredInput}
        onBlur={handleOnBlur}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        readOnly={readOnly}
      />
    </div>
  );
};
export default TextInputBox;
