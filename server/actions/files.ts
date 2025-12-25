// 文件操作相关Server Actions
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/types";
import { FileUploadRequest, FileUploadResponse } from "@/server/types/api";

/**
 * 上传文件
 */
export async function uploadFile(params: FileUploadRequest): Promise<ActionResult<FileUploadResponse>> {
  try {
    const { file, type, conversationId } = params;

    if (!file) {
      return {
        success: false,
        error: '文件不能为空'
      };
    }

    // 文件类型验证
    const allowedTypes = ['image', 'document', 'code', 'other'];
    if (!allowedTypes.includes(type)) {
      return {
        success: false,
        error: '不支持的文件类型'
      };
    }

    // 文件大小限制 (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return {
        success: false,
        error: '文件大小不能超过10MB'
      };
    }

    // 模拟文件上传过程
    const uploadResult = await simulateFileUpload(file, type);

    // 保存文件信息到存储
    await saveFileInfo(uploadResult, conversationId);

    // 重新验证相关页面
    revalidatePath('/');
    if (conversationId) {
      revalidatePath(`/conversation/${conversationId}`);
    }

    return {
      success: true,
      data: uploadResult
    };
  } catch (error) {
    console.error('文件上传失败:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '文件上传时发生未知错误'
    };
  }
}

/**
 * 获取文件列表
 */
export async function getFileList(conversationId?: string): Promise<ActionResult<FileUploadResponse[]>> {
  try {
    const files = await getFilesFromStorage(conversationId);
    
    return {
      success: true,
      data: files
    };
  } catch (error) {
    console.error('获取文件列表失败:', error);
    return {
      success: false,
      error: '获取文件列表时发生错误'
    };
  }
}

/**
 * 删除文件
 */
export async function deleteFile(fileId: string, conversationId?: string): Promise<ActionResult> {
  try {
    if (!fileId) {
      return {
        success: false,
        error: '文件ID不能为空'
      };
    }

    // 从存储中删除文件
    await removeFileFromStorage(fileId, conversationId);

    // 重新验证相关页面
    revalidatePath('/');
    if (conversationId) {
      revalidatePath(`/conversation/${conversationId}`);
    }

    return {
      success: true,
      data: { fileId }
    };
  } catch (error) {
    console.error('删除文件失败:', error);
    return {
      success: false,
      error: '删除文件时发生错误'
    };
  }
}

/**
 * 获取文件URL
 */
export async function getFileUrl(fileId: string): Promise<ActionResult<{ url: string }>> {
  try {
    if (!fileId) {
      return {
        success: false,
        error: '文件ID不能为空'
      };
    }

    // 生成文件访问URL（这里模拟）
    const url = `/api/files/${fileId}`;

    return {
      success: true,
      data: { url }
    };
  } catch (error) {
    console.error('获取文件URL失败:', error);
    return {
      success: false,
      error: '获取文件URL时发生错误'
    };
  }
}

// 辅助函数
async function simulateFileUpload(file: File, type: string): Promise<FileUploadResponse> {
  // 模拟上传延迟
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 生成唯一文件ID
  const fileId = `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // 构建文件响应对象
  return {
    id: fileId,
    filename: `${fileId}.${getFileExtension(file.name)}`,
    originalName: file.name,
    size: file.size,
    type: file.type,
    url: `/api/files/${fileId}`,
    uploadedAt: new Date()
  };
}

function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || 'bin';
}

async function saveFileInfo(fileInfo: FileUploadResponse, conversationId?: string) {
  // 模拟保存文件信息到数据库
  // 在实际应用中，这里应该保存到云存储或数据库
  console.log('保存文件信息:', { fileInfo, conversationId });
}

async function getFilesFromStorage(conversationId?: string): Promise<FileUploadResponse[]> {
  // 模拟从存储获取文件列表
  // 在实际应用中，这里应该从数据库或云存储获取
  return [];
}

async function removeFileFromStorage(fileId: string, conversationId?: string) {
  // 模拟从存储删除文件
  // 在实际应用中，这里应该从云存储删除文件
  console.log('删除文件:', { fileId, conversationId });
}
