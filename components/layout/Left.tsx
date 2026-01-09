import AssistantPrompt from "../editor/AssistantPrompt";
import PromptActionHeader from "./PromptActionHeader";
import SystemPrompt from "../editor/SystemPrompt";
import UserPrompt from "../editor/UserPrompt";

const Left = () => {
  return (
    <div className="px-8">
      <PromptActionHeader />
      <SystemPrompt />
      <UserPrompt />
      <AssistantPrompt />
    </div>
  );
};

export default Left;
