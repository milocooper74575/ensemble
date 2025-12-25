"use client";

import { Button } from "@/components/ui/button";
import TitleDropdownMenu from "../dropdown/TitleDropdownMenu";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

interface ActionHeaderProps {
  onRun?: () => void;
  onGetCode?: () => void;
  className?: string;
}

/**
 * 操作头部组件
 * 显示标题、下拉菜单、操作按钮
 */
const ActionHeader: React.FC<ActionHeaderProps> = ({
  onRun,
  onGetCode,
  className = "",
}) => {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    setTimestamp(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  }, []);

  const handleRun = () => {
    onRun?.();
  };

  const handleGetCode = () => {
    onGetCode?.();
  };

  return (
    <div className={`p-6 flex items-end justify-between ${className}`}>
      <div>
        <TitleDropdownMenu />
        <div className="text-xs pl-2">上次修改: {timestamp || "加载中..."}</div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="h-8 px-3 rounded border-neutral-300 text-neutral-700"
          onClick={handleGetCode}
        >
          Get Code
        </Button>
        <Button className="h-8 px-6 rounded bg-foreground" onClick={handleRun}>
          Run
        </Button>
      </div>
    </div>
  );
};

export default ActionHeader;
