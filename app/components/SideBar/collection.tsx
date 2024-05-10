import { Accordion, SearchInput } from "@/app/ui";

const Collection: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <Accordion title="Collection">
        <div className="m-2">
          <SearchInput placeholder="Search" px={3} py={2} />
          <div className="flex justify-between text-xs text-neutral-500 mt-2 font-bold">
            <span>COLLECTION</span>
            <span>VALUE</span>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Collection;
