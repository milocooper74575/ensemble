import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";

const UserPrompt = () => {
  return (
    <div className="w-full bg-white rounded mb-3">
      <div className="text-sm font-medium text-left p-4 flex items-center justify-between">
        <span>User</span>
        <Sparkles size={18}/>
      </div>
      <div className="px-4 pb-4">
        <Input placeholder="Enter your prompt here..." className="w-full" />
      </div>
    </div>
  );
};

export default UserPrompt;
