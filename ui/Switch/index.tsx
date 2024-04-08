import React, { useEffect, useState } from "react";

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  isOn?: false | true;
}

const Switch: React.FC<SwitchProps> = ({ ...props }: SwitchProps) => {
  const { isOn, onClick, className } = props;
  const [on, setOn] = React.useState<boolean>(false);

  useEffect(() => {
    if (isOn) {
      setOn(true);
    } else {
      setOn(false);
    }
  }, [isOn]);

  const click = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOn(!on);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      className={`relative inline-block w-10 h-5 rounded-full transition-colors duration-300 ${
        on
          ? "bg-blue-500 after:bg-white after:border-gray-400"
          : "bg-gray-400 after:bg-white after:border-gray-400"
      } ${className}`}
      onClick={click}
    >
      <span
        className={`absolute inset-y-0 left-0 w-5 h-5 bg-white border rounded-full shadow-md transition-transform duration-300 transform  ${
          on ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </div>
  );
};

export default Switch;
