import { DiscoverSearchProps } from "@/interfaces";
import { FC } from "react";
import { Button } from "../ui";
import { SearchIcon } from "lucide-react";

export const Search: FC<DiscoverSearchProps> = (props) => {
  return (
    <div className="flex w-full relative">
      <input
        {...props}
        aria-label="Search"
        className="w-full focus-visible:outline-none h-auto rounded-lg p-2 text-white bg-secondary/20 tracking-tight focus:outline-none ring-1 ring-secondary/50 absolute"
        type="text"
        placeholder="Search a city..."
      />
      <Button
        intent="secondary"
        size="medium"
        shape="square"
        className="ml-2 end-0 absolute"
      >
        <SearchIcon className="text-muted-fg size-5" />
      </Button>
    </div>
  );
};
