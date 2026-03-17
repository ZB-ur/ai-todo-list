import React, { useState, useCallback } from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';

type Operation = '+' | '−' | '×' | '÷' | null;

function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case '+': return a + b;
    case '−': return a - b;
    case '×': return a * b;
    case '÷': return b === 0 ? NaN : a / b;
    default: return b;
  }
}

function formatResult(n: number): string {
  if (!isFinite(n)) return 'Error';
  const s = String(n);
  if (s.length <= 20) return s;
  return n.toPrecision(10).replace(/\.?0+$/, '');
}

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [resetNext, setResetNext] = useState(false);

  const handleDigit = useCallback((digit: string) => {
    setDisplay(prev => {
      if (resetNext) {
        setResetNext(false);
        return digit === '.' ? '0.' : digit;
      }
      if (digit === '.' && prev.includes('.')) return prev;
      if (prev === '0' && digit !== '.') return digit;
      return prev + digit;
    });
  }, [resetNext]);

  const handleOperator = useCallback((op: string) => {
    const current = parseFloat(display);
    if (previousValue !== null && operation && !resetNext) {
      const result = calculate(previousValue, current, operation);
      const formatted = formatResult(result);
      setDisplay(formatted);
      setPreviousValue(formatted === 'Error' ? null : result);
    } else {
      setPreviousValue(current);
    }
    setOperation(op as Operation);
    setResetNext(true);
  }, [display, previousValue, operation, resetNext]);

  const handleEquals = useCallback(() => {
    if (previousValue === null || !operation) return;
    const current = parseFloat(display);
    const result = calculate(previousValue, current, operation);
    setDisplay(formatResult(result));
    setPreviousValue(null);
    setOperation(null);
    setResetNext(true);
  }, [display, previousValue, operation]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setResetNext(false);
  }, []);

  const handleBackspace = useCallback(() => {
    setDisplay(prev => {
      if (prev.length <= 1 || prev === 'Error') return '0';
      return prev.slice(0, -1);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-gray-900 rounded-lg p-4 border border-red-900 shadow-lg shadow-red-900/50 space-y-4">
        <Display value={display} />
        <ButtonGrid
          onDigit={handleDigit}
          onOperator={handleOperator}
          onEquals={handleEquals}
          onClear={handleClear}
          onBackspace={handleBackspace}
          activeOperator={resetNext ? operation : null}
        />
      </div>
    </div>
  );
};

export default Calculator;