import React from "react";

type Props = {
  value?: string;
  setValue?: any;
  onFocus?: () => void;
  icon?: boolean;
  type?: string;
  editable?: boolean;
  placeHolder?: string;
  required?: boolean;
  className?: string;
  handleFocus: any;
  focus?: boolean;
};
const InputCustom = ({
  editable = false,
  icon = false,
  value,
  className,
  setValue,
  required,
  onFocus,
  placeHolder,
  handleFocus,
  type = "text",
  focus,
}: Props) => {
  return (
    <div className={focus ? "containerInputFocus" : className}>
      {icon && (
        <img src="/images/search.png" alt="" width={13.5} height={13.5} />
      )}
      <input
        onFocus={handleFocus}
        onBlur={handleFocus}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={editable}
        required={required}
        className={icon ? "inputSearchIcon" : "inputSearch"}
      />
    </div>
  );
};

export default InputCustom;
