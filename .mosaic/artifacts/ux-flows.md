## User Journeys

### Flow 1: Basic Calculation
1. User opens the calculator → sees empty display (expression area blank, result area shows `0`)
2. User taps/clicks digit buttons (or types on keyboard) → digits appear in result area; expression area remains blank until an operator is entered
3. User taps an operator (+, −, ×, ÷) → expression area shows `<number> <operator>`, result area resets for next operand
4. User enters second operand → digits appear in result area
5. User can chain operators → expression area extends (e.g. `3 + 5 ×`), intermediate result updates
6. User taps `=` (or presses Enter) → expression area shows full expression with `=`, result area shows final result
7. User starts a new input after result → if digit is pressed, resets; if operator is pressed, continues from result

### Flow 2: Correction & Clear
1. User taps **Backspace** (⌫) → deletes last digit from current operand
2. User taps **C** → clears current entry only (resets current operand to `0`)
3. User taps **AC** (long-press C or second tap) → clears entire expression and result, returns to initial state

### Flow 3: Special Operators
1. User taps **±** → toggles sign of current operand (positive ↔ negative), display updates immediately
2. User taps **%** → converts current operand to percentage (÷ 100), display updates immediately

### Flow 4: Error Handling (Division by Zero)
1. User enters expression like `5 ÷ 0` and taps `=`
2. Result area shows `Error` (or `Cannot divide by zero`)
3. Expression area shows the attempted expression
4. User taps any digit or **AC** → clears error, returns to initial state

### Flow 5: Keyboard Input
1. User presses `0-9` or `.` → same as tapping digit buttons
2. User presses `+`, `-`, `*`, `/` → maps to ＋, −, ×, ÷
3. User presses `Enter` → equals
4. User presses `Backspace` → delete last digit
5. User presses `Escape` → AC (full clear)

### Flow 6: Calculation History
1. After each completed calculation (`=` pressed), the record `expression = result` is appended to history panel
2. History panel displays up to 20 most recent records, newest on top
3. User clicks a history record → its result is loaded into the result area as the starting value for a new calculation
4. History persists across page reloads via localStorage
5. On desktop: history panel is visible on the right side; on mobile: history is accessible via a toggle/slide-up panel

### Flow 7: Responsive Layout
1. **Desktop (≥768px)**: calculator is a centered card (~360px wide), history panel to the right (~240px)
2. **Mobile (<768px)**: calculator fills screen width, buttons are large (min 48px touch target), history is hidden behind a toggle button at the top

## Interaction Rules

- **Input feedback**: All buttons show `hover` state (slight lighten/darken) and `active` state (scale down or color shift) on press. Transition duration ~100ms.
- **Decimal point**: Only one `.` allowed per operand. Button is visually disabled (dimmed) if already present.
- **Operator chaining**: Pressing a new operator before entering the next operand replaces the previous operator (no double operators).
- **Leading zero prevention**: Entering `0` then another digit replaces `0` (no `007`). `0.` is allowed.
- **Max digit length**: Operands capped at 15 digits to prevent overflow. Further digit presses are ignored.
- **Result precision**: Floating-point results are rounded to remove artifacts (e.g. `0.1 + 0.2 = 0.3`, not `0.30000000000000004`). Display up to 10 significant digits.
- **Keyboard focus**: Calculator captures keyboard events when the page is focused. No visible text input field.
- **History overflow**: When history exceeds 20 records, the oldest record is removed.

## Component Inventory

- **Calculator**: Root container; manages state (expression, current operand, operator, history). Renders Display + ButtonPanel + HistoryPanel.
- **Display**: Shows expression (top, smaller font, muted color) and current value/result (bottom, larger font, bold). Truncates with ellipsis if text overflows.
- **ButtonPanel**: 5×4 grid of buttons. Row 1: AC, ±, %, ÷. Row 2: 7, 8, 9, ×. Row 3: 4, 5, 6, −. Row 4: 1, 2, 3, +. Row 5: 0 (span 2), ., =.
- **CalcButton**: Individual button. Props: label, type (digit | operator | action | equals), onClick, disabled. Renders appropriate color scheme per type.
- **HistoryPanel**: Scrollable list of history records. Desktop: always visible sidebar. Mobile: slide-up overlay toggled by HistoryToggle.
- **HistoryRecord**: Single history entry displaying `expression = result`. Clickable, with hover highlight.
- **HistoryToggle**: Mobile-only button to show/hide HistoryPanel. Shows record count badge.