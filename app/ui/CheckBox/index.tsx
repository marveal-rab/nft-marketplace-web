import React from "react";
import { FaCheck } from "react-icons/fa";

export interface CheckBoxOption {
  label?: string;
  value: string;
  labelBefore?: React.ReactNode;
  after?: React.ReactNode;
}

interface CheckBoxProps extends CheckBoxOption {
  isChecked: boolean;
  onChange: (value: string) => void;
  className?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ ...props }) => {
  const { className, label, value, isChecked, onChange, labelBefore, after } =
    props;

  const handleClick = () => {
    onChange(value);
  };

  return (
    <div
      className={`flex items-center justify-between cursor-pointer rounded-xl hover:bg-neutral-500/20 ${className}`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-6 h-6 border border-gray-400 rounded ${
            isChecked ? "bg-blue-500" : ""
          }`}
        >
          {isChecked && (
            <div className="flex items-center justify-center w-full h-full">
              <FaCheck size={14} />
            </div>
          )}
        </div>
        {label && (
          <span className="flex items-center gap-2">
            {labelBefore} {label}
          </span>
        )}
      </div>
      {after && <div>{after}</div>}
    </div>
  );
};

interface CheckBoxGroupProps {
  options: CheckBoxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
  multiple?: boolean;
}

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = (props) => {
  const {
    className,
    options,
    selectedValues = [],
    multiple = false,
    onChange = (values) => {},
  } = props;
  const handleCheckboxChange = (value: string) => {
    let updatedValues: string[];

    // 如果支持多选
    if (multiple) {
      // 如果选中的值已经在selectedValues中，则取消选中
      if (selectedValues.includes(value)) {
        updatedValues = selectedValues.filter((val) => val !== value);
      } else {
        // 如果选中的值不在selectedValues中，则添加选中的值
        updatedValues = [...selectedValues, value];
      }
    } else {
      // 如果不支持多选，则直接将当前选中的值设置为选中值
      updatedValues = [value];
    }
    onChange(updatedValues);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {options.map((option) => (
        <CheckBox
          key={option.value}
          label={option.label}
          value={option.value}
          after={option.after}
          labelBefore={option.labelBefore}
          isChecked={selectedValues.includes(option.value)}
          onChange={handleCheckboxChange}
          className="px-4 py-3"
        />
      ))}
    </div>
  );
};
