## User Journeys

### Flow 1: Sprint Management (sprint-lifecycle)
**Covers: F-001, F-007**

```
打开应用 → 仪表盘首页（无活跃 Sprint 时显示空状态引导）
  → 点击"新建 Sprint" → 填写名称、起止日期、迭代目标 → 保存
  → 自动跳转仪表盘，显示当前 Sprint 进度概览
  → Sprint 进行中可编辑信息 → 保存更新
  → Sprint 结束 → 点击"结束 Sprint" → 确认弹窗 → 归档
  → 查看历史迭代列表 → 点击某条查看详情（只读）
```

**关键规则：**
- 已有活跃 Sprint 时，"新建 Sprint"按钮禁用并提示"请先结束当前 Sprint"
- 删除 Sprint 需二次确认，关联数据（仪式记录、任务）一并删除
- 起止日期校验：结束日期必须晚于开始日期

---

### Flow 2: Ceremony Configuration (ceremony-setup)
**Covers: F-002, F-008**

```
进入当前 Sprint 详情 → 切换到"仪式配置"标签
  → 系统预填默认仪式（Daily Standup / Planning / Review / Retro）
  → 用户可编辑各仪式：修改名称、频率、预定日期时间
  → 可添加自定义仪式类型
  → 保存配置
  → 仪表盘自动显示即将到来的仪式倒计时
  → 仪式临近时页面顶部横幅提醒
```

**关键规则：**
- Daily Standup 默认频率"每日"，自动生成 Sprint 周期内每天的日程
- 一次性仪式（Planning / Review / Retro）需指定具体日期时间
- 仪式时间不可早于 Sprint 开始日期或晚于结束日期

---

### Flow 3: Daily Standup Record (standup-flow)
**Covers: F-003, F-009**

```
仪表盘"今日仪式"区域 → 点击"Daily Standup"
  → 进入站会记录页（移动端优化布局）
  → 选择日期（默认今天）→ 显示成员列表
  → 逐个成员填写三问模板：
    - 昨天做了什么
    - 今天计划做什么
    - 有什么阻塞
  → 提交保存
  → 可按日期查看历史站会记录
```

**关键规则：**
- 移动端优先：大输入框、大按钮、单列纵向布局
- 同一天同一成员只能有一条记录，重复提交为更新
- 未填写的成员显示"未提交"标记
- 阻塞项高亮显示（红色标记）

---

### Flow 4: Sprint Review Record (review-flow)
**Covers: F-004**

```
仪表盘或仪式列表 → 点击"Sprint Review"
  → 进入评审会记录页
  → 填写评审结论（富文本）
  → 添加演示反馈条目（可多条，每条含标题和内容）
  → 添加决策事项条目（可多条，含决策内容和状态）
  → 保存 → 自动关联当前 Sprint
```

---

### Flow 5: Sprint Retrospective Record (retro-flow)
**Covers: F-005, F-006**

```
仪表盘或仪式列表 → 点击"Sprint Retrospective"
  → 进入回顾会记录页（三栏布局）
  → "做得好"栏：添加条目
  → "待改进"栏：添加条目
  → "行动项"栏：添加条目（含标题、描述、负责人）
  → 保存
  → 行动项自动生成为任务卡片，进入下一 Sprint 的 To Do 列
```

**关键规则：**
- 三栏在桌面端并排显示，移动端纵向堆叠
- 行动项转任务时自动继承负责人标签
- 若无下一 Sprint，行动项暂存，待新 Sprint 创建时自动导入

---

### Flow 6: Task Board (kanban-flow)
**Covers: F-006, F-009**

```
导航栏 → 点击"任务看板"
  → 显示当前 Sprint 的三列看板：To Do / In Progress / Done
  → 点击"新建任务" → 填写标题、描述、选择负责人 → 保存到 To Do 列
  → 拖拽卡片在列间移动（桌面端）
  → 移动端：点击卡片 → 弹出操作菜单 → 选择"移到下一列"
  → 点击卡片查看详情 → 可编辑 / 删除
```

**关键规则：**
- 拖拽使用 HTML5 Drag & Drop，移动端降级为按钮操作
- 任务卡片显示：标题、负责人头像标签、当前状态色带
- 无活跃 Sprint 时看板显示空状态引导

---

### Flow 7: Member Management (member-flow)
**Covers: F-009**

```
导航栏 → 点击"成员" → 显示成员列表
  → 点击"添加成员" → 输入名称、选择头像颜色标签 → 保存
  → 可编辑成员名称和标签
  → 可删除成员（需确认，已关联的记录保留成员名称快照）
```

---

### Flow 8: Dashboard Overview (dashboard-flow)
**Covers: F-007, F-008**

```
打开应用 → 仪表盘首页
  → 顶部：当前 Sprint 名称 + 进度条（任务完成比例）
  → 今日仪式高亮区域（带倒计时）
  → 仪式临近横幅提醒（距开始 ≤ 30 分钟时触发）
  → 未完成任务概览（按负责人分组或列表）
  → 最近仪式记录摘要（最近 3 条）
  → 快捷操作按钮：记录站会 / 新建任务 / 查看看板
```

---

## Interaction Rules

### 表单验证
- **验证时机**：字段失焦（blur）时逐字段验证 + 提交时全量验证
- **必填字段**：红色边框 + 字段下方错误提示文字
- **日期校验**：结束日期 < 开始日期时，结束日期字段标红并提示
- **重复校验**：Sprint 名称不可重复，失焦时异步检查

### 错误显示
- **字段级错误**：红色边框 + 字段下方红色提示文字（内联）
- **全局错误**：页面顶部 Toast 通知（自动 5 秒消失，可手动关闭）
- **API 错误**：Toast 显示友好错误信息，控制台记录详细错误
- **网络错误**：Toast 提示"网络连接异常，请稍后重试"

### 加载状态
- **页面加载**：骨架屏（Skeleton）占位
- **按钮操作**：按钮内 Spinner + 禁用状态，防止重复提交
- **拖拽操作**：卡片移动后立即更新 UI（乐观更新），失败时回滚并 Toast 提示
- **列表加载**：列表区域 Skeleton，保持布局稳定

### 确认操作
- **删除操作**：弹出确认对话框，显示影响范围（如"将同时删除 N 条仪式记录和 M 个任务"）
- **结束 Sprint**：确认对话框，显示未完成任务数量

### 响应式断点
- **移动端**：< 768px，单列布局，底部导航栏
- **平板**：768px - 1024px，两列看板 + 侧边导航
- **桌面**：> 1024px，三列看板 + 侧边导航

### 空状态
- 每个主要页面都有空状态设计，包含引导文案和操作按钮
- 无活跃 Sprint：仪表盘显示"创建你的第一个 Sprint"引导卡片
- 无任务：看板显示"添加第一个任务"引导
- 无成员：站会记录提示"请先添加团队成员"

### 仪式提醒规则
- 仪式开始前 30 分钟：仪表盘顶部显示提醒横幅
- 仪式进行中：横幅变为"进行中"状态（绿色）
- 已过期未记录的仪式：显示"未记录"徽章（橙色）
- 轮询频率：每 60 秒检查一次仪式时间状态

---

## Component Inventory

### 布局组件
- **AppShell**: 应用外壳，包含侧边/底部导航、顶部栏和内容区域，处理响应式布局切换
- **Sidebar**: 桌面端侧边导航栏，包含 Sprint 信息摘要和主导航链接
- **BottomNav**: 移动端底部导航栏，包含主要页面入口图标
- **PageHeader**: 页面标题栏，含面包屑和操作按钮区域

### 仪表盘组件
- **DashboardPage**: 仪表盘首页容器，编排各仪表盘卡片
- **SprintProgressCard**: 显示当前 Sprint 名称、日期范围和任务完成进度条
- **TodayCeremonyCard**: 今日仪式高亮区域，显示仪式名称、时间和倒计时
- **CeremonyReminderBanner**: 页面顶部仪式提醒横幅，支持临近/进行中/已过期状态
- **UnfinishedTasksCard**: 未完成任务概览卡片，列表形式展示
- **RecentRecordsCard**: 最近仪式记录摘要卡片

### Sprint 组件
- **SprintListPage**: 历史 Sprint 列表页面
- **SprintFormModal**: Sprint 创建/编辑表单模态框（名称、日期、目标）
- **SprintDetailPage**: Sprint 详情页，含仪式配置标签页

### 仪式组件
- **CeremonyConfigPanel**: 仪式配置面板，列出当前 Sprint 所有仪式并支持编辑
- **CeremonyFormModal**: 仪式创建/编辑表单模态框
- **CeremonyList**: 仪式列表，显示状态标签（已完成/待进行/已过期）

### 站会组件
- **StandupRecordPage**: 站会记录主页面（移动端优化布局）
- **StandupMemberForm**: 单个成员的三问填写表单（昨天/今天/阻塞）
- **StandupHistoryList**: 历史站会记录按日期分组列表
- **BlockerHighlight**: 阻塞项高亮标记组件

### 评审会组件
- **ReviewRecordPage**: Sprint 评审会记录页面
- **FeedbackItem**: 演示反馈条目（可增删）
- **DecisionItem**: 决策事项条目（可增删，含状态标记）

### 回顾会组件
- **RetroRecordPage**: Sprint 回顾会记录页面（三栏/单栏响应式）
- **RetroColumn**: 回顾会单栏组件（做得好/待改进/行动项），支持添加条目
- **ActionItemForm**: 行动项表单（含标题、描述、负责人选择）

### 任务看板组件
- **TaskBoardPage**: 任务看板主页面
- **KanbanColumn**: 看板列组件（To Do / In Progress / Done），支持拖拽放置
- **TaskCard**: 任务卡片，显示标题、负责人标签、状态色带，支持拖拽
- **TaskFormModal**: 任务创建/编辑表单模态框
- **TaskDetailDrawer**: 任务详情抽屉面板

### 成员组件
- **MemberListPage**: 成员管理页面
- **MemberFormModal**: 成员创建/编辑表单模态框（名称 + 头像颜色）
- **MemberAvatar**: 成员头像标签（颜色圆形 + 首字母），全局复用
- **MemberSelect**: 成员选择下拉组件，用于任务分配和站会记录

### 通用组件
- **ConfirmDialog**: 确认操作对话框（删除、结束 Sprint 等）
- **Toast**: 全局消息通知（成功/错误/警告）
- **Skeleton**: 骨架屏加载占位组件
- **EmptyState**: 空状态引导组件（含图标、文案、操作按钮）
- **ProgressBar**: 进度条组件（用于 Sprint 进度展示）
- **CountdownBadge**: 倒计时徽章组件（用于仪式倒计时）
- **DatePicker**: 日期选择器
- **Modal**: 模态框基础组件
- **Drawer**: 抽屉面板基础组件
- **StatusBadge**: 状态徽章（多色，用于仪式和任务状态标记）