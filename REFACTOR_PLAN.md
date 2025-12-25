# Next.js 项目重构计划

## 目标
按照Next.js规范重新组织文件，严格分离client和server端

## 重构清单

### 第一阶段：创建基础目录结构
- [x] 创建server/目录结构
- [x] 创建types/目录
- [x] 创建utils/目录  
- [x] 创建hooks/目录
- [x] 创建stores/目录
- [x] 创建components子目录结构

### 第二阶段：类型定义创建
- [ ] 创建通用类型定义 (types/index.ts)
- [ ] 创建组件类型定义 (components/types.ts)
- [ ] 创建API类型定义 (server/types/api.ts)

### 第三阶段：UI组件重新组织
- [ ] 移动UI组件到components/ui/ (已有)
- [ ] 创建基础UI组件类型
- [ ] 优化Button组件
- [ ] 优化Card组件
- [ ] 优化Dialog组件

### 第四阶段：Client/Server组件分离
- [ ] 标识纯Client组件 (使用useState, useEffect等)
- [ ] 标识Server组件 (纯渲染组件)
- [ ] 重新组织组件到对应目录

### 第五阶段：Server Actions创建
- [ ] 创建对话处理Action (server/actions/chat.ts)
- [ ] 创建文件操作Action (server/actions/files.ts)
- [ ] 创建设置管理Action (server/actions/settings.ts)

### 第六阶段：组件重构
- [ ] 重构ActionHeader组件
- [ ] 重构Left组件
- [ ] 重构Right组件
- [ ] 重构MarkdownRender组件
- [ ] 重构其他子组件

### 第七阶段：路由和布局优化
- [ ] 创建专用布局组件
- [ ] 优化路由结构
- [ ] 添加错误边界

### 第八阶段：测试和优化
- [ ] 检查TypeScript类型
- [ ] 验证import路径
- [ ] 性能优化
- [ ] 代码清理

## 文件迁移映射

### 从 app/ 到新结构
- app/ActionHeader/ → components/layout/ActionHeader
- app/Left/ → components/layout/Left  
- app/Right/ → components/layout/Right
- app/MarkdownRender/ → components/shared/MarkdownRender
- 其他组件 → components/forms/ 或 components/layout/

### 保留在app/的
- app/layout.tsx (根布局)
- app/page.tsx (主页面)
- app/api/ (API路由)
- app/globals.css (全局样式)
