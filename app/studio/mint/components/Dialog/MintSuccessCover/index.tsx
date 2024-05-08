import { Cover } from "@/ui";
import { NFTMarketplaceContext } from "@/contexts";
import { AddressType } from "@/types";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface MintSuccessCoverDialogProps extends Props {
  open: boolean;
  close: () => void;

  uri: string;
  contractAddress: AddressType;
  tokenId: number;
  name: string;
  chainName: string;
}

const MintSuccessCoverDialog: React.FC<MintSuccessCoverDialogProps> = (
  props
) => {
  const { open, close, uri, name, chainName, tokenId, contractAddress } = props;

  const { linkTo } = React.useContext(NFTMarketplaceContext);

  return (
    <Cover open={open} close={close}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <img
            src={uri}
            alt={name}
            className="w-48 h-48 rounded-xl object-cover"
          />
          <span className="text-4xl font-bold">Your item has been minted</span>
          <p className="flex gap-3 items-center">
            <button
              className="px-4 py-2 rounded-lg bg-neutral-900 font-semibold"
              onClick={(e) => {}}
            >
              List item
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-sky-600 font-semibold"
              onClick={(e) => {
                close();
                linkTo(`/assets/base/${contractAddress}/${tokenId}`, e);
              }}
            >
              View item
            </button>
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

export default MintSuccessCoverDialog;
