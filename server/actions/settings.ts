// 设置管理相关Server Actions
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/types";
import { UpdateSettingsParams, SettingsResponse } from "@/server/types/api";
import { AppSettings } from "@/types";

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'system',
  language: 'zh-CN',
  autoSave: true,
  showTimestamps: true,
  enableStream: true,
  defaultModel: 'gpt-3.5-turbo'
};

/**
 * 获取应用设置
 */
export async function getAppSettings(): Promise<ActionResult<AppSettings>> {
  try {
    const settings = await loadSettings();
    
    return {
      success: true,
      data: settings
    };
  } catch (error) {
    console.error('获取设置失败:', error);
    return {
      success: false,
      error: '获取设置时发生错误'
    };
  }
}

/**
 * 更新应用设置
 */
export async function updateAppSettings(params: UpdateSettingsParams): Promise<ActionResult<AppSettings>> {
  try {
    const { key, value } = params;

    if (!key) {
      return {
        success: false,
        error: '设置键不能为空'
      };
    }

    // 验证设置值
    const validatedValue = validateSettingValue(key, value);
    if (validatedValue === undefined) {
      return {
        success: false,
        error: '无效的设置值'
      };
    }

    // 更新设置
    const updatedSettings = await saveSetting(key, validatedValue);

    // 重新验证相关页面
    revalidatePath('/');
    revalidatePath('/settings');

    return {
      success: true,
      data: updatedSettings
    };
  } catch (error) {
    console.error('更新设置失败:', error);
    return {
      success: false,
      error: '更新设置时发生错误'
    };
  }
}

/**
 * 重置为默认设置
 */
export async function resetToDefaultSettings(): Promise<ActionResult<AppSettings>> {
  try {
    const resetSettings = await saveAllSettings(DEFAULT_SETTINGS);
    
    // 重新验证相关页面
    revalidatePath('/');
    revalidatePath('/settings');

    return {
      success: true,
      data: resetSettings
    };
  } catch (error) {
    console.error('重置设置失败:', error);
    return {
      success: false,
      error: '重置设置时发生错误'
    };
  }
}

/**
 * 批量更新设置
 */
export async function batchUpdateSettings(settings: Partial<AppSettings>): Promise<ActionResult<AppSettings>> {
  try {
    if (!settings || typeof settings !== 'object') {
      return {
        success: false,
        error: '设置数据无效'
      };
    }

    // 验证所有设置值
    const validatedSettings = validateAllSettings(settings);
    if (!validatedSettings) {
      return {
        success: false,
        error: '包含无效的设置值'
      };
    }

    // 批量更新设置
    const updatedSettings = await saveAllSettings(validatedSettings);

    // 重新验证相关页面
    revalidatePath('/');
    revalidatePath('/settings');

    return {
      success: true,
      data: updatedSettings
    };
  } catch (error) {
    console.error('批量更新设置失败:', error);
    return {
      success: false,
      error: '批量更新设置时发生错误'
    };
  }
}

/**
 * 导出设置
 */
export async function exportSettings(): Promise<ActionResult<SettingsResponse>> {
  try {
    const settings = await loadSettings();
    
    return {
      success: true,
      data: settings
    };
  } catch (error) {
    console.error('导出设置失败:', error);
    return {
      success: false,
      error: '导出设置时发生错误'
    };
  }
}

/**
 * 导入设置
 */
export async function importSettings(settingsData: SettingsResponse): Promise<ActionResult<AppSettings>> {
  try {
    if (!settingsData || typeof settingsData !== 'object') {
      return {
        success: false,
        error: '设置数据格式无效'
      };
    }

    // 验证导入的设置
    const validatedSettings = validateAllSettings(settingsData);
    if (!validatedSettings) {
      return {
        success: false,
        error: '导入的设置包含无效值'
      };
    }

    // 应用导入的设置
    const importedSettings = await saveAllSettings(validatedSettings);

    // 重新验证相关页面
    revalidatePath('/');
    revalidatePath('/settings');

    return {
      success: true,
      data: importedSettings
    };
  } catch (error) {
    console.error('导入设置失败:', error);
    return {
      success: false,
      error: '导入设置时发生错误'
    };
  }
}

// 辅助函数
async function loadSettings(): Promise<AppSettings> {
  // 从localStorage加载设置
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('app_settings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_SETTINGS, ...parsed };
      } catch (error) {
        console.warn('解析设置失败，使用默认设置');
      }
    }
  }
  return DEFAULT_SETTINGS;
}

async function saveSetting(key: string, value: any): Promise<AppSettings> {
  const currentSettings = await loadSettings();
  const updatedSettings = { ...currentSettings, [key]: value };
  
  // 保存到localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('app_settings', JSON.stringify(updatedSettings));
  }
  
  return updatedSettings;
}

async function saveAllSettings(settings: Partial<AppSettings>): Promise<AppSettings> {
  const currentSettings = await loadSettings();
  const updatedSettings = { ...currentSettings, ...settings };
  
  // 保存到localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('app_settings', JSON.stringify(updatedSettings));
  }
  
  return updatedSettings;
}

function validateSettingValue(key: string, value: any): any {
  switch (key) {
    case 'theme':
      return ['light', 'dark', 'system'].includes(value) ? value : undefined;
    
    case 'language':
      return typeof value === 'string' && value.length > 0 ? value : undefined;
    
    case 'autoSave':
    case 'showTimestamps':
    case 'enableStream':
      return typeof value === 'boolean' ? value : undefined;
    
    case 'defaultModel':
      return typeof value === 'string' && value.length > 0 ? value : undefined;
    
    default:
      return value; // 其他设置值原样返回
  }
}

function validateAllSettings(settings: any): AppSettings | null {
  const validated: Partial<AppSettings> = {};
  
  for (const [key, value] of Object.entries(settings)) {
    const validatedValue = validateSettingValue(key, value);
    if (validatedValue !== undefined) {
      validated[key as keyof AppSettings] = validatedValue;
    } else {
      return null; // 如果有任何无效值，返回null
    }
  }
  
  return { ...DEFAULT_SETTINGS, ...validated };
}
