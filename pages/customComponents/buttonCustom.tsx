import React from "react";

type Props = {
  onPress?: any;
  text: string;
  onFocus?: () => void;
  icon?: boolean;
  type?: string;
  className?: string;
  disabled: boolean;
};
const ButtonCustom = ({
  icon = false,
  className,
  onPress,
  onFocus,
  text,
  disabled,
}: Props) => {
  return (
    <button
      onClick={onPress}
      className={className}
      style={disabled ? { opacity: 0.5 } : {}}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonCustom;
