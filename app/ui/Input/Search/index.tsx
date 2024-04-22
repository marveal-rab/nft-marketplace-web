import React from "react";
import { SearchInputProps } from "../types";
import { BsSearch } from "react-icons/bs";

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "",
  defaultValue = "",
  px = 4,
  py = 3,
  onChange = (event) => {},
  onFocus = (event) => {},
  onBlur = (event) => {},
  ...props
}) => {
  const { className } = props;
  const [searchText, setSearchText] = React.useState(defaultValue);
  const [placeholderText, setPlaceholderText] = React.useState(placeholder);

  return (
    <div className={className}>
      <div className="relative w-full mx-auto">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-300">
          <BsSearch />
        </div>
        <input
          type="search"
          className={`block w-full ps-10 text-base text-gray-100 border-gray-500 outline-none border-[1px] rounded-xl bg-transparent focus:outline-none px-${px} py-${py}`}
          placeholder={placeholderText}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            onChange(e);
          }}
          onFocus={(event) => {
            setPlaceholderText("");
            onFocus(event);
          }}
          onBlur={(event) => {
            if (!searchText || searchText === "") {
              setSearchText("");
              setPlaceholderText(placeholder);
            }
            onBlur(event);
          }}
        />
      </div>
    </div>
  );
};
