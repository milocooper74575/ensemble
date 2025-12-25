"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import TitleDialog from "../TitleDialog";
import HistoryDialog from "../HistoryDialog";
import { useState } from "react";

const TitleDropdownMenu = () => {
  const [showTitleDialog, setshowTitleDialog] = useState(false);
  const [showHistoryDialog, setshowHistoryDialog] = useState(false);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" aria-label="Open menu" size="default">
            <span>Untitled</span>
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-25" align="end">
          <DropdownMenuGroup className="w-full">
            <DropdownMenuItem onSelect={() => setshowTitleDialog(true)}>
              重命名
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setshowHistoryDialog(true)}>
              历史版本
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <TitleDialog open={showTitleDialog} onOpenChange={setshowTitleDialog} />
      <HistoryDialog
        open={showHistoryDialog}
        onOpenChange={setshowHistoryDialog}
      />
    </>
  );
};

export default TitleDropdownMenu;
