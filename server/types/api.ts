// 聊天相关API类型
export interface ChatRequest {
  messages: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
  model: string;
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
}

export interface ChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: "assistant";
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// 流式响应类型
export interface StreamChunk {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    delta: {
      content?: string;
      role?: "assistant";
    };
    finish_reason?: string;
  }>;
}

// 文件操作API类型
export interface FileUploadRequest {
  file: File;
  type: "image" | "document" | "code" | "other";
  conversationId?: string;
}

export interface FileUploadResponse {
  id: string;
  filename: string;
  originalName: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: Date;
}

// 设置管理API类型
export interface SettingsUpdateRequest {
  key: string;
  value: any;
}

export interface SettingsResponse {
  [key: string]: any;
}

// 对话管理API类型
export interface ConversationCreateRequest {
  title?: string;
  systemPrompt?: string;
  userPrompt?: string;
  assistantPrompt?: string;
}

export interface ConversationUpdateRequest {
  id: string;
  title?: string;
  systemPrompt?: string;
  userPrompt?: string;
  assistantPrompt?: string;
  isCompleted?: boolean;
}

export interface ConversationResponse {
  id: string;
  title: string;
  messages: Array<{
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    timestamp: Date;
  }>;
  systemPrompt?: string;
  userPrompt?: string;
  assistantPrompt?: string;
  isCompleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Server Actions参数类型
export interface ChatActionParams {
  message: string;
  conversationId?: string;
  model?: string;
  temperature?: number;
}

export interface SaveConversationParams {
  conversation: {
    id?: string;
    title: string;
    messages: Array<{
      role: "user" | "assistant" | "system";
      content: string;
    }>;
    systemPrompt?: string;
    userPrompt?: string;
    assistantPrompt?: string;
  };
}

export interface LoadConversationParams {
  id: string;
}

export interface DeleteConversationParams {
  id: string;
}

export interface UpdateSettingsParams {
  key: string;
  value: any;
}

// 错误类型
export interface APIError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

// 请求验证类型
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// 缓存相关类型
export interface CacheEntry<T = any> {
  key: string;
  value: T;
  expiresAt: Date;
  createdAt: Date;
}

export interface CacheOptions {
  ttl?: number; // Time to live in seconds
  namespace?: string;
}

// WebSocket相关类型
export interface WebSocketMessage {
  type: "chat" | "typing" | "error" | "heartbeat";
  payload: any;
  timestamp: Date;
  conversationId?: string;
}

export interface WebSocketResponse {
  success: boolean;
  data?: any;
  error?: string;
}

// 分页相关类型
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
