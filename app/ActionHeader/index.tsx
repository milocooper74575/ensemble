"use client";

import { Button } from "@/components/ui/button";
import TitleDropdownMenu from "../TitleDropdownMenu";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

const ActionHeader = () => {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    setTimestamp(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  }, []);

  return (
    <div className="p-6 flex items-end justify-between">
      <div>
        <TitleDropdownMenu />
        <div className="text-xs pl-2">上次修改:{timestamp || "加载中..."}</div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="h-8 px-3 rounded border-neutral-300 text-neutral-700"
        >
          Get Code
        </Button>
        <Button className="h-8 px-6 rounded bg-foreground">Run</Button>
      </div>
    </div>
  );
};

export default ActionHeader;
