import React, {
  useEffect,
  useState,
  FC,
  HTMLAttributes,
  MouseEvent,
} from "react";

import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { CgFormatSlash } from "react-icons/cg";

interface SearchBoxButtonProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

const SearchBoxButton: FC<SearchBoxButtonProps> = ({ ...props }) => {
  const { onClick, children } = props;
  return (
    <div
      className="text-gray-50 text-center absolute end-3 h-6 w-6 bottom-3 bg-gray-400 rounded-md bg-opacity-30"
      onClick={onClick}
    >
      <span className="flex h-full w-full items-center justify-center text-xs">
        {children}
      </span>
    </div>
  );
};

const SearchBox = () => {
  const [showClose, setShowClose] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    /// TODO: send request
  };

  useEffect(() => {
    if (searchText.length > 0) {
      handleSearch();
      setShowClose(true);
    } else {
      setShowClose(false);
    }
  }, [searchText]);

  return (
    <div className="">
      <form className="w-auto mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-300">
            <BsSearch />
          </div>
          <input
            type="search"
            className="block bg-opacity-30 w-full px-4 py-3 ps-10 text-base text-gray-100 border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-600 focus:outline-none"
            placeholder="Search"
            required
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {showClose ? (
            <SearchBoxButton
              onClick={(event) => {
                setSearchText("");
              }}
            >
              <AiOutlineClose />
            </SearchBoxButton>
          ) : (
            <SearchBoxButton>
              <CgFormatSlash size={"18"} />
            </SearchBoxButton>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
