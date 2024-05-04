import { Cover } from "@/app/ui";
import { AddressType } from "@/types/collection";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface DeploySuccessCoverDialogProps extends Props {
  open: boolean;
  close: () => void;

  uri: string;
  contractAddress: AddressType;
  name: string;
  chainName: string;
}

export const DeploySuccessCoverDialog: React.FC<
  DeploySuccessCoverDialogProps
> = (props) => {
  const { open, close, uri, name, chainName } = props;
  return (
    <Cover open={open} close={close}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <img
            src={uri}
            alt={name}
            className="w-48 h-48 rounded-xl object-cover"
          />
          <span className="text-4xl font-bold">
            Your collection was been created
          </span>
          <p className="flex gap-2 items-center">
            <a href="#" className="px-3 py-2 rounded-lg bg-neutral-900">
              View Collection
            </a>
            <a href="#" className="px-3 py-2 rounded-lg bg-sky-600">
              Create an NFT
            </a>
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-neutral-500"
          >
            <span>View On {chainName}</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </Cover>
  );
};
