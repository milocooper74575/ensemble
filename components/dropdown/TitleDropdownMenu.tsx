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
import TitleDialog from "../dialog/TitleDialog";
import HistoryDialog from "../dialog/HistoryDialog";
import { useState } from "react";

interface TitleDropdownMenuProps {
  className?: string;
}

/**
 * 标题下拉菜单组件
 */
const TitleDropdownMenu: React.FC<TitleDropdownMenuProps> = ({
  className = "",
}) => {
  const [showTitleDialog, setShowTitleDialog] = useState(false);
  const [showHistoryDialog, setShowHistoryDialog] = useState(false);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            aria-label="Open menu"
            size="default"
            className={className}
          >
            <span>Untitled</span>
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-25" align="end">
          <DropdownMenuGroup className="w-full">
            <DropdownMenuItem onSelect={() => setShowTitleDialog(true)}>
              重命名
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowHistoryDialog(true)}>
              历史版本
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <TitleDialog open={showTitleDialog} onOpenChange={setShowTitleDialog} />
      <HistoryDialog
        open={showHistoryDialog}
        onOpenChange={setShowHistoryDialog}
      />
    </>
  );
};

export default TitleDropdownMenu;
