import { Accordion, Input } from "@/app/ui";
import Link from "next/link";
import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Support = () => {
  return (
    <div className="mx-16">
      <h2 className="text-3xl font-bold my-12">Account support</h2>
      <span>If you need help related to your account, we can help you.</span>

      <div className="flex flex-col gap-4 mt-6">
        <Accordion
          title="General help"
          className="bg-neutral-900 rounded-xl"
          type="primary"
        >
          <p className="px-4 py-6">
            Visit our{" "}
            <Link href="#" className="text-sky-600">
              help center
            </Link>{" "}
            to learn how to get started with buying, selling, and creating.
          </p>
        </Accordion>
        <Accordion
          title="Contract OpenSea Support"
          className="bg-neutral-900 rounded-xl"
          type="primary"
        >
          <div className="px-4 py-6">
            <p>Can't find the answers you’re looking for?</p>
            <p>
              You can{" "}
              <a href="#" className="text-sky-600">
                submit a request
              </a>{" "}
              here.
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Help with a compromised account"
          className="bg-neutral-900 rounded-xl"
          type="primary"
        >
          <div className="px-4 py-6">
            <p>
              If you believe your account has been compromised, let us know and
              we can lock your account. This will disable items in your wallet
              from being bought, sold, or transferred using OpenSea.{" "}
              <a href="#" className="text-sky-600">
                Learn more
              </a>
              .
            </p>
            <Input
              placeholder="Describe your issue"
              className="mt-4 h-12 px-4 w-full"
            />
            <button className="px-5 py-3 rounded-lg bg-red-800 mt-4">
              Lock account
            </button>
          </div>
        </Accordion>
        <Accordion
          title="Help with a compromised account"
          className="bg-neutral-900 rounded-xl"
          type="primary"
        >
          <div className="px-4 py-6">
            <p>You currently do not have any listings or offers to cancel.</p>
            <div className="px-6 py-4 bg-neutral-800 rounded-xl mt-4">
              <p className="flex items-center gap-4 text-sm text-neutral-500">
                <FaDollarSign className="text-blue-800" />
                This method saves gas compared to cancelling an individual
                listing or offer.
              </p>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default Support;
