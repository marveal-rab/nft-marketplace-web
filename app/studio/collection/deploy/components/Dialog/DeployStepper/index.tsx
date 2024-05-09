import { Dialog } from "@/app/ui";
import { AiOutlineLoading } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

export interface DeployStepperDialogProps extends Props {
  open: boolean;
  close: () => void;
  currStep: number;
  errMsg?: string;
}

export const DeployStepperDialog: React.FC<DeployStepperDialogProps> = (
  props
) => {
  const { open, close, currStep, errMsg } = props;

  const steps = [
    {
      name: "Go to your wallet to finish deploy your contract",
      description:
        "You'll be asked to pay gas fees and sign in order to deploy your contract on the blockchain.",
    },
    {
      name: "Deploying your contract",
      description: "It may take some time for the transaction to be processed.",
    },
  ];

  return (
    <Dialog open={open} close={close} title="Deploying your contract">
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
