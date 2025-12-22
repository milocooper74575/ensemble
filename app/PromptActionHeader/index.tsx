import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ModelSetting from "../ModelSetting";
import { Braces, Wrench } from "lucide-react";

const PromptActionHeader = () => {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <ModelSetting />
        </TooltipTrigger>
        <TooltipContent>模型配置</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="hover:bg-accent p-2 rounded-md text-neutral-500">
            <Braces size={15} />
          </div>
        </TooltipTrigger>
        <TooltipContent>变量</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="hover:bg-accent p-2 rounded-md text-neutral-500">
            <Wrench size={15} />
          </div>
        </TooltipTrigger>
        <TooltipContent>工具</TooltipContent>
      </Tooltip>
    </>
  );
};

export default PromptActionHeader;
