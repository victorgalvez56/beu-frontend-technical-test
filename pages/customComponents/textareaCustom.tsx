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
  rows: number;
};
const TeaxAreaCustom = ({
  editable = false,
  icon = false,
  value,
  className,
  rows,
  setValue,
  required,
  onFocus,
  placeHolder,
  type = "text",
}: Props) => {
  return (
    <textarea
      className={className}
      name=""
      id=""
      rows={rows}
      placeholder={placeHolder}
      disabled={editable}
      required={required}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TeaxAreaCustom;
