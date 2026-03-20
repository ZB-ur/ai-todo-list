## Market Overview

敏捷迭代管理工具市场已相当成熟，但现有方案在"轻量级 + 仪式管理"这一细分领域存在明显空白。主流工具（Jira、Linear、ClickUp）侧重于**任务跟踪和项目管理**，将敏捷仪式（站会、回顾、评审）视为附属功能或完全忽略。专注仪式管理的工具（Parabol、EasyRetro、GoRetro）则**只做回顾/站会，不提供任务看板和迭代周期管理**。

目标用户（3-10 人小型创业团队）面临的核心痛点：
- **Jira 过于笨重**：配置复杂、学习曲线陡峭，小团队往往只用了 10% 的功能
- **Trello/看板工具缺乏迭代节奏**：没有 Sprint 概念、没有仪式提醒、没有站会记录
- **仪式工具碎片化**：回顾用 EasyRetro、站会用 Slack bot、看板用 Trello，工具切换成本高
- **打开即用的需求未被满足**：几乎所有工具都要求注册账号、创建团队、邀请成员

**市场机会**：一个将迭代周期管理、仪式执行记录和简易看板融为一体的轻量 Web 应用，定位"打开即用、零配置"，可以精准填补这一空白。

Sources: [Kanbanchi - Best Agile PM Tools 2026](https://www.kanbanchi.com/blog/best-agile-project-management-software), [Siit - Best PM for Startups](https://www.siit.io/blog/best-project-management-software-for-startups)

## Competitor Analysis

| Competitor | Core Features | Strengths | Weaknesses |
|---|---|---|---|
| **Jira** (Atlassian) | Sprint 管理、Backlog、看板、报表、Roadmap | 功能全面；生态完善；10 人以下免费 | 配置极其复杂；学习曲线陡峭；无内置仪式管理；启动慢 |
| **Linear** | Cycles（Sprint）、Issue 追踪、Roadmap、Bug 分流 | 极致快速；UI 简洁；开发者友好；自动 Cycle 滚动 | 面向开发团队非通用敏捷；无仪式管理；$8/user/月起；需注册 |
| **Trello** (Atlassian) | 看板、卡片、Power-Ups 插件 | 极易上手；免费方案充足；拖拽直观 | 无 Sprint/迭代概念；无仪式管理；规模化后力不从心 |
| **ClickUp** | 任务管理、Sprint、文档、聊天、目标 | 功能丰富；免费方案慷慨；高度可定制 | 功能过多导致复杂；性能偶有问题；仪式管理薄弱 |
| **Zoho Sprints** | Sprint 计划、Backlog、速度图、时间表 | 轻量级 Scrum 工具；价格实惠；学习曲线低 | 生态封闭于 Zoho 体系；仪式管理有限；需注册 |
| **Parabol** (开源) | 回顾会、Sprint Poker、站会、破冰 | 开源免费；仪式引导体验极佳；集成 Jira/GitHub | 只做仪式不做任务管理；无看板；无迭代周期管理 |
| **EasyRetro** | 回顾看板、模板、匿名反馈、行动项 | 200+ 模板；匿名反馈；Jira 集成成熟 | 仅限回顾会；无站会/评审；无任务看板 |
| **GoRetro** | 回顾、Planning Poker、行动项追踪 | 免费入门；趣味化设计；快速启动 | 仅限回顾和估算；功能范围窄 |

Sources: [Linear Review 2026](https://www.siit.io/tools/trending/linear-app-review), [Parabol](https://www.parabol.co/), [EasyRetro](https://easyretro.io/), [Echometer - Retro Tools](https://echometerapp.com/en/retrospective-tools-online/)

## Feasibility

### 技术可行性：**高**

| 维度 | 评估 | 说明 |
|------|------|------|
| 前端 | ✅ 完全可行 | React + Tailwind CSS 可快速实现看板拖拽、仪式表单、仪表盘；移动端响应式用 Tailwind 原生支持 |
| 后端 | ✅ 完全可行 | Node.js + SQLite 满足单团队轻量持久化需求；无需复杂数据库部署 |
| 看板拖拽 | ✅ 成熟方案 | dnd-kit 或 @hello-pangea/dnd 库成熟稳定，实现成本低 |
| 仪式管理 | ✅ 无技术障碍 | CRUD + 表单 + 定时提醒，纯业务逻辑，无技术难点 |
| 数据模型 | ✅ 简单清晰 | Sprint → Ceremony → Record（站会/评审/回顾）；Task → Sprint；关系简洁 |
| 移动端适配 | ✅ 响应式即可 | 站会场景以列表和表单为主，不需要原生 App |
| 部署 | ✅ 轻量 | SQLite 嵌入式数据库，单进程部署，Docker 一键启动 |

### 业务可行性：**中高**

- **差异化明确**：市场上没有"迭代周期 + 仪式管理 + 看板"三合一的轻量工具
- **用户获取挑战**：需要从 Jira/Trello 用户中抢夺，依赖"太重了换个轻的"的迁移动机
- **变现路径**：免费单团队 → 付费多团队/集成/高级报表，freemium 模式可行
- **护城河较浅**：功能本身不复杂，大厂可快速复制；需通过极致体验建立口碑

### 关键技术决策建议

1. **SQLite + better-sqlite3**：MVP 阶段最简方案，后续可迁移至 PostgreSQL
2. **React + Tailwind**：与 Mosaicat 技术栈一致，开发效率高
3. **RESTful API**：MVP 不需要 GraphQL，简单 CRUD 用 REST 更直观
4. **页面内提醒**：MVP 不做推送通知，用轮询或 SSE 实现即将到来的仪式提醒

## Key Insights

1. **"仪式即节奏"是核心差异化**：竞品要么做任务管理忽略仪式，要么做仪式忽略任务管理。将仪式作为迭代的骨架（而非附属功能）是本产品的独特定位——仪式驱动迭代节奏，而非任务驱动。

2. **"打开即用"是关键体验优势**：目标用户对注册/配置/邀请流程极度敏感。零认证、单团队、浏览器直接访问的设计能显著降低试用门槛，这是对抗 Jira/Linear 的核心武器。

3. **站会移动端体验决定留存**：站会是最高频仪式（每日），且常在手机上使用。站会记录的移动端体验（快速输入三问、查看昨日记录）将直接影响用户留存。

4. **回顾行动项跨迭代追踪是刚需**：调研显示回顾会最大痛点不是"开会"而是"行动项石沉大海"。自动将行动项带入下一迭代的任务看板是高价值功能。

5. **迭代仪表盘应以"下一步该做什么"为核心**：与其展示大量统计数据，不如突出"今天有站会""还有 3 个任务未完成""回顾会后天到期"等行动导向信息。

6. **MVP 应克制功能范围**：不做燃尽图、不做多团队、不做外部集成。先把"创建 Sprint → 配置仪式 → 每日站会 → 看板流转 → 评审回顾 → 下一迭代"的核心循环做通做顺。
