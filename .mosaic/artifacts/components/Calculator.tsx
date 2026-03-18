import React, { useState, useCallback, useEffect } from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { HistoryPanel } from './HistoryPanel';
import { HistoryToggle } from './HistoryToggle';

interface HistoryEntry {
  expression: string;
  result: string;
  timestamp: number;
}

const HISTORY_KEY = 'calc_history';
const MAX_HISTORY = 20;

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.records) ? parsed.records : [];
  } catch {
    return [];
  }
}

function saveHistory(records: HistoryEntry[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify({ records }));
}

function evaluate(expression: string): string {
  try {
    const sanitized = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/[^0-9+\-*/.() ]/g, '');
    const result = new Function(`"use strict"; return (${sanitized})`)();
    if (!isFinite(result)) return 'Error';
    return parseFloat(result.toFixed(10)).toString();
  } catch {
    return 'Error';
  }
}

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [currentOp, setCurrentOp] = useState<string | null>(null);
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [resetNext, setResetNext] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>(loadHistory);
  const [historyOpen, setHistoryOpen] = useState(false);

  const pushHistory = useCallback((expr: string, result: string) => {
    setHistory((prev) => {
      const entry: HistoryEntry = { expression: expr, result, timestamp: Date.now() };
      const next = [entry, ...prev].slice(0, MAX_HISTORY);
      saveHistory(next);
      return next;
    });
  }, []);

  const handleDigit = useCallback((digit: string) => {
    setDisplay((prev) => {
      if (resetNext || prev === '0') {
        setResetNext(false);
        return digit;
      }
      return prev + digit;
    });
    setResetNext(false);
  }, [resetNext]);

  const handleOperator = useCallback((op: string) => {
    const current = parseFloat(display);
    if (prevValue !== null && currentOp && !resetNext) {
      const expr = `${prevValue} ${currentOp} ${display}`;
      const result = evaluate(expr);
      setDisplay(result);
      setExpression(`${prevValue} ${currentOp} ${display}`);
      setPrevValue(result);
    } else {
      setPrevValue(display);
    }
    setCurrentOp(op);
    setResetNext(true);
    setExpression((prev) => {
      if (resetNext && prev) {
        return prev.replace(/[+\-×÷]\s*$/, `${op} `);
      }
      return `${display} ${op} `;
    });
  }, [display, prevValue, currentOp, resetNext]);

  const handleEquals = useCallback(() => {
    if (prevValue === null || !currentOp) return;
    const fullExpr = `${prevValue} ${currentOp} ${display}`;
    const displayExpr = fullExpr;
    const result = evaluate(fullExpr);
    setDisplay(result);
    setExpression(`${displayExpr} =`);
    pushHistory(displayExpr, result);
    setPrevValue(null);
    setCurrentOp(null);
    setResetNext(true);
  }, [display, prevValue, currentOp, pushHistory]);

  const handleAction = useCallback((action: 'clear' | 'backspace' | 'toggle-sign' | 'percent') => {
    switch (action) {
      case 'clear':
        setDisplay('0');
        setExpression('');
        setCurrentOp(null);
        setPrevValue(null);
        setResetNext(false);
        break;
      case 'backspace':
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
        break;
      case 'toggle-sign':
        setDisplay((prev) => {
          if (prev === '0') return prev;
          return prev.startsWith('-') ? prev.slice(1) : `-${prev}`;
        });
        break;
      case 'percent':
        setDisplay((prev) => {
          const val = parseFloat(prev) / 100;
          return parseFloat(val.toFixed(10)).toString();
        });
        break;
    }
  }, []);

  const handleHistorySelect = useCallback((result: string) => {
    setDisplay(result);
    setExpression('');
    setCurrentOp(null);
    setPrevValue(null);
    setResetNext(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') handleDigit(e.key);
      else if (e.key === '.') handleDigit('.');
      else if (e.key === '+') handleOperator('+');
      else if (e.key === '-') handleOperator('−');
      else if (e.key === '*') handleOperator('×');
      else if (e.key === '/') { e.preventDefault(); handleOperator('÷'); }
      else if (e.key === 'Enter' || e.key === '=') handleEquals();
      else if (e.key === 'Backspace') handleAction('backspace');
      else if (e.key === 'Escape') handleAction('clear');
      else if (e.key === '%') handleAction('percent');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDigit, handleOperator, handleEquals, handleAction]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center p-4 sm:p-8">
      <div className="w-full max-w-md relative">
        <div className="space-y-3">
          <Display expression={expression} value={display} />
          <ButtonPanel
            onDigit={handleDigit}
            onOperator={handleOperator}
            onAction={handleAction}
            onEquals={handleEquals}
            decimalDisabled={display.includes('.')}
          />
          <HistoryToggle
            count={history.length}
            isOpen={historyOpen}
            onToggle={() => setHistoryOpen((o) => !o)}
          />
        </div>
        {historyOpen && (
          <div className="mt-3">
            <HistoryPanel
              records={history}
              onSelect={handleHistorySelect}
              isMobileOpen={historyOpen}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;