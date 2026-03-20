## Market Overview

敏捷迭代管理工具市场成熟但高度分化。头部工具（Jira、Monday.com、ClickUp）功能全面但对 3-10 人小团队来说过于复杂；轻量工具（Trello、Kanbanchi）虽简洁但缺乏迭代仪式（站会、回顾、评审）的结构化管理能力。市场存在明显的"中间地带"空白：**既能提供结构化的 Sprint 仪式管理，又足够轻量让小团队打开即用**。

关键机会点：
- 现有工具普遍将"仪式管理"作为附属功能，没有专门的仪式执行与记录流程
- 小团队常因工具过重而放弃使用，导致敏捷流程流于形式
- 站会记录、回顾行动项跟踪等需求被分散在多个工具中（如 Parabol 做回顾、Trello 做看板、Slack 做站会）
- 移动端友好的敏捷工具稀缺，而站会场景高度依赖手机

## Competitor Analysis

| Competitor | Core Features | Strengths | Weaknesses |
|---|---|---|---|
| **Jira** (Atlassian) | Sprint 管理、看板、Backlog、燃尽图、自定义工作流 | 功能最全面；免费支持 10 人；生态成熟 | 学习曲线陡峭；配置繁重；无内置仪式管理；小团队常感"杀鸡用牛刀" |
| **Trello** (Atlassian) | 看板、卡片、Power-Up 插件、自动化 | 极致简洁；拖拽直觉操作；免费版可用 | 无 Sprint 概念；无仪式管理；需靠插件拼凑敏捷流程 |
| **Linear** | Issue 追踪、Cycle（迭代）、Roadmap、自动化 | 速度极快；UI 精美；开发者友好 | 偏向工程团队；无仪式执行功能；需付费 |
| **Plane** (开源) | Sprint Cycle、看板、Backlog、燃尽图 | 开源可自托管；Jira 80% 功能平替；社区活跃 | 部署需 Docker；无仪式管理；仍在快速迭代中 |
| **Parabol** | 回顾会、站会、Sprint Planning、Check-in | 专注敏捷会议；免费开源；集成 Jira/GitHub | 只做仪式不做任务管理；需搭配其他工具；无看板 |
| **Zoho Sprints** | Sprint 规划、看板、时间表、速度图 | 轻量且功能完整；价格亲民 | 仪式管理弱；UI 较传统；生态锁定 Zoho |
| **Taiga** (开源) | Scrum/Kanban、Sprint、Epic、Backlog | 开源免费；原生 Scrum 支持；跨职能团队适配 | 无仪式执行记录；UI 略老旧；社区较小 |
| **EasyRetro** | 回顾会模板、行动项追踪、投票、导出 | 回顾会专精；上手快；免费可用 | 只做回顾；无迭代/任务管理；需搭配其他工具 |

## Feasibility

### 技术可行性：**高**

**前端**：
- React + Tailwind CSS 完全能支持看板拖拽、仪式表单、仪表盘等 UI 需求
- 看板拖拽可用 `@dnd-kit/core` 或 `react-beautiful-dnd`
- 移动端响应式用 Tailwind 原生支持即可，无需额外框架
- 日历/时间选择组件生态成熟

**后端**：
- SQLite 适合单团队模式，零配置部署
- Node.js + Express/Fastify 即可满足 REST API 需求
- 数据模型清晰：Sprint → Ceremony → Record → ActionItem，加上独立的 Task 看板

**关键技术决策**：
- 数据库：SQLite（轻量、嵌入式、无需独立数据库服务）
- 拖拽库：`@dnd-kit/core`（现代、可访问性好、体积小）
- 日期管理：`date-fns`（轻量，避免 moment.js 的体积）

**潜在技术挑战**：
- 看板拖拽在移动端的触控体验需要额外优化
- 仪式提醒在无后端推送的情况下只能做页面内轮询
- SQLite 并发写入限制（单团队场景下不成问题）

### 商业可行性：**中高**

- 差异化定位清晰：**仪式驱动的轻量敏捷管理**，区别于任务驱动的传统工具
- 目标用户痛点真实：小团队普遍反映仪式管理是痛点
- MVP 范围合理，2-3 周可交付
- 风险在于用户获取——需要说服团队从现有工具迁移

## Key Insights

1. **差异化核心在"仪式管理"**：市场上没有一个工具同时做好"迭代看板 + 仪式执行记录"。Parabol 只做仪式不做任务，Jira/Trello 只做任务不管仪式。将两者合一是最大的产品机会。

2. **"打开即用"是杀手级体验**：小团队最大的阻碍是工具的初始配置成本。无需注册、无需配置、打开浏览器就能创建 Sprint 和记录站会——这将是对标 Jira/Linear 的核心优势。

3. **站会三问是高频入口**：每日站会是团队使用频率最高的仪式（每天一次），应作为产品的核心入口和最优体验路径。移动端站会记录必须做到极致简单。

4. **回顾行动项跟踪是隐藏刚需**：多个竞品（EasyRetro、Parabol）验证了回顾会产出的行动项如果不跟踪就会被遗忘。将行动项自动关联到下一个 Sprint 是重要的差异化功能。

5. **不做燃尽图是正确的 MVP 决策**：燃尽图需要精确的故事点估算体系，对小团队来说是额外负担。MVP 用简单的"完成/总数"进度条即可。

6. **单团队模式降低技术复杂度 80%**：不需要用户认证、权限管理、多租户隔离，极大简化了后端架构和数据模型，使 SQLite 方案完全可行。

Sources:
- [15 Best Agile Project Management Software Tools in 2026](https://www.kanbanchi.com/blog/best-agile-project-management-software)
- [Top 10 Agile Project Management Tools 2026](https://productive.io/blog/agile-project-management-software/)
- [Plane - Open Source Jira Alternative](https://github.com/makeplane/plane)
- [Parabol - Free Agile Meeting Tool](https://www.parabol.co/)
- [11 Jira alternatives you can self-host in 2026](https://plane.so/blog/11-jira-alternatives-you-can-self-host-in-2026)
- [Best Sprint Planning Tools 2026](https://www.goodday.work/blog/best-sprint-planning-tools/)
- [List of Top 12 Best Agile Retrospective Tools in 2026](https://agilemania.com/best-agile-retrospective-tools)