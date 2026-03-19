## Market Overview

敏捷迭代管理工具市场在 2026 年已经相当成熟，但呈现明显的两极分化：

- **重量级工具**（Jira、Azure DevOps）：功能全面但配置复杂，对 3-10 人小团队来说学习成本过高、信噪比低
- **轻量看板工具**（Trello、Linear）：界面简洁但缺乏对敏捷仪式（站会、回顾、评审）的结构化支持
- **仪式专项工具**（Parabol、TeamRetro）：专注于会议流程但不包含任务管理，团队需要同时使用多个工具

**市场机会**：目前没有一款产品能在"轻量任务看板 + 结构化仪式管理"这个交叉点上做到足够好。小型创业团队被迫在"用 Jira 但太重"和"用 Trello 但仪式靠人记"之间选择。一个集成了迭代节奏管理和简易看板的轻量工具存在明确的市场空白。

## Competitor Analysis

| Competitor | Core Features | Strengths | Weaknesses |
|---|---|---|---|
| **Jira** | Sprint 管理、看板、Backlog、燃尽图、高级报表 | 功能最全面；生态集成丰富；企业级权限 | 配置复杂，上手成本高；小团队功能过剩；界面臃肿 |
| **Trello** | Kanban 看板、卡片管理、Power-Ups 扩展 | 极简直觉式 UI；免费计划慷慨；上手即用 | 无原生 Sprint/仪式支持；缺乏迭代节奏管理；扩展依赖第三方 |
| **Linear** | Cycles（Sprint）、Issue 跟踪、路线图、键盘优先 | 极致性能和设计美学；开发者友好；Cycles 自动容量估算 | 侧重开发团队而非全职能团队；无仪式管理；免费版人数有限 |
| **Parabol** | 回顾、Sprint Poker、站会、签到、团队健康检查 | 仪式专项最佳；匿名反馈；自动生成会议纪要 | 不含任务管理/看板；需配合其他工具使用；免费版限 2 个团队 |
| **Taiga** | Scrum/Kanban 看板、Backlog、Sprint 管理、Epic | 开源免费；可自托管；Scrum + Kanban 双模式 | UI 较老旧；仪式管理薄弱；社区维护活跃度一般 |
| **Zoho Sprints** | Sprint 计划、Backlog 管理、时间追踪、速率图 | 轻量级 Scrum 工具；价格友好；与 Zoho 生态集成 | 仪式记录功能弱；移动端体验一般；独立于 Zoho 生态价值有限 |
| **Scrumwise** | 拖拽 Sprint 规划、Backlog 梳理、燃尽图 | 专注 Scrum、界面简洁 | 功能较少；无仪式管理；用户基数小 |

Sources: [Kanbanchi - 15 Best Agile PM Tools](https://www.kanbanchi.com/blog/best-agile-project-management-software), [Parabol](https://www.parabol.co/), [Linear](https://linear.app/), [Taiga](https://taiga.io/), [Zapier - Best Kanban Apps](https://zapier.com/blog/best-kanban-apps/)

## Feasibility

### 技术可行性：**高**

| 维度 | 评估 | 说明 |
|---|---|---|
| 前端 | ✅ 完全可行 | React + Tailwind CSS 可快速构建看板拖拽、仪式表单、仪表盘；移动端用响应式布局即可 |
| 后端 | ✅ 完全可行 | Node.js + SQLite 满足单团队模式下的所有持久化需求，无需复杂数据库 |
| 核心功能复杂度 | ✅ 低-中 | Sprint CRUD、任务看板、仪式记录都是标准 CRUD + 状态机，无需复杂算法 |
| 拖拽交互 | ✅ 成熟方案 | dnd-kit 或 @hello-pangea/dnd 等库成熟稳定 |
| 移动端适配 | ⚠️ 需关注 | 看板拖拽在触屏上体验需要额外调优；站会三问表单天然适合移动端 |
| 实时协作 | ℹ️ MVP 可跳过 | 单团队 + 无认证模式下，MVP 无需 WebSocket 实时同步 |

### 业务可行性：**中-高**

- **差异化明确**：仪式管理 + 轻量看板的组合在市场上缺乏直接竞品
- **目标用户痛点真实**：小团队确实面临"仪式流于形式"的问题，尤其远程团队
- **MVP 范围合理**：无认证、单团队、无外部集成，显著降低了 MVP 复杂度
- **风险**：用户可能已习惯现有工具组合（如 Trello + Parabol），迁移意愿需验证

## Key Insights

1. **仪式管理是核心差异化**：竞品在看板上已经足够好，但在仪式结构化记录（站会三问、回顾行动项跟踪）上普遍缺位。MVP 应将仪式管理作为第一卖点，看板作为配套功能
2. **"打开即用"是关键竞争力**：去掉认证和配置流程，让团队 30 秒内进入第一个 Sprint，这比 Jira 和 Taiga 的初始配置体验好一个量级
3. **移动端站会体验是刚需**：站会经常在手机上完成，站会记录页面必须做到移动端优先设计——大按钮、简洁输入、快速提交
4. **回顾行动项跨迭代追踪**：Parabol 生成行动项但不追踪执行，这是可以超越的点。行动项应自动带入下一个 Sprint 的回顾中检查完成情况
5. **迭代仪表盘要"一屏看完"**：小团队不需要复杂报表，需要的是"今天该干啥、这个 Sprint 进度如何、下一个仪式是什么"的一屏概览
6. **SQLite 单文件数据库完全够用**：单团队模式下 SQLite 是最优选择——零配置、部署简单、备份就是拷贝文件，符合"轻量"定位
7. **技术栈无风险项**：React + Tailwind + Node.js + SQLite 全部是成熟技术，团队容易招人，社区资源丰富