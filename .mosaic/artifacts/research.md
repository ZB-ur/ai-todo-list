## Market Overview

敏捷迭代管理工具市场已相当成熟，但呈现明显的两极分化：一端是 Jira、Azure DevOps 等重型平台，功能全面但配置复杂、学习曲线陡峭；另一端是 Trello、PlanBB 等极简看板工具，缺乏迭代仪式（站会、回顾、评审）的结构化管理能力。

**市场缺口**：针对 3-10 人小型创业团队，将"迭代节奏管理"（仪式调度与执行记录）和"任务看板"整合到一个轻量级、零配置、打开即用的 Web 应用中，目前尚无明确的主导产品。Parabol 专注仪式但不含任务管理；Trello/PlanBB 专注任务但不含仪式管理。这正是本产品的差异化机会。

## Competitor Analysis

| Competitor | Core Features | Strengths | Weaknesses |
|---|---|---|---|
| **Jira** (Atlassian) | Sprint 管理、看板、Backlog、报表、自动化 | 功能最全面；10 人以下免费；生态完善 | 配置极复杂；学习曲线陡峭；无内置仪式执行工具；对小团队过于沉重 |
| **Trello** (Atlassian) | 看板卡片、Power-Up 插件、自动化 | 极简直觉；免费计划慷慨；上手零门槛 | 无 Sprint 概念；无仪式管理；缺乏迭代节奏感；需大量插件才能模拟敏捷流程 |
| **Taiga** (开源) | Scrum 看板、Backlog、Sprint 看板、燃尽图、Wiki | 开源免费；功能较全面；支持 Scrum/Kanban 切换 | 移动端体验差；无仪式执行记录功能；性能时有卡顿；自托管门槛高 |
| **Parabol** (开源) | 回顾会、站会、Sprint Poker、Check-in、AI 摘要 | 仪式引导出色；开源；AI 总结功能；Slack 集成 | 仅管理仪式不管理任务；不含看板/Sprint 周期管理；2 团队以上收费 $8/人/月 |
| **Zoho Sprints** | Sprint 管理、Backlog、时间追踪、报表 | 轻量级 Scrum；价格合理；移动端支持 | 仍需一定配置；无仪式执行记录；与 Zoho 生态绑定 |
| **Linear** | Issue 追踪、Sprint Cycle、看板、路线图 | UI 极致流畅；键盘优先；开发者体验好 | 面向工程团队而非全角色；无仪式管理；免费计划有限制 |
| **TeamRetro** | 回顾会、健康检查、行动项追踪 | 回顾会模板丰富；匿名反馈 | 仅回顾会专用；不含任务管理和 Sprint 管理 |
| **PlanBB** | 免费看板、无限项目和卡片 | 完全免费；极简设计 | 功能极少；无迭代概念；无仪式支持 |

## Feasibility

### 技术可行性：**高**

| 维度 | 评估 | 说明 |
|---|---|---|
| **前端** | ✅ 成熟方案 | React + Tailwind CSS 即可实现看板拖拽（react-beautiful-dnd / dnd-kit）、仪表盘、仪式表单 |
| **后端** | ✅ 轻量可行 | Node.js + SQLite 完全满足单团队场景，零运维成本；也可用 better-sqlite3 或 Drizzle ORM |
| **移动端适配** | ✅ 响应式即可 | Tailwind 的响应式系统足以实现移动端友好，无需原生开发 |
| **实时性** | ⚠️ MVP 可跳过 | 单团队 3-10 人场景下，轮询或页面刷新可接受；WebSocket 可留后续迭代 |
| **数据模型** | ✅ 清晰 | Sprint → Ceremony → Record；Sprint → Task；关系模型简单明确 |
| **部署** | ✅ 简单 | 单进程 Node.js + SQLite 文件，可部署在任何 VPS 或 Docker 中；打开即用 |

### 业务可行性：**中高**

- **差异化明确**：迭代节奏（仪式）+ 任务看板的一站式轻量组合是市场空白
- **目标用户痛点真实**：小团队常因工具过重或过简导致敏捷仪式流于形式
- **竞争风险**：Jira/Linear 等随时可能推出简化版；Parabol 可能扩展任务管理
- **商业化路径**：免费开源核心 → 多团队/集成/高级报表付费

## Key Insights

1. **仪式管理是核心差异点**：市面上任务看板工具众多，但"仪式调度 + 结构化执行记录"几乎无人做好。站会三问模板、回顾行动项追踪、评审记录应作为产品核心卖点。

2. **"打开即用"是关键体验**：目标用户是小创业团队，最怕复杂配置。零认证、零配置、浏览器直接访问应是第一优先级。可参考 PlanBB 的极简启动体验。

3. **移动端站会场景是刚需**：站会最常在手机上进行，移动端的站会记录输入体验（三问表单）必须优先优化，这是日活入口。

4. **仪式提醒驱动使用习惯**：MVP 阶段用页面内提示即可，但仪式到期提醒是养成用户习惯的关键机制，后续应扩展到 Slack/邮件通知。

5. **回顾行动项跨迭代追踪是高价值功能**：回顾会产出的行动项如果无人跟踪就失去意义。将行动项自动带入下一迭代的任务列表，是区别于竞品的实用创新。

6. **数据模型应以 Sprint 为中心**：Sprint 是一切的容器（任务、仪式、记录），而非以项目或看板为中心。这符合敏捷实践的心智模型。

7. **技术栈无风险**：React + Tailwind + Node.js + SQLite 全部是成熟稳定的技术选择，团队招聘和社区支持充足，无技术探索风险。

Sources:
- [15 Best Agile Project Management Software Tools in 2026](https://www.kanbanchi.com/blog/best-agile-project-management-software)
- [Parabol | Free Agile Meeting Tool for Remote Teams](https://www.parabol.co/)
- [Taiga: Your opensource agile project management software](https://taiga.io/)
- [The 5 best Kanban tools in 2026 | Zapier](https://zapier.com/blog/best-kanban-apps/)
- [7 Best Retrospective Tools for Easy & Fun Retros (2026)](https://echometerapp.com/en/retrospective-tools-online/)
- [Top 8 sprint planning tools for remote teams in 2026 | Jotform](https://www.jotform.com/blog/sprint-planning-tools/)
