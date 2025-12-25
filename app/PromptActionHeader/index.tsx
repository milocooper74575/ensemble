import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ModelSetting from "../ModelSetting";
import { Braces, Wrench } from "lucide-react";
import { useState } from "react";
import ExampleDialog from "../ExampleDialog";

const PromptActionHeader = () => {
  const [showExampleDialog, setShowExampleDialog] = useState(false);

  return (
    <div className="mb-2 flex items-center gap-0.5">
      <Tooltip>
        <TooltipTrigger>
          <ModelSetting />
        </TooltipTrigger>
        <TooltipContent>模型配置</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="hover:bg-accent p-2 rounded-md text-neutral-500 cursor-pointer">
            <Braces size={15} />
          </div>
        </TooltipTrigger>
        <TooltipContent>变量</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="hover:bg-accent p-2 rounded-md text-neutral-500 cursor-pointer">
            <Wrench size={15} />
          </div>
        </TooltipTrigger>
        <TooltipContent>工具</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <span className="text-sm text-neutral-500 p-2 cursor-pointer">
            Example
          </span>
        </TooltipTrigger>
        <TooltipContent>添加输入输出示例</TooltipContent>
      </Tooltip>
      <ExampleDialog
        open={showExampleDialog}
        onOpenChange={setShowExampleDialog}
      />
    </div>
  );
};

export default PromptActionHeader;
