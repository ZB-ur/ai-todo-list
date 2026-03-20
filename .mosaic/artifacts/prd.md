## Goal
为 3-10 人小型创业团队提供一个"打开即用"的轻量 Web 应用，将迭代周期管理、仪式执行记录和简易任务看板融为一体，以仪式驱动迭代节奏，解决敏捷仪式流于形式或被遗忘的问题。

## Features
- F-001 sprint-crud: 创建、编辑、删除和查看迭代周期（Sprint），包含名称、起止时间、迭代目标；支持 Sprint 状态流转（Planning → Active → Completed）；同一时间只能有一个 Active Sprint
- F-002 ceremony-config: 为每个 Sprint 配置仪式列表，内置四种仪式类型（Daily Standup、Sprint Planning、Sprint Review、Sprint Retrospective）；支持自定义仪式名称和频率（每日/单次/自定义）；仪式包含预定时间和参与说明
- F-003 standup-execution: 站会执行页面，每位参与者填写三问（昨天做了什么、今天计划做什么、有什么阻塞）；按日期归档历史站会记录；支持查看前一天的站会记录作为参考；移动端优化的输入体验
- F-004 review-execution: Sprint 评审执行页面，记录评审议题、演示项、反馈意见和结论；关联当前 Sprint 的已完成任务作为评审依据
- F-005 retro-execution: Sprint 回顾执行页面，支持分类记录（做得好 / 需改进 / 行动项）；行动项包含描述、责任人和状态；回顾行动项在下一个 Sprint 创建时自动转入任务看板，确保跟踪闭环
- F-006 task-kanban: 简易任务看板，三列布局（To Do / In Progress / Done）；任务卡片支持标题、描述、负责人标签；拖拽流转任务状态；任务归属于当前 Active Sprint
- F-007 sprint-dashboard: 迭代仪表盘作为首页，以"下一步该做什么"为核心设计；展示当前 Sprint 进度（剩余天数、任务完成比例）、即将到来的仪式（含倒计时）、未完成任务概览；无 Active Sprint 时引导创建新 Sprint
- F-008 ceremony-reminder: 页面内仪式提醒，当仪式临近预定时间时在页面顶部展示提示条；点击提示可直接跳转到对应仪式执行页面；基于客户端轮询实现（MVP 不做推送通知）

## Constraints
- 单团队模式，无需用户认证，打开浏览器即可使用
- Web 应用，前端 React + Tailwind CSS，后端 Node.js + SQLite（better-sqlite3）
- RESTful API 设计，不使用 GraphQL
- 界面必须移动端友好（响应式设计），站会场景优先适配手机竖屏
- 同一时间最多一个 Active Sprint，Sprint 不可重叠
- 部署方案为单进程 Docker 容器，SQLite 嵌入式数据库
- 看板拖拽使用 dnd-kit 或 @hello-pangea/dnd 库
- 页面内提醒通过客户端轮询实现，不依赖 WebSocket 或推送服务

## Out of Scope
- 用户认证与权限管理（账号注册、登录、角色分配）
- 多团队支持（团队切换、跨团队数据隔离）
- 外部通知集成（Slack、邮件、微信等推送通知）
- 燃尽图、速度图等高级统计报表
- 与外部工具集成（Jira、GitHub、Trello 等数据同步）
- Sprint Poker / 估算功能
- 文件附件和富文本编辑
- 数据导入/导出
- 国际化（MVP 仅支持中文界面）