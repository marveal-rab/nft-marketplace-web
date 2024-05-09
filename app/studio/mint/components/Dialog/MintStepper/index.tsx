import { Dialog } from "@/app/ui";
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

interface MintStepperProps extends Props {
  open: boolean;
  close: () => void;
  currStep: number;
  errMsg?: string;
}

const MintStepper: React.FC<MintStepperProps> = (props) => {
  const { open, close, currStep, errMsg } = props;

  const steps = [
    {
      name: "Uploading to descentralized server",
      description: "This may take a few minutes.",
    },
    {
      name: "Go to your wallet to approve this transaction",
      description: "A blockchain transaction is requiered to mint your NFT.",
    },
    {
      name: "Minting your item",
      description: "Please stay on this page and keep this browser tab open.",
    },
  ];

  return (
    <Dialog open={open} close={close} title="Creating your item">
      <div className="mt-8 flex flex-col">
        {steps.map((step, index) => {
          return (
            <div
              className="grid grid-cols-10 items-center gap-4 py-2 relative"
              key={index}
            >
              <div
                className={`col-span-1 after:w-0.5 after:absolute after:bg-neutral-800 after:left-5 ${
                  index === 0
                    ? "after:top-[50%] after:h-[50%]"
                    : index === steps.length - 1
                    ? "after:bottom-[50%] after:h-[50%]"
                    : "after:top-0 after:h-full"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                  {index < currStep && <FaCheck className="z-10" />}
                  {index === currStep && (
                    <>
                      {errMsg ? (
                        <MdErrorOutline className="z-10" />
                      ) : (
                        <AiOutlineLoading className="animate-spin z-10" />
                      )}
                    </>
                  )}
                  {index > currStep && (
                    <div className="w-full h-full rounded-full z-10 bg-neutral-900 border-[1px] border-gray-500/30"></div>
                  )}
                </div>
              </div>
              <div className="col-span-9 flex flex-col">
                <span className="font-semibold">{step.name}</span>
                <span className="text-sm text-gray-500">
                  {step.description}
                </span>
                {index === currStep && errMsg && (
                  <span className="text-red-500/50 text-xs">{errMsg}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Dialog>
  );
};

export default MintStepper;
