import { Switch } from "@/app/ui";
import Link from "next/link";
import React from "react";

const Offers: React.FC<Props> = (props) => {
  return (
    <div className="mx-16">
      <div className="mt-6 my-12">
        <span className="text-2xl font-bold">Offer protection</span>
        <div className="flex gap-2 justify-between items-center">
          <span>
            Check for item trait changes and items flagged as stolen before a
            offer is accepted.&nbsp;
            <Link href={"#"} className="text-sky-500">
              Learn more
            </Link>
          </span>
          <Switch />
        </div>
      </div>
      <div className="my-12">
        <span className="text-2xl font-bold">Cancel with no gas fee</span>
        <div className="flex gap-2 justify-between items-center">
          <span>
            Cancel all protected offers without paying gas fees.&nbsp;
            <Link href={"#"} className="text-sky-500">
              Learn more
            </Link>
          </span>
          <Switch />
        </div>
      </div>
      <div className="border-t-[1px] border-gray-500/30"></div>
      <div className="mt-12 flex flex-col">
        <span className="text-2xl font-bold">Set minimum offer</span>
        <span>
          Set a minimum offer for collections to ignore low offers.&nbsp;
        </span>
      </div>
      <button className="mt-6 bg-neutral-900 px-5 py-3 rounded-xl font-semibold">
        View my offers
      </button>
    </div>
  );
};

export default Offers;
