import AssistantPrompt from "../AssistantPrompt";
import PromptActionHeader from "../PromptActionHeader";
import SystemPrompt from "../SystemPrompt";
import UserPrompt from "../UserPrompt";

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
