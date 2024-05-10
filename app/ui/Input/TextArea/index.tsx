import React from "react";
import { TextAreaProps } from "../types";

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const { className, rows = 4, placeholder, value, onChange } = props;
  return (
    <textarea
      className={`block w-full rounded-xl border-[1px] border-gray-500/30 hover:border-gray-500/50 focus:outline-none bg-transparent ${className}`}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
