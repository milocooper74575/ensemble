// 通用类型定义
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// 对话相关类型
export interface Message extends BaseEntity {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export interface Conversation extends BaseEntity {
  title: string;
  messages: Message[];
  systemPrompt?: string;
  userPrompt?: string;
  assistantPrompt?: string;
  isCompleted?: boolean;
}

// 模型相关类型
export interface Model {
  id: string;
  name: string;
  provider: string;
  description?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface ModelSettings {
  model: Model;
  temperature: number;
  maxTokens: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
}

// UI相关类型
export interface UIState {
  isLoading: boolean;
  isStreaming: boolean;
  error?: string;
  sidebarOpen: boolean;
  theme: "light" | "dark";
}

// 组件Props类型
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// 表单相关类型
export interface FormState {
  isSubmitting: boolean;
  isValid: boolean;
  errors: Record<string, string>;
}

// API响应类型
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Server Action类型
export interface ActionResult<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  redirect?: string;
}

// 事件类型
export interface ChatEvent {
  type: "message" | "thinking" | "task" | "step" | "error";
  data: any;
  timestamp: Date;
}

// 设置类型
export interface AppSettings {
  theme: "light" | "dark" | "system";
  language: string;
  autoSave: boolean;
  showTimestamps: boolean;
  enableStream: boolean;
  defaultModel: string;
}
