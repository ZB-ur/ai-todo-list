## Goal
为 3-10 人小型创业团队提供一个"轻量看板 + 结构化仪式管理"的敏捷迭代管理 Web 应用，打开即用、无需认证，让团队 30 秒内进入第一个 Sprint。

## Features
- F-001 sprint-crud: 迭代周期管理——创建、编辑、删除、关闭 Sprint，设定起止时间和迭代目标文本；支持查看历史迭代列表；同一时间只允许一个活跃 Sprint
- F-002 ceremony-config: 仪式配置——为 Sprint 配置仪式（Daily Standup / Sprint Planning / Sprint Review / Sprint Retrospective），支持自定义仪式类型名称；设定仪式的计划日期/时间和重复频率（如站会每日重复）
- F-003 standup-record: 站会记录——每日站会页面采集每位成员的"昨天做了什么 / 今天计划做什么 / 有什么阻塞"三问；成员通过输入昵称参与（无认证）；支持查看当前 Sprint 的历史站会记录；移动端优先设计：大按钮、简洁输入、快速提交
- F-004 review-record: 评审记录——Sprint Review 页面支持记录演示条目（功能名称 + 状态 + 备注）和利益相关者反馈文本；按 Sprint 归档可回溯
- F-005 retro-record: 回顾记录与行动项跟踪——Sprint Retrospective 页面提供"做得好 / 需改进 / 行动项"三栏收集；行动项包含描述、负责人昵称、状态（open/done）；未完成行动项自动带入下一个 Sprint 的回顾检查清单
- F-006 planning-record: 计划会记录——Sprint Planning 页面记录本迭代目标确认、选入的任务列表快照和容量备注
- F-007 task-board: 迭代看板——三列看板（To Do / In Progress / Done），支持任务卡片创建（标题、描述、负责人昵称、优先级 P0-P3）；卡片在列间拖拽流转；任务归属于当前活跃 Sprint；支持按负责人或优先级筛选
- F-008 dashboard: 迭代仪表盘——一屏概览当前 Sprint 进度（任务列分布统计）、即将到来的仪式（最近 3 天内）、未完成阻塞项数量、未关闭回顾行动项列表；作为应用默认首页
- F-009 ceremony-reminder: 仪式提醒——仪表盘和全局顶栏对当天到期的仪式显示页面内提示徽标；点击可直接跳转到对应仪式执行页面
- F-010 data-persistence: 数据持久化——后端使用 SQLite 存储所有数据；提供 RESTful API 供前端调用；支持数据库文件导出备份

## Constraints
- 单团队模式，无用户认证，打开浏览器即可使用
- Web 应用，前后端分离架构：React + Tailwind CSS 前端，Node.js + SQLite 后端
- 界面必须移动端友好（响应式布局），站会记录页面移动端优先设计
- 同一时间只允许一个活跃 Sprint
- 成员身份通过昵称标识，不做账号体系
- SQLite 单文件数据库，零配置部署
- 看板拖拽使用成熟拖拽库（如 dnd-kit 或 @hello-pangea/dnd）

## Out of Scope
- 用户认证与权限管理
- 多团队 / 多工作空间支持
- 外部通知集成（Slack、邮件、Webhook）
- 燃尽图、速率图等高级统计报表
- 与外部工具集成（Jira、GitHub、Trello 等）
- WebSocket 实时多人协作同步
- 国际化 / 多语言支持
- Sprint Backlog 梳理与 Story Point 估算
