import React from "react";

import { IoClose } from "react-icons/io5";

interface WalletConnectDialogProps extends Props {
  close: () => void;
}

interface Wallet {
  name: string;
  img: string;
}

interface WalletProps extends Props {
  wallet: Wallet;
}

const CommonWallet: React.FC<WalletProps> = ({ wallet, ...props }) => {
  return (
    <div className="px-4 py-3 flex gap-4 items-center cursor-pointer">
      <img src={wallet.img} alt={wallet.name} className="w-6 h-6" />
      <span className="text-base fond-bold">{wallet.name}</span>
    </div>
  );
};

const WalletConnectDialog: React.FC<WalletConnectDialogProps> = ({
  ...props
}) => {
  const { className, close } = props;

  const wallets: Wallet[] = [
    {
      name: "MetaMask",
      img: "/static/images/icons/metamask-fox.svg",
    },
    {
      name: "Phantom",
      img: "/static/images/icons/phantom.svg",
    },
  ];
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center bg-neutral-900 border-[1px] border-gray-500/30 rounded-xl ${className}`}
    >
      <img
        src="https://opensea.io/static/images/logos/opensea-logo.svg"
        alt=""
        className="w-32 h-32 mt-16"
      />
      <h2 className="text-xl leading-10 font-bold my-4">
        Connect to Twin Capes
      </h2>
      <div className="w-[90%] bg-neutral-800 rounded-xl divide-y-[1px] divide-gray-500/30">
        {wallets.map((wallet, index) => (
          <CommonWallet key={index} wallet={wallet} />
        ))}
      </div>
      <span className="my-6 text-sm text-neutral-500">
        <button>More wallet options</button>
      </span>
      <div
        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
        onClick={() => {
          close();
        }}
      >
        <IoClose size={18} />
      </div>
    </div>
  );
};

export default WalletConnectDialog;
