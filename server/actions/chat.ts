// 聊天相关Server Actions
import { revalidatePath } from "next/cache";
import { ChatActionParams } from "@/server/types/api";
import { ActionResult } from "@/types";

// 模拟AI聊天API调用
async function callAIChatAPI(
  messages: Array<{ role: string; content: string }>
) {
  // 这里应该是实际的AI API调用
  // 为了演示，我们返回一个模拟响应
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: `chat_${Date.now()}`,
    role: "assistant",
    content: `# AI回复\n\n这是来自AI的智能回复。\n\n## 特点\n- 支持Markdown格式\n- 可以包含代码块\n\n\`\`\`javascript\nconsole.log("Hello, World!");\n\`\`\`\n\n请告诉我您还需要什么帮助？`,
  };
}

/**
 * 发送聊天消息
 */
export async function sendChatMessage(
  params: ChatActionParams
): Promise<ActionResult> {
  try {
    const {
      message,
      conversationId,
      model = "gpt-3.5-turbo",
      temperature = 0.7,
    } = params;

    if (!message?.trim()) {
      return {
        success: false,
        error: "消息内容不能为空",
      };
    }

    // 这里可以添加消息验证逻辑
    if (message.length > 4000) {
      return {
        success: false,
        error: "消息内容过长，请控制在4000字符以内",
      };
    }

    // 调用AI API
    const aiResponse = await callAIChatAPI([
      { role: "user", content: message },
    ]);

    // 保存消息到数据库（这里用localStorage模拟）
    // 在实际应用中，这里应该保存到数据库
    const chatHistory = getChatHistory(conversationId);
    chatHistory.push(
      { role: "user", content: message, timestamp: new Date() },
      { role: "assistant", content: aiResponse.content, timestamp: new Date() }
    );
    saveChatHistory(conversationId ?? "", chatHistory);

    // 重新验证页面数据
    revalidatePath("/");

    return {
      success: true,
      data: {
        message: aiResponse,
        conversationId: conversationId || `conv_${Date.now()}`,
      },
    };
  } catch (error) {
    console.error("发送消息失败:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "发送消息时发生未知错误",
    };
  }
}

/**
 * 获取流式聊天响应
 */
export async function getStreamingChatResponse(
  params: ChatActionParams
): Promise<ActionResult> {
  try {
    const { message, conversationId } = params;

    if (!message?.trim()) {
      return {
        success: false,
        error: "消息内容不能为空",
      };
    }

    // 这里返回流式响应的控制信息
    return {
      success: true,
      data: {
        isStreaming: true,
        conversationId: conversationId || `conv_${Date.now()}`,
      },
    };
  } catch (error) {
    console.error("获取流式响应失败:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "获取响应时发生未知错误",
    };
  }
}

/**
 * 清空聊天历史
 */
export async function clearChatHistory(
  conversationId: string
): Promise<ActionResult> {
  try {
    if (!conversationId) {
      return {
        success: false,
        error: "对话ID不能为空",
      };
    }

    // 清空聊天历史
    clearChatHistoryStorage(conversationId);

    // 重新验证页面
    revalidatePath("/");

    return {
      success: true,
      data: { conversationId },
    };
  } catch (error) {
    console.error("清空聊天历史失败:", error);
    return {
      success: false,
      error: "清空聊天历史时发生错误",
    };
  }
}

/**
 * 获取对话列表
 */
export async function getConversationList(): Promise<ActionResult> {
  try {
    // 获取所有对话历史
    const conversations = getAllConversations();

    return {
      success: true,
      data: conversations,
    };
  } catch (error) {
    console.error("获取对话列表失败:", error);
    return {
      success: false,
      error: "获取对话列表时发生错误",
    };
  }
}

// 辅助函数：聊天历史管理
function getChatHistory(conversationId?: string) {
  if (!conversationId) return [];

  // 从localStorage获取历史记录
  if (typeof window !== "undefined") {
    const history = localStorage.getItem(`chat_${conversationId}`);
    return history ? JSON.parse(history) : [];
  }
  return [];
}

function saveChatHistory(conversationId: string, history: any[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(`chat_${conversationId}`, JSON.stringify(history));
  }
}

function clearChatHistoryStorage(conversationId: string) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(`chat_${conversationId}`);
  }
}

function getAllConversations() {
  if (typeof window !== "undefined") {
    const conversations = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("chat_")) {
        const conversationId = key.replace("chat_", "");
        const history = JSON.parse(localStorage.getItem(key) || "[]");
        if (history.length > 0) {
          conversations.push({
            id: conversationId,
            title: history[0]?.content?.slice(0, 30) + "..." || "新对话",
            messageCount: history.length,
            lastMessage: history[history.length - 1],
            createdAt: history[0]?.timestamp || new Date(),
          });
        }
      }
    }
    return conversations;
  }
  return [];
}
