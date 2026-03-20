## Goal
为 3-10 人小型创业团队提供一个轻量级、打开即用的敏捷迭代管理 Web 应用，将迭代节奏管理（仪式调度与执行记录）和任务看板整合在一起，帮助团队养成结构化的敏捷习惯。

## Features
- F-001 sprint-crud: 创建、编辑、删除迭代周期（Sprint），设定名称、起止日期和迭代目标；支持查看历史迭代列表；同一时间只允许一个活跃 Sprint
- F-002 ceremony-config: 为每个 Sprint 配置迭代仪式（Daily Standup、Sprint Planning、Sprint Review、Sprint Retrospective），支持自定义仪式类型名称、频率（每日/一次性）和预定日期时间
- F-003 standup-record: 站会执行记录功能，每位成员填写"昨天做了什么 / 今天计划做什么 / 有什么阻塞"三问模板；支持按日期查看历史站会记录；移动端优先的输入体验
- F-004 review-record: Sprint 评审会记录功能，支持记录评审结论、演示反馈和决策事项；关联到当前 Sprint
- F-005 retro-record: Sprint 回顾会记录功能，支持"做得好 / 待改进 / 行动项"三栏模板；行动项自动生成为下一迭代的待办任务
- F-006 task-board: 迭代任务看板，支持 To Do / In Progress / Done 三列；任务卡片包含标题、描述、负责人标签；支持拖拽移动卡片在列间流转；任务关联到当前 Sprint
- F-007 sprint-dashboard: 迭代仪表盘首页，显示当前活跃 Sprint 进度（任务完成比例）、即将到来的仪式列表（含倒计时）、未完成任务概览、最近的仪式记录摘要
- F-008 ceremony-reminder: 仪式到期提醒，当仪式预定时间临近时在页面内以横幅或徽章形式提示用户；仪表盘显示"今日仪式"高亮区域
- F-009 member-list: 简易成员名单管理（仅名称和头像标签），用于站会记录的成员选择和任务卡片的负责人分配；无需认证，仅作为标签使用
- F-010 data-persistence: 后端数据持久化，使用 SQLite 存储所有 Sprint、仪式、记录和任务数据；提供 RESTful API 供前端调用

## Constraints
- 单团队模式，无需用户认证和权限管理，打开浏览器即可使用
- Web 应用，前后端分离架构，前端 React + Tailwind CSS，后端 Node.js + SQLite
- 界面必须移动端友好（响应式设计），站会记录页面优先优化移动端输入体验
- 同一时间只允许存在一个活跃（进行中）的 Sprint
- 成员管理仅为标签系统，不涉及账户和登录
- MVP 阶段实时性通过页面刷新或轮询实现，不要求 WebSocket
- 部署为单进程 Node.js 应用 + SQLite 文件，可 Docker 一键部署

## Out of Scope
- 用户认证与权限管理（RBAC）
- 多团队 / 多项目支持
- 外部通知集成（Slack、邮件、Webhook）
- 燃尽图、速度图等高级报表
- 与外部工具集成（Jira、GitHub、GitLab）
- WebSocket 实时协作
- 国际化 / 多语言支持
- 离线模式 / PWA
- 导入导出数据