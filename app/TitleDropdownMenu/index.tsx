import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";

const TitleDropdownMenu = () => {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => console.log("New File")}>
              重命名
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log("Share")}>
              历史版本
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default TitleDropdownMenu;
