// 组件相关类型定义
import { ComponentProps } from '@/types';

// UI组件Props类型
export interface ButtonProps extends ComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CardProps extends ComponentProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface DialogProps extends ComponentProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
}

export interface InputProps extends ComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface TextareaProps extends ComponentProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

// 布局组件Props类型
export interface LayoutProps extends ComponentProps {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  showSidebar?: boolean;
}

export interface HeaderProps extends ComponentProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
}

// 表单组件Props类型
export interface FormFieldProps extends ComponentProps {
  label?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface SelectProps extends FormFieldProps {
  options: Array<{
    label: string;
    value: string;
    disabled?: boolean;
  }>;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

// 业务组件Props类型
export interface ChatMessageProps extends ComponentProps {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
  isStreaming?: boolean;
  onRetry?: () => void;
  onCopy?: () => void;
}

export interface ChatInputProps extends ComponentProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onSubmit?: (message: string) => void;
  onChange?: (value: string) => void;
}

export interface ModelSelectorProps extends ComponentProps {
  selectedModel?: string;
  onModelChange?: (modelId: string) => void;
  availableModels?: Array<{
    id: string;
    name: string;
    provider: string;
  }>;
}

export interface PromptEditorProps extends ComponentProps {
  value?: string;
  placeholder?: string;
  language?: string;
  theme?: 'light' | 'dark';
  onChange?: (value: string) => void;
  onSave?: (value: string) => void;
}

// 下拉菜单相关类型
export interface DropdownMenuItem {
  label: string;
  value?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  separator?: boolean;
}

export interface DropdownMenuProps extends ComponentProps {
  items: DropdownMenuItem[];
  trigger?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
}

// 对话框相关类型
export interface ModalProps extends DialogProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  preventClose?: boolean;
}

// 工具提示相关类型
export interface TooltipProps extends ComponentProps {
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
}

// 折叠面板相关类型
export interface CollapsibleProps extends ComponentProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}
