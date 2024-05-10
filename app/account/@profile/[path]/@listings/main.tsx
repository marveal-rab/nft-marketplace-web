import React from "react";
import { FaListCheck } from "react-icons/fa6";
import { RiErrorWarningLine } from "react-icons/ri";

interface MainProps extends Props {
  activeListings: boolean;
}

const Main: React.FC<MainProps> = (props) => {
  const { activeListings } = props;
  return (
    <div className="w-full h-full space-y-8">
      <div className="bg-neutral-900 border-[1px] border-gray-500/30 rounded-xl divide-y-[1px] divide-gray-500/30">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-4">
            {activeListings ? (
              <>
                <FaListCheck size={20} />
                <span className="text-lg font-semibold">Active listings</span>
              </>
            ) : (
              <>
                <RiErrorWarningLine size={20} />
                <span className="text-lg font-semibold">Inactive listings</span>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-500 font-semibold text-sm"
                >
                  Learn more
                </a>
              </>
            )}
          </div>
          <div>
            <a
              href="#"
              className="text-sky-600 hover:text-sky-500 font-semibold"
            >
              Cancel all listings and offers
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center h-32">
          No listings yet
        </div>
      </div>
    </div>
  );
};

export default Main;
