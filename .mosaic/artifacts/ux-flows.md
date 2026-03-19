## User Journeys

### Flow 1: Sprint Management (sprint-lifecycle)
**Landing → Dashboard → Create Sprint → Configure Ceremonies → Active Sprint**

1. 用户首次打开应用 → 显示空状态 Dashboard，引导创建第一个 Sprint
2. 点击「新建迭代」按钮 → 打开 Sprint 创建表单（名称、起止日期、目标描述）
3. 提交表单 → 系统自动填充默认仪式模板（站会/评审/回顾/计划会）
4. 用户可编辑仪式配置（修改时间、频率、添加自定义仪式）→ 确认保存
5. Sprint 激活 → Dashboard 显示当前 Sprint 信息
6. 编辑 Sprint：Dashboard 或 Sprint 列表中点击编辑 → 修改表单 → 保存
7. 结束 Sprint：点击「结束迭代」→ 确认对话框 → Sprint 归档，可创建新 Sprint
8. 查看历史：导航到 Sprint 列表 → 查看已归档 Sprint 详情

### Flow 2: Daily Standup (standup-flow)
**Dashboard 提醒 → 站会页面 → 选择参与者 → 填写三问 → 提交**

1. 用户打开 Dashboard → 看到今日站会 banner 提醒
2. 点击提醒或导航到站会页面 → 显示今日站会记录界面
3. 选择/输入参与者名称 → 进入三问快速输入表单
4. 依次填写：昨天做了什么、今天计划、阻塞事项（每项支持快捷短语）
5. 点击提交（移动端 ≤3 次点击完成）→ 记录保存，显示已提交成员列表
6. 其他成员重复步骤 3-5
7. 查看站会历史：按日期筛选 → 展开查看每位成员的三问记录

### Flow 3: Sprint Review (review-flow)
**Dashboard → 评审记录页 → 添加演示项 → 记录反馈 → 保存**

1. 仪式提醒触发或用户主动导航 → 进入 Sprint 评审记录页
2. 点击「添加演示项」→ 填写演示内容描述
3. 针对每个演示项 → 添加反馈意见（逐条记录）
4. 记录决策结论 → 保存
5. 评审记录自动关联当前 Sprint，可在 Sprint 详情中回看

### Flow 4: Sprint Retrospective (retro-flow)
**Dashboard → 回顾记录页 → 分类记录 → 标记行动项 → 行动项流转到看板**

1. 进入回顾记录页面 → 显示三栏分类视图（做得好 / 需改进 / 行动项）
2. 在对应分类中添加条目 → 输入内容并提交
3. 「行动项」类条目自动标记为待跟踪状态
4. 保存回顾记录 → 未完成行动项在下一迭代 Dashboard 中显示提醒
5. 行动项可一键生成为任务卡片 → 自动出现在看板 To Do 列

### Flow 5: Task Board (task-board-flow)
**导航到看板 → 查看三列布局 → 创建/拖拽任务 → 管理任务**

1. 进入任务看板 → 显示当前 Sprint 的三列看板（To Do / In Progress / Done）
2. 点击「添加任务」→ 填写标题、描述、负责人名称 → 提交
3. 任务卡片出现在 To Do 列
4. 拖拽任务卡片到其他列 → 状态自动更新
5. 点击任务卡片 → 查看详情 / 编辑 / 删除
6. 回顾行动项生成的任务带有特殊标记，便于追踪来源

### Flow 6: Dashboard Overview (dashboard-flow)
**打开应用 → Dashboard 首页 → 查看 Sprint 状态 / 仪式 / 任务统计 / 行动项**

1. 打开应用 → 自动进入 Dashboard 首页
2. 查看当前 Sprint 卡片：名称 + 剩余天数进度条
3. 查看「即将到来的仪式」列表（未来 3 天）→ 点击可快速进入仪式记录页
4. 查看任务完成率统计：各列数量柱状展示
5. 查看未完成回顾行动项提醒列表 → 点击可跳转到行动项详情
6. 查看今日仪式 banner 提醒 → 过期未执行的仪式高亮显示

---

## Interaction Rules

### 表单验证
- **验证时机**：字段失焦（blur）时即时验证 + 提交时全量验证
- Sprint 名称：必填，最大 50 字符
- Sprint 日期：结束日期必须晚于开始日期；不可与已有活跃 Sprint 日期重叠
- 任务标题：必填，最大 100 字符
- 参与者名称：必填，自动补全已使用过的名称
- 仪式日期时间：必须在所属 Sprint 日期范围内

### 错误显示
- 字段级错误：红色边框 + 字段下方红色提示文字
- 全局错误（如网络异常）：页面顶部 Toast 通知，自动 5 秒消失，可手动关闭
- 活跃 Sprint 冲突：创建 Sprint 时若已有活跃 Sprint，显示 inline 警告并禁用提交按钮

### 加载状态
- 页面级加载：骨架屏（Skeleton）占位
- 按钮操作：按钮显示 spinner + 禁用，防止重复提交
- 看板拖拽：乐观更新，拖拽即刻生效；失败时回滚并 Toast 提示
- 列表加载：内容区域 spinner

### 拖拽交互（看板）
- 使用 dnd-kit 实现
- 拖拽开始：卡片抬升阴影 + 原位留半透明占位
- 拖拽中：目标列高亮可放置区域
- 放置成功：卡片动画归位 + 乐观更新状态
- 放置失败/取消：回到原位动画
- 移动端：长按 300ms 触发拖拽

### 响应式行为
- 桌面端（≥1024px）：侧边导航 + 多列布局
- 平板端（768-1023px）：可折叠侧边导航 + 自适应列
- 移动端（<768px）：底部 Tab 导航 + 单列布局；看板三列改为可横向滑动
- 站会快速输入模式（移动端）：全屏表单，大按钮，≤3 次点击完成

### 删除确认
- 所有删除操作需二次确认对话框
- Sprint 删除：警告关联数据（仪式记录、任务）将一并删除
- 任务删除：简单确认即可

### 空状态
- 无 Sprint：引导卡片「创建你的第一个迭代」
- 无任务：看板中显示「将任务添加到看板」引导
- 无站会记录：显示「今天还没有人填写站会」提示
- 无仪式配置：显示默认模板预览 + 「使用默认模板」按钮

### 仪式提醒规则
- 今日有待执行仪式：Dashboard 顶部显示蓝色 Banner
- 过期未执行仪式：Banner 变为橙色/红色高亮
- 提醒仅在页面内展示，无外部推送

### 导航结构
- 一级导航项：Dashboard / 看板 / 仪式 / Sprint 列表
- 仪式子导航：站会 / 评审 / 回顾 / 计划会
- 当前 Sprint 名称始终在导航栏显示

---

## Component Inventory

### 布局组件
- **AppShell**: 应用顶层布局容器，包含导航栏和内容区域，处理响应式断点切换
- **Sidebar**: 桌面端侧边导航栏，包含 logo、导航链接列表、当前 Sprint 信息
- **BottomTabBar**: 移动端底部 Tab 导航，4 个主要导航项 + 活跃指示器
- **PageHeader**: 页面标题栏，包含标题、面包屑、操作按钮区

### Dashboard 组件
- **SprintProgressCard**: 当前 Sprint 概览卡片，显示名称、日期范围、剩余天数进度条
- **UpcomingCeremoniesCard**: 即将到来的仪式列表卡片（未来 3 天），每项显示仪式类型、时间、快捷入口
- **TaskStatsCard**: 任务完成率统计卡片，显示各列（To Do / In Progress / Done）的数量
- **ActionItemsReminderCard**: 未完成回顾行动项提醒卡片，列出待跟踪的行动项
- **CeremonyBanner**: 页面顶部仪式提醒横幅，支持蓝色（今日）/ 橙色（过期）状态

### Sprint 管理组件
- **SprintForm**: Sprint 创建/编辑表单，包含名称、起止日期选择器、目标描述文本域
- **SprintList**: 历史 Sprint 列表，按时间倒序排列，显示状态标签（活跃/已归档）
- **SprintCard**: Sprint 摘要卡片，用于列表展示，显示核心信息 + 操作菜单

### 仪式管理组件
- **CeremonyConfigPanel**: 仪式配置面板，表格式编辑仪式类型、频率、时间
- **CeremonyTypeTag**: 仪式类型标签（站会/评审/回顾/计划会），带颜色编码

### 站会组件
- **StandupQuickInput**: 站会三问快速输入表单，移动端优化的大按钮全屏模式
- **ParticipantSelector**: 参与者选择器，下拉选择已有名称或输入新名称
- **StandupHistoryList**: 站会历史按日期分组列表
- **StandupEntryCard**: 单个参与者的站会记录卡片，显示三问内容

### 评审组件
- **ReviewRecordForm**: 评审记录表单，支持动态添加演示项、反馈条目和决策结论
- **DemoItemCard**: 单个演示项卡片，含描述和关联反馈列表
- **FeedbackEntry**: 反馈意见条目，内联编辑模式

### 回顾组件
- **RetroBoard**: 回顾三栏视图（做得好 / 需改进 / 行动项），支持在各栏添加条目
- **RetroItemCard**: 回顾条目卡片，行动项类带跟踪状态指示
- **ActionItemBadge**: 行动项状态徽章（待跟踪 / 已转任务 / 已完成）

### 看板组件
- **KanbanBoard**: 三列看板容器，集成 dnd-kit 拖拽上下文
- **KanbanColumn**: 看板单列，包含列标题、任务数量、任务列表、可放置区域指示
- **TaskCard**: 任务卡片，显示标题、负责人、来源标记（行动项标记）；可拖拽
- **TaskForm**: 任务创建/编辑表单，包含标题、描述、负责人选择
- **TaskDetailDrawer**: 任务详情抽屉面板，侧滑展示完整信息 + 编辑/删除操作

### 通用组件
- **ConfirmDialog**: 通用确认对话框，支持自定义标题、描述、确认/取消按钮文案
- **Toast**: 全局 Toast 通知，支持 success / error / warning 类型，自动消失
- **EmptyState**: 空状态占位组件，图标 + 描述 + CTA 按钮
- **SkeletonLoader**: 骨架屏加载占位，适配卡片 / 列表 / 表单等形态
- **ProgressBar**: 通用进度条，支持百分比和颜色配置
- **DatePicker**: 日期选择器，支持范围选择模式
- **FormField**: 表单字段容器，统一标签 + 输入 + 错误提示布局
- **Badge**: 通用徽章/标签，支持多色方案
- **IconButton**: 图标按钮，用于操作菜单和工具栏
- **SpinnerButton**: 带加载状态的提交按钮，loading 时显示 spinner 并禁用