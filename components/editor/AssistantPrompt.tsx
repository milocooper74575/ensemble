import { Trash2 } from "lucide-react";
import { EnsembleEditor } from "@/packages/@ensemble/editor/src";

const AssistantPrompt = () => {
  return (
    <div className="w-full bg-white rounded mb-3">
      <div className="text-sm font-medium text-left p-4 flex items-center justify-between">
        <span>Assistant</span>
        <Trash2 size={18} />
      </div>
      <div className="px-4 pb-4">
        <EnsembleEditor />
      </div>
    </div>
  );
};

export default AssistantPrompt;
