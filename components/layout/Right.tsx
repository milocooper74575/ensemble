import MarkdownRender from "../shared/MarkdownRender";

interface RightProps {
  className?: string;
  content?: string;
  isStreaming?: boolean;
  onRetry?: () => void;
  onCopy?: () => void;
}

/**
 * 右侧面板组件
 * 显示AI响应结果
 */
const Right: React.FC<RightProps> = ({
  content = "",
  isStreaming = false,
  onRetry,
  onCopy,
  className = "",
}) => {
  return (
    <div className={className}>
      <MarkdownRender
        role="assistant"
        content={content}
        isStreaming={isStreaming}
        onRetry={onRetry}
        onCopy={onCopy}
        showControls={true}
      />
    </div>
  );
};

export default Right;
