import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

const GlobalSearch = () => {
  return (
    <Button variant={"ghost"} size={"icon"}>
      <Search />
    </Button>
  );
};

export default GlobalSearch;
