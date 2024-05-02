import { current } from "@/app/actions";
import { NFTMarketplaceContext } from "@/contexts";
import { CollectionData } from "@/types/collection";
import { Graphqls } from "@/utils";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";

export interface CollectionProps extends Props {
  current: CollectionData | undefined;
  setCurrent: (collection: CollectionData | undefined) => void;
}

const Collection: React.FC<CollectionProps> = (props) => {
  const { linkTo } = React.useContext(NFTMarketplaceContext);
  const [collections, setCollections] = React.useState([] as CollectionData[]);

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
  return (
    <div>
      {collections && collections.length > 0 ? (
        <div className="group p-4 h-24 bg-neutral-900 rounded-xl flex items-center gap-4 hover:bg-neutral-800 cursor-pointer">
          <div className="w-16 h-16 flex items-center justify-center bg-neutral-800 rounded-xl group-hover:bg-neutral-700">
            <LuLayoutGrid />
          </div>
          <span className="font-semibold">Choose a Collection</span>
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
