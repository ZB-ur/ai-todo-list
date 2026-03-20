## Goal
为 3-10 人小型创业团队提供一个轻量级、打开即用的敏捷迭代管理系统，将迭代看板与仪式执行记录合二为一，让团队轻松维持敏捷节奏。

## Features

- F-001 sprint-crud: 迭代周期管理——创建、编辑、删除、归档 Sprint，设定起止时间（推荐 1-2 周时间盒）和迭代目标文本，支持查看历史迭代列表，当前只能有一个活跃 Sprint
- F-002 ceremony-config: 仪式配置——为每个 Sprint 配置仪式类型（Daily Standup / Sprint Planning / Sprint Review / Sprint Retrospective）及其频率（每日、迭代首日、迭代末日等），支持自定义仪式名称，预设默认模板（创建 Sprint 时自动生成标准四仪式）
- F-003 standup-record: 站会执行与记录——每日站会页面，团队成员逐一填写"三问"（昨天做了什么、今天计划做什么、有什么阻塞），每条记录关联成员姓名和日期，支持查看历史站会记录，移动端优先的极简输入体验
- F-004 review-record: 评审会记录——Sprint Review 页面，支持自由文本记录评审内容、演示反馈和决策事项，关联到当前 Sprint
- F-005 retro-record: 回顾会记录与行动项——Sprint Retrospective 页面，支持"做得好 / 需改进 / 行动项"三栏记录，行动项（Action Item）带负责人和状态（待办/完成），未完成行动项在下一个 Sprint 创建时自动继承
- F-006 planning-record: 计划会记录——Sprint Planning 页面，记录本次迭代的目标确认和讨论要点，自由文本格式
- F-007 task-board: 迭代看板——三列看板（To Do / In Progress / Done），支持创建任务卡片（标题、描述、负责人），拖拽卡片在列间流转，任务关联到当前活跃 Sprint，支持按负责人筛选
- F-008 dashboard: 迭代仪表盘——首页展示当前 Sprint 概览（名称、剩余天数、迭代目标）、任务进度条（完成数/总数）、即将到来的仪式列表（最近 3 天）、未完成阻塞项汇总、未完成回顾行动项提醒
- F-009 ceremony-reminder: 仪式提醒——仪表盘和页面内显示即将到期（当天及次日）的仪式提醒横幅，基于页面轮询实现（非推送），提供快速跳转到对应仪式执行页面的入口
- F-010 member-manage: 成员管理——简易成员列表（姓名 + 头像色块），用于站会记录和任务分配的人员选择，无需认证，手动添加/删除成员名称即可

## Constraints
- 单团队模式，无用户认证，打开浏览器即可使用
- Web 应用，前端 React + Tailwind CSS，后端 Node.js + SQLite
- 移动端响应式设计优先（站会场景依赖手机），使用 Tailwind 原生响应式
- 看板拖拽使用 @dnd-kit/core 实现，需优化触控体验
- 仪式提醒仅支持页面内轮询提示，不集成外部通知渠道
- SQLite 嵌入式数据库，零配置部署，无需独立数据库服务
- 日期处理使用 date-fns 库
- 同一时间只允许一个活跃 Sprint，历史 Sprint 为归档只读状态
- API 采用 RESTful 设计，前后端分离架构

## Out of Scope
- 用户认证与权限管理（单团队无需登录）
- 多团队 / 多租户支持
- 外部通知集成（Slack、邮件、Webhook）
- 燃尽图、速度图等高级统计报表
- 故事点估算体系
- 与外部工具集成（Jira、GitHub、GitLab）
- 实时协作 / WebSocket 多人同步编辑
- 文件附件上传
- Sprint Backlog 优先级排序与 Epic 管理
- 国际化 / 多语言支持
