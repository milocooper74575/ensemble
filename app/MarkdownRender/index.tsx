import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const StreamMarkdownDemo = () => {
  const [content, setContent] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  // 模拟从 AI 获取流式数据的函数
  const simulateAIStream = async () => {
    const rawText = `### AI 响应测试
你好！这是一个 **流式渲染** 的演示。

\`\`\`javascript
function helloWorld() {
  console.log("Hello, Prompt IDE!");
}
\`\`\`

| 核心功能 | 状态 |
| :--- | :--- |
| Markdown 解析 | ✅ 支持 |
| 代码高亮 | ✅ 支持 |
| 增量更新 | ✅ 支持 |

> 正在持续生成中...`;

    setContent("");
    setIsStreaming(true);

    // 逐字追加，模拟流式效果
    for (let i = 0; i <= rawText.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30)); // 每30ms输出一个字
      setContent(rawText.slice(0, i));
    }
    setIsStreaming(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <button
        onClick={simulateAIStream}
        disabled={isStreaming}
        className="mb-4 px-4 py-2 bg-black text-white rounded-md disabled:bg-gray-400"
      >
        {isStreaming ? "正在生成..." : "开始模拟流式输出"}
      </button>

      <div className="prose border p-4 rounded-lg bg-white shadow-sm">
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
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
        {/* 模拟流式输出的光标效果 */}
        {isStreaming && (
          <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default StreamMarkdownDemo;
