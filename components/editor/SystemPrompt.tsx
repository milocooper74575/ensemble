"use client";

import { useState } from "react";
import { Info, ChevronUp, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

interface SystemPromptProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const SystemPrompt: React.FC<SystemPromptProps> = ({
  value = "",
  onChange,
  placeholder = "定义角色，工具，或者上下文",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="bg-white rounded mb-3"
    >
      <CollapsibleTrigger asChild>
        <div className="w-full flex justify-between items-center p-4 h-auto">
          <span>
            <span className="text-sm font-medium text-left">System Prompt</span>
            {isOpen ? null : (
              <span className="text-xs pl-2.5 text-neutral-500">
                {placeholder}
              </span>
            )}
          </span>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>系统提示词用于定义AI助手的角色和行为</p>
              </TooltipContent>
            </Tooltip>
            {isOpen ? (
              <ChevronUp className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            )}
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="px-4 pb-4">
        <Input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="w-full"
        />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SystemPrompt;
