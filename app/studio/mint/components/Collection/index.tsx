import { current } from "@/app/actions";
import { NFTMarketplaceContext } from "@/contexts";
import { CollectionData } from "@/types/collection";
import { Graphqls } from "@/utils";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";

export interface CollectionProps extends Props {
  current: CollectionData | undefined;
  setCurrent: (collection: CollectionData | undefined) => void;
}

const Collection: React.FC<CollectionProps> = (props) => {
  const { linkTo } = React.useContext(NFTMarketplaceContext);
  const [collections, setCollections] = React.useState([] as CollectionData[]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchCollections = async () => {
      const curr = await current();
      if (!curr.token) {
        return;
      }
      const data = await Graphqls.listCollectionsForOwner(curr.token);
      setCollections(data);
    };
    fetchCollections();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <div>
      {collections && collections.length > 0 ? (
        <div className="relative">
          <div
            className="group p-4 h-24 bg-neutral-900 rounded-xl flex justify-between items-center hover:bg-neutral-800 cursor-pointer"
            onClick={handleClick}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-neutral-800 rounded-xl group-hover:bg-neutral-700">
                <LuLayoutGrid />
              </div>
              <span className="font-semibold">Choose a Collection</span>
            </div>
            <div
              className={`transition duration-100 ease-linear ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaAngleDown />
            </div>
          </div>
          {open && (
            <div className="bg-neutral-900 rounded-xl absolute z-10 w-full px-2 py-1 top-[100px] flex flex-col gap-1">
              <div
                className="group p-4 h-16 rounded-xl flex items-center gap-4 hover:bg-neutral-800 cursor-pointer"
                onClick={(e) => {
                  linkTo("/studio/collection/deploy", e);
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-neutral-800 rounded-xl group-hover:bg-neutral-700">
                  <FaPlus />
                </div>
                <span className="font-semibold text-base">
                  Create a new Collection
                </span>
              </div>
              {collections &&
                collections.map((collection, index) => {
                  return (
                    <div
                      className="group p-4 h-16 rounded-xl flex items-center gap-4 hover:bg-neutral-800 cursor-pointer"
                      key={index}
                    >
                      <img
                        src={collection.picUrl}
                        alt=""
                        className="w-12 h-12 flex items-center justify-center rounded-xl"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-base">
                          {collection.name}
                        </span>
                        <span className="text-xs text-neutral-500">
                          Ethereum Mainnet · ERC1155
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div
            className="group p-4 h-24 bg-neutral-900 rounded-xl flex items-center gap-4 hover:bg-neutral-800 cursor-pointer"
            onClick={(e) => {
              linkTo("/studio/collection/deploy", e);
            }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-neutral-800 rounded-xl group-hover:bg-neutral-700">
              <FaPlus />
            </div>
            <span className="font-semibold">Create a new Collection</span>
          </div>
          <span className="text-xs text-neutral-500">
            Not all collections are eligible.{" "}
            <a href="#" className="text-sky-600">
              Learn more
            </a>
          </span>
        </div>
      )}
    </div>
  );
};

export default Collection;
