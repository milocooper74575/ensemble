"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { ChatMessageProps } from "@/components/types";

/**
 * Markdown渲染组件
 * 支持流式输出、语法高亮、增量更新
 */
interface MarkdownRenderProps extends ChatMessageProps {
  showControls?: boolean;
  enableStream?: boolean;
}

const MarkdownRender: React.FC<MarkdownRenderProps> = ({
  role,
  content,
  timestamp,
  isStreaming = false,
  showControls = true,
  enableStream = true,
  onRetry,
  onCopy,
  className = "",
  ...props
}) => {
  const [streamedContent, setStreamedContent] = useState("");
  const [isCurrentlyStreaming, setIsCurrentlyStreaming] = useState(false);

  // 流式渲染逻辑
  const renderStreamedContent = async (text: string) => {
    if (!enableStream) {
      setStreamedContent(text);
      return;
    }

    setIsCurrentlyStreaming(true);
    setStreamedContent("");

    // 逐字追加，模拟流式效果
    for (let i = 0; i <= text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setStreamedContent(text.slice(0, i));
    }
    setIsCurrentlyStreaming(false);
  };

  // 组件挂载时开始流式渲染
  useEffect(() => {
    if (isStreaming && content) {
      renderStreamedContent(content);
    } else {
      setStreamedContent(content);
    }
  }, [isStreaming, content, enableStream]);

  const displayContent = enableStream ? streamedContent : content;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      onCopy?.();
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  const handleRetry = () => {
    onRetry?.();
    renderStreamedContent(content);
  };

  return (
    <div className={`markdown-render ${className}`} {...props}>
      {/* 控制按钮 */}
      {showControls && (
        <div className="flex gap-2 mb-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="text-xs"
          >
            复制
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRetry}
            className="text-xs"
          >
            重试
          </Button>
        </div>
      )}

      {/* Markdown内容 */}
      <div className="prose prose-sm max-w-none dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // 自定义代码块渲染，支持语法高亮
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-md"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className={`${className} bg-muted px-1.5 py-0.5 rounded text-sm`}
                  {...props}
                >
                  {children}
                </code>
              );
            },
            // 自定义表格样式
            table({ children }) {
              return (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-border">
                    {children}
                  </table>
                </div>
              );
            },
            th({ children }) {
              return (
                <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="border border-border px-4 py-2">{children}</td>
              );
            },
          }}
        >
          {displayContent}
        </ReactMarkdown>

        {/* 流式输出光标效果 */}
        {(isCurrentlyStreaming || isStreaming) && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
        )}
      </div>

      {/* 时间戳 */}
      {timestamp && (
        <div className="text-xs text-muted-foreground mt-2">
          {timestamp.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
};

export default MarkdownRender;
