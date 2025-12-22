import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModelSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({
  value,
  onChange,
  name,
  disabled,
}) => {
  return (
    <Select
      value={value}
      onValueChange={onChange}
      name={name}
      disabled={disabled}
    >
      <SelectTrigger className="w-30">
        <SelectValue placeholder="选择一个模型" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Qwen</SelectLabel>
          <SelectItem value="qwen3-coder-plus">qwen3-coder-plus</SelectItem>
          <SelectItem value="qwen3-plus">qwen3-plus</SelectItem>
          <SelectItem value="qwen3">qwen3</SelectItem>
          <SelectItem value="qwen2.5-coder">qwen2.5-coder</SelectItem>
          <SelectItem value="qwen2.5">qwen2.5</SelectItem>
          <SelectItem value="qwen2">qwen2</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>OpenAI</SelectLabel>
          <SelectItem value="gpt-4o">gpt-4o</SelectItem>
          <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
          <SelectItem value="gpt-4-turbo">gpt-4-turbo</SelectItem>
          <SelectItem value="gpt-4">gpt-4</SelectItem>
          <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Claude</SelectLabel>
          <SelectItem value="claude-sonnet-4-5-20250929">claude-sonnet-4-5-20250929</SelectItem>
          <SelectItem value="claude-3-opus">claude-3-opus</SelectItem>
          <SelectItem value="claude-3-sonnet">claude-3-sonnet</SelectItem>
          <SelectItem value="claude-3-haiku">claude-3-haiku</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>DeepSeek</SelectLabel>
          <SelectItem value="deepseek-chat">deepseek-chat</SelectItem>
          <SelectItem value="deepseek-coder">deepseek-coder</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Gemini</SelectLabel>
          <SelectItem value="gemini-2.0-flash">gemini-2.0-flash</SelectItem>
          <SelectItem value="gemini-1.5-pro">gemini-1.5-pro</SelectItem>
          <SelectItem value="gemini-1.5-flash">gemini-1.5-flash</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ModelSelector;
