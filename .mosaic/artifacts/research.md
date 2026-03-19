## Market Overview

敏捷迭代管理工具市场已高度成熟，Jira 以 89.65% 的市场份额主导企业级市场。然而，小型创业团队（3-10 人）普遍反映主流工具过于复杂：Jira 学习曲线陡峭，ClickUp/Asana 功能臃肿。市场存在明确的"轻量化缺口"——团队需要的是**开箱即用、零配置、聚焦迭代节奏**的工具，而非全功能项目管理平台。

**关键机会点：** 现有工具几乎都是"通用项目管理 + 敏捷模块"的模式，没有一个产品专门围绕**迭代仪式（站会/评审/回顾）的执行与记录**来设计。回顾工具（EasyRetro、Retrium）和站会工具各自独立，但缺乏一个将 Sprint 周期、仪式执行、任务看板统一在一起的轻量产品。

## Competitor Analysis

| Competitor | Core Features | Strengths | Weaknesses |
|---|---|---|---|
| **Trello** | 看板、卡片、Power-Ups 插件 | 极简易用、免费tier慷慨、生态丰富 | 无原生 Sprint 概念、仪式管理需插件拼凑、缺乏迭代节奏感 |
| **Linear** | Issue 跟踪、Cycle（迭代）、路线图 | 速度极快、现代 UI、开发者友好 | 偏向工程团队、无仪式记录功能、付费门槛($8/人/月) |
| **Zoho Sprints** | Sprint 规划、积压管理、速度图 | 功能完整、价格亲民、移动端支持 | 需要 Zoho 生态、UI 较传统、仪式管理弱 |
| **Taiga** (开源) | Scrum/Kanban、Sprint 规划、Wiki | 开源免费、功能全面、可自托管 | 部署复杂、UI 老旧、无仪式执行功能 |
| **Plane** (开源) | Issue、Cycle、看板、文档 | 现代 UI、GitHub 38K+ Stars、自托管 | 无仪式管理、偏通用项目管理 |
| **EasyRetro** | 回顾会模板、投票、行动项 | 专注回顾、简单好用、免费版够用 | 只做回顾、不含看板/Sprint 管理 |
| **Parabol** | 站会、回顾、Sprint 规划 | 多仪式支持、AI 辅助 | 无任务看板、无迭代周期管理、需外部工具配合 |
| **PlanBB** | 看板、CRM、任务管理 | 完全免费、极简 | 无敏捷概念、无仪式支持 |

## Feasibility

### 技术可行性：**高**

- **前端**：React + Tailwind CSS 可快速构建响应式看板和仪式记录界面，拖拽库（dnd-kit）成熟
- **后端**：Node.js + SQLite 满足单团队轻量存储需求，零运维成本
- **移动端适配**：Tailwind 响应式 + PWA 即可满足手机站会场景，无需原生 App
- **核心技术难点低**：看板拖拽、CRUD 表单、日历提醒均为成熟模式，无需突破性技术

### 业务可行性：**中高**

- **差异化明确**：市场上没有"迭代仪式优先"的轻量工具，定位清晰
- **MVP 范围合理**：Sprint CRUD + 仪式配置/执行 + 简易看板 + 仪表盘，4-6 周可完成
- **风险点**：单团队无认证模式限制了付费场景，后续需考虑多团队 + 认证扩展路径

### 架构建议

| 层 | 推荐方案 | 理由 |
|---|---|---|
| 前端 | React + Tailwind + dnd-kit | 团队技术栈匹配，看板拖拽体验好 |
| 后端 | Node.js + Express/Fastify | 轻量、与前端同语言 |
| 数据库 | SQLite (better-sqlite3) | 零配置、单文件、适合单团队 |
| 部署 | Docker 单容器 | 一键部署，符合"打开即用"约束 |

## Key Insights

1. **仪式执行是核心差异点**：竞品要么做通用看板（Trello/Plane），要么做单一仪式（EasyRetro 只做回顾）。将 Sprint 周期与仪式执行记录深度绑定是最大差异化，MVP 应围绕"仪式驱动的迭代节奏"来设计。

2. **站会三问模式需移动优先**：站会是最高频仪式（每日），且常在手机上使用。站会记录界面必须做到 3 次点击内完成一次站会输入，移动端体验决定产品留存。

3. **回顾行动项跨迭代跟踪是痛点**：EasyRetro 等工具的行动项产出后缺乏跟踪闭环。将回顾行动项自动带入下一迭代的任务看板，是对现有工具的显著改进。

4. **"零认证打开即用"是 MVP 优势也是扩展瓶颈**：短期内降低了使用门槛，但多人协作场景下需要明确数据所有权。建议 MVP 后快速引入简单认证（如邀请码/链接分享）。

5. **避免成为"又一个 Jira"**：功能上做减法，保持 Sprint + 仪式 + 简易看板的三角结构，不要加入 Epic/Story Point/燃尽图等高级功能，保持轻量定位。

Sources:
- [15 Best Agile Project Management Software Tools in 2026](https://www.kanbanchi.com/blog/best-agile-project-management-software)
- [Top 8 agile project management software platforms for 2026](https://monday.com/blog/rnd/agile-project-management-software/)
- [The 9 Best Project Management Software Tools for Startups](https://www.siit.io/blog/best-project-management-software-for-startups)
- [Taiga: Opensource agile project management](https://taiga.io/)
- [EasyRetro](https://easyretro.io/)
- [7 Best Retrospective Tools for Easy & Fun Retros](https://echometerapp.com/en/retrospective-tools-online/)
- [Open Source Scrum Tools](https://www.opensourcescrum.com/)
- [PlanBB - Free Kanban Tool](https://planbb.cc/)
