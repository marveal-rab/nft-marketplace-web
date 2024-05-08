import { Dialog } from "@/ui";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";

interface BlockchainsProps extends Props {
  defaultBlockchain: number;
  setBlockchain: (blockchain: number) => void;
}

interface BlockchainsDialogProps extends Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  items: BlockchainMetadata[];
  selected: number | undefined;
  setSelected: (selected: number) => void;
}

interface BlockchainMetadata {
  id: number;
  name: string;
  icon: string;
  description?: string;
  cost: string;
  show?: boolean;
}

interface BlockchainMetadataProps extends Props {
  metadata: BlockchainMetadata;
  selected: number;
  openDialog?: () => void;
}

const BlockchainsDialog: React.FC<BlockchainsDialogProps> = (props) => {
  const { open, setOpen, items, selected, setSelected } = props;
  const close = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} close={close} title="Choose blockchain">
      <div className="mt-8 mb-4 pr-4 max-h-[500px] overflow-y-scroll">
        <div className="flex flex-col gap-2">
          {items
            .filter((item) => !item.show)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={`border-[1px] border-gray-500/30  rounded-xl px-4 py-3 cursor-pointer flex gap-4 items-center ${
                    selected === item.id
                      ? "border-[2px] border-neutral-500"
                      : "hover:border-gray-500/60"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(item.id);
                    close();
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="rounded-full w-8 h-8"
                  />
                  <span className="font-semibold text-lg">{item.name}</span>
                </div>
              );
            })}
        </div>
        <p className="my-4 text-sm">
          <a href="#" className="text-sky-600">
            Learn more
          </a>{" "}
          about each blockchain
        </p>
      </div>
    </Dialog>
  );
};

const BlockchainMetadata: React.FC<BlockchainMetadataProps> = (props) => {
  const { metadata, selected, onClick, openDialog } = props;

  return (
    <div
      key={metadata.id}
      className={`h-full border-[1px] border-gray-500/30 w-1/3 px-4 py-6 rounded-xl ${
        selected === metadata.id
          ? "border-[2px] border-neutral-500"
          : "hover:border-gray-500/60"
      }`}
      onClick={onClick}
    >
      <img
        src={metadata.icon}
        alt={metadata.name}
        className="w-8 h-8 rounded-full mb-6"
      />
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-lg">{metadata.name}</span>
        <div className="flex">
          {metadata.show ? (
            <span className="p-1 border-[1px] border-gray-500/30 rounded-lg bg-neutral-800 text-xs font-semibold">
              {metadata.description}
            </span>
          ) : (
            <button
              className="font-semibold text-sky-600"
              onClick={(e) => {
                e.stopPropagation();
                if (openDialog) {
                  openDialog();
                }
              }}
            >
              Change
            </button>
          )}
        </div>
        <span className="text-sm text-neutral-500">
          Estimated cost to deploy contract: {metadata.cost}
        </span>
      </div>
    </div>
  );
};

const Blockchains: React.FC<BlockchainsProps> = (props) => {
  const { defaultBlockchain, setBlockchain } = props;
  const [selected, setSelected] = React.useState(defaultBlockchain);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [insideSelected, setInsideSelected] = React.useState<
    undefined | number
  >(undefined);

  const items = [
    {
      id: 0,
      name: "Ethereum",
      icon: "/static/images/icons/ethereum.svg",
      description: "Most popular",
      cost: "US$13.25",
      show: true,
    },
    {
      id: 1,
      name: "Polygon",
      icon: "/static/images/icons/polygon.svg",
      description: "Cheaper",
      cost: "US$0.03",
      show: true,
    },
    {
      id: 2,
      name: "Arbitrum",
      icon: "/static/images/icons/arbitrum.svg",
      cost: "US$0.01",
    },
    {
      id: 3,
      name: "Arbitrum Nova",
      icon: "/static/images/icons/arbitrum-nova.svg",
      cost: "US$0.02",
    },
    {
      id: 4,
      name: "Avalanche",
      icon: "/static/images/icons/avalanche.svg",
      cost: "US$0.02",
    },
    {
      id: 5,
      name: "Base",
      icon: "/static/images/icons/base.svg",
      cost: "US$0.01",
    },
    {
      id: 6,
      name: "Blast",
      icon: "/static/images/icons/blast.svg",
      cost: "US$0.02",
    },
    {
      id: 7,
      name: "Klaytn",
      icon: "/static/images/icons/klaytn.svg",
      cost: "US$0.02",
    },
    {
      id: 8,
      name: "Optimism",
      icon: "/static/images/icons/optimism.svg",
      cost: "US$0.02",
    },
    {
      id: 9,
      name: "Zora",
      icon: "/static/images/icons/zora-orb.svg",
      cost: "US$0.02",
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    setSelected(id);
    setBlockchain(id);
  };

  return (
    <div className="flex items-center gap-4 h-[250px]">
      {items
        .filter((item) => item.show)
        .map((item) => (
          <BlockchainMetadata
            key={item.id}
            selected={selected}
            metadata={item}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              handleClick(e, item.id)
            }
          />
        ))}
      {insideSelected ? (
        <BlockchainMetadata
          selected={selected}
          metadata={items[insideSelected]}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleClick(e, items[insideSelected].id)
          }
          openDialog={() => setOpenDialog(true)}
        />
      ) : (
        <div
          className="h-full border-[1px] border-gray-500/30 w-1/3 px-4 py-6 rounded-xl cursor-pointer hover:border-gray-500/60"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDialog(true);
          }}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full mb-6 bg-neutral-800">
            <MdMoreHoriz size={20} />
          </div>
          <span className="font-semibold">See more options</span>
        </div>
      )}
      <BlockchainsDialog
        open={openDialog}
        setOpen={setOpenDialog}
        items={items}
        selected={insideSelected}
        setSelected={(id) => {
          setInsideSelected(id);
          setSelected(id);
          setBlockchain(id);
        }}
      />
    </div>
  );
};

export default Blockchains;
