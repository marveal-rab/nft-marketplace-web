import React from "react";

export interface CheckBoxOption {
  label: string;
  value: string;
  after?: React.ReactNode;
}

interface CheckBoxProps extends CheckBoxOption {
  isChecked: boolean;
  onChange: (value: string) => void;
  className?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ ...props }) => {
  const { className, label, value, isChecked, onChange, after } = props;

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
          className={`w-4 h-4 border border-gray-400 rounded ${
            isChecked ? "bg-blue-500" : ""
          }`}
        >
          {isChecked && (
            <div className="flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.293 14.707a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414L9 12.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3z"
                />
              </svg>
            </div>
          )}
        </div>
        <span>{label}</span>
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

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ ...props }) => {
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
    <div className={`flex flex-col ${className}`}>
      {options.map((option) => (
        <CheckBox
          key={option.value}
          label={option.label}
          value={option.value}
          after={option.after}
          isChecked={selectedValues.includes(option.value)}
          onChange={handleCheckboxChange}
          className="px-3 py-2"
        />
      ))}
    </div>
  );
};
