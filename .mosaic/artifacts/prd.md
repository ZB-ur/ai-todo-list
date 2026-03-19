## Goal
为 3-10 人小型创业团队提供一个以迭代仪式为核心的轻量敏捷管理工具，零配置打开即用，将 Sprint 周期、仪式执行记录和任务看板统一在一个移动友好的 Web 应用中。

## Features

- F-001 sprint-crud: 创建、编辑、删除迭代周期（Sprint），包含名称、起止日期、迭代目标描述；支持查看历史迭代列表；同一时间只能有一个活跃 Sprint
- F-002 ceremony-config: 为每个 Sprint 配置仪式（站会、评审、回顾、计划会），支持自定义仪式类型名称、频率（每日/单次）、预定日期时间；默认模板包含四种标准仪式
- F-003 standup-record: 站会执行记录，每位参与者填写三问（昨天做了什么、今天计划做什么、有什么阻塞）；支持快速输入模式，移动端 3 次点击内完成一次站会输入；按日期归档站会历史
- F-004 review-record: Sprint 评审记录，支持逐条记录演示项、反馈意见和决策结论；关联到当前 Sprint
- F-005 retro-record: Sprint 回顾记录，支持分类记录（做得好 / 需改进 / 行动项）；行动项自动标记为待跟踪，可在下一迭代任务看板中显示未完成的行动项
- F-006 task-board: 迭代看板，三列布局（To Do / In Progress / Done）；支持创建任务卡片（标题、描述、负责人名称）；支持拖拽在列间移转；任务归属当前 Sprint；回顾行动项可自动生成为任务卡片
- F-007 dashboard: 迭代仪表盘作为首页，显示：当前 Sprint 名称与剩余天数进度条、即将到来的仪式列表（未来 3 天）、任务完成率统计（各列数量）、未完成的回顾行动项提醒
- F-008 ceremony-reminder: 仪式到期提醒，页面内 banner 提示今日待执行的仪式，仪表盘高亮显示过期未执行的仪式

## Constraints
- 单团队模式，无需用户认证，打开浏览器即可使用
- Web 应用，需同时支持桌面和移动端浏览器（响应式设计）
- 前端使用 React + Tailwind CSS，看板拖拽使用 dnd-kit
- 后端使用 Node.js + Express/Fastify，数据库使用 SQLite（better-sqlite3）
- 部署为 Docker 单容器，一键启动
- 参与者以名称字符串标识，无账号体系
- 所有数据持久化到 SQLite 单文件

## Out of Scope
- 用户认证、注册、登录及权限管理
- 多团队 / 多工作区支持
- 外部通知集成（Slack、邮件、Webhook）
- 燃尽图、速度图等高级报表
- 与外部工具集成（Jira、GitHub、GitLab）
- Story Point 估算、Epic 层级管理
- 实时多人协作（WebSocket 同步）
- 原生移动 App（仅做响应式 Web）
