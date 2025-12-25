"use client";

import ActionHeader from "./ActionHeader";
import { LayoutProps } from "@/components/types";

interface MainLayoutProps extends LayoutProps {
  onRun?: () => void;
  onGetCode?: () => void;
}

/**
 * 主布局组件
 * 统一管理应用的整体布局结构
 */
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  header,
  footer,
  showSidebar = true,
  onRun,
  onGetCode,
  className = "",
}) => {
  return (
    <div className={`min-h-screen bg-[#FAF9F5] ${className}`}>
      {/* 头部区域 */}
      <header className="border-b border-gray-200">
        {header || <ActionHeader onRun={onRun} onGetCode={onGetCode} />}
      </header>

      {/* 主要内容区域 */}
      <main className="flex-1">{children}</main>

      {/* 底部区域 */}
      {footer && (
        <footer className="border-t border-gray-200 p-4">{footer}</footer>
      )}
    </div>
  );
};

export default MainLayout;
