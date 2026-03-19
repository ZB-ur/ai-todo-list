## Market Overview

移动科学计算器应用市场正处于稳步增长阶段。全球科学计算器市场（含物理与数字产品）规模预计从 2025 年的 4.2 亿美元增长至 2033 年的 7 亿美元（CAGR 5.8%）。金融及科学计算器 App 细分市场增速更快，CAGR 约 9.5%。STEM 教育在全球范围内的推广是主要驱动力，学生和工程师对手机端科学计算的需求持续增长。

Apple 在 iOS 18（2024 年 9 月）中对原生计算器进行了重大改版，新增了 Scientific 模式（可在竖屏使用）、Math Notes、历史记录和单位换算功能，标志着平台级玩家开始重视计算器体验，第三方计算器 App 需要在差异化设计和专业功能上做出更多努力。

拟物化/3D 质感设计（Neumorphism / Skeuomorphism）在 2025-2026 年呈现回归趋势，尤其在按钮密集型工具类 App 中，柔和阴影与 3D 凸起效果能提供直观的按压反馈感。但需注意 Neumorphism 的可访问性挑战——低对比度配色方案可能影响按钮层级识别。

Sources: [Business Research Insights](https://www.businessresearchinsights.com/market-reports/scientific-calculator-market-121206), [Dataintelo](https://dataintelo.com/report/global-scientific-calculator-market)

---

## Competitor Analysis

| Competitor | Core Features | Strengths | Weaknesses |
|---|---|---|---|
| **Apple Calculator (iOS 18+)** | 基础/科学/Math Notes 三模式、竖屏科学键盘、历史记录、单位换算、Apple Pencil 支持 | 系统预装零成本、与 Notes 深度集成、品牌信任度高 | 仅 iOS、UI 偏 Flat 无质感、功能仍较基础、无自定义布局 |
| **PCalc** | RPN 模式、可编程按钮、丰富单位换算/常量库、iCloud 同步、Apple Watch 支持 | 极高可定制性、专业 RPN 支持、跨 Apple 设备同步 | 仅 Apple 生态（$9.99）、界面偏传统、学习曲线较陡 |
| **HiPER Scientific Calculator** | 高精度算术、符号计算、微积分、矩阵、统计回归 | 功能深度接近桌面 CAS、免费版够用 | UI 设计朴素、交互偏复杂、移动端体验一般 |
| **Panecal Scientific Calculator** | 光标式公式编辑、语音输入（Pro）、横屏科学键盘 | 独特的公式编辑体验、适合现场工作 | UI 较老旧、品牌知名度低 |
| **Google Calculator (Android)** | 基础/科学计算、简洁 Material Design | 系统预装、Google 品质 UI、极简易用 | 功能有限、无高级科学计算、仅 Android |
| **Scientific Calculator Plus 991** | 模拟多款物理计算器、CAS 支持、图形计算 | 功能全面、免费、怀旧体验 | UI 拟物化但过于复古、广告干扰 |

Sources: [Technical Ustad](https://technicalustad.com/scientific-calculator-apps/), [TechUntold](https://www.techuntold.com/best-scientific-calculator-apps/), [PCalc Official](https://www.pcalc.com/ios/), [Macworld](https://www.macworld.com/article/560298/mac-gems-pcalc-review.html)

---

## Feasibility

### 技术可行性：🟢 高

| 维度 | 评估 | 说明 |
|---|---|---|
| 表达式解析引擎 | ✅ 成熟 | Shunting-yard 算法 / 递归下降解析器均为成熟方案，支持运算符优先级和括号嵌套 |
| 科学函数库 | ✅ 成熟 | Math 标准库覆盖 sin/cos/tan/log/pow/sqrt/factorial 等全部需求函数 |
| DEG/RAD 切换 | ✅ 简单 | 角度-弧度转换公式 trivial |
| 竖屏/横屏布局 | ✅ 标准 | iOS Auto Layout / Android ConstraintLayout + 屏幕方向检测为标准实践 |
| 拟物化 3D UI | ⚠️ 中等 | 需精细的阴影层级、渐变和动画；Neumorphism 需要关注可访问性（对比度） |
| 跨平台 (iOS + Android) | ✅ 可行 | React Native / Flutter 均可实现；或原生双端开发 |

### 设计可行性：🟢 高

- 拟物化设计在计算器场景天然适配——按键密集、需要按压反馈
- 浅色配色方案比深色 Neumorphism 更易实现可访问性（白底灰阴影对比度更佳）
- 竖屏基础键盘 + 横屏展开科学键盘为行业标准模式，用户认知成本低

### 业务可行性：🟡 中等

- 市场竞争激烈，尤其面对 Apple/Google 原生计算器的零成本竞争
- 差异化关键在于：**拟物化 3D 质感设计**（当前市场空白）+ **跨平台**（PCalc 仅 Apple）
- 变现路径：免费基础版 + Pro 付费（$3.99-$9.99）或一次性买断

---

## Key Insights

1. **设计差异化是核心护城河**：当前市场的科学计算器 App 在 UI 设计上普遍偏传统或偏 Flat。拟物化 3D 质感 + 浅色现代配色的组合在竞品中几乎空白，这是最大的差异化机会。

2. **iOS 18 提高了基线**：Apple 原生计算器已支持竖屏科学模式，MVP 不能仅靠"竖屏也能用科学计算"来吸引用户，需要在视觉体验和交互细节上形成明显代差。

3. **可访问性是 Neumorphism 的关键风险**：低对比度是 Neumorphism 设计的已知问题。设计稿需要明确的对比度规范（WCAG AA 标准），确保按键边界和文字在各种光线条件下清晰可辨。

4. **横屏科学键盘布局是关键体验**：核心场景中横屏展开完整科学键盘是高频使用场景，按键分区（数字区/运算符区/科学函数区）的合理布局直接决定使用效率。

5. **跨平台是市场机会**：PCalc（最受好评的专业计算器）仅限 Apple 生态，HiPER 虽跨平台但 UI 体验一般。一款设计精美的跨平台科学计算器有明确的市场缺口。

6. **MVP 边界合理**：排除历史记录、图形绘制、公式编辑器等高级功能是正确的。Apple Calculator 已有历史记录，但计算器的核心价值仍在"快速准确地完成计算"，而非功能堆砌。

Sources: [Big Human - Neumorphism Guide](https://www.bighuman.com/blog/neumorphism), [MacObserver - iOS 18 Calculator](https://www.macobserver.com/iphone/features-calculator-ios-ipados-18/), [UIKits - Design Trends](https://www.uinkits.com/blog-post/neumorphism-vs-skeuomorphism-vs-glassmorphism---ui-design-trends-explained)