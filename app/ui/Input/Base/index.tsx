import React, { FormEvent } from "react";
import { InputProps } from "../types";

export const Input: React.FC<InputProps> = ({
  placeholder = "",
  center = false,
  defaultValue = "",
  onFocus = (event) => {},
  onBlur = (event) => {},
  onChange = (event) => {},
  type = "text",
  ...props
}) => {
  const { className } = props;
  const [text, setText] = React.useState(defaultValue);
  const [placeholderText, setPlaceholderText] = React.useState(placeholder);

  return (
    <input
      type={type}
      className={`outline-none border-gray-500/30 hover:border-gray-500/50 border-[1px] bg-transparent rounded-xl ${
        center && "text-center"
      } ${className}`}
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        onChange(e);
      }}
      placeholder={placeholderText}
      onFocus={(event) => {
        setPlaceholderText("");
        onFocus(event);
      }}
      onBlur={(event) => {
        setPlaceholderText(placeholder);
        onBlur(event);
      }}
    />
  );
};
