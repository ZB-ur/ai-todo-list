import React, { useState, useCallback } from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [activeOperator, setActiveOperator] = useState<string | null>(null);

  const handleNumberPress = useCallback((digit: string) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
      setActiveOperator(null);
    } else {
      setDisplayValue(prev => (prev === '0' ? digit : prev + digit));
    }
  }, [waitingForSecondOperand]);

  const handleOperatorPress = useCallback((nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator && !waitingForSecondOperand) {
      const result = calculate(firstOperand, inputValue, operator);
      const resultStr = formatResult(result);
      setDisplayValue(resultStr);
      setFirstOperand(result);
    }

    setOperator(nextOperator);
    setWaitingForSecondOperand(true);
    setActiveOperator(nextOperator);
  }, [displayValue, firstOperand, operator, waitingForSecondOperand]);

  const handleEqualsPress = useCallback(() => {
    if (operator === null || firstOperand === null) return;

    const inputValue = parseFloat(displayValue);
    const result = calculate(firstOperand, inputValue, operator);
    const resultStr = formatResult(result);

    setDisplayValue(resultStr);
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setActiveOperator(null);
  }, [displayValue, firstOperand, operator]);

  const handleDecimalPress = useCallback(() => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
      setActiveOperator(null);
      return;
    }
    if (!displayValue.includes('.')) {
      setDisplayValue(prev => prev + '.');
    }
  }, [displayValue, waitingForSecondOperand]);

  const handleClearPress = useCallback(() => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setActiveOperator(null);
  }, []);

  const handleBackspacePress = useCallback(() => {
    if (waitingForSecondOperand) return;
    setDisplayValue(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  }, [waitingForSecondOperand]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <Display value={displayValue} />
        <ButtonGrid
          displayValue={displayValue}
          onNumberPress={handleNumberPress}
          onOperatorPress={handleOperatorPress}
          onEqualsPress={handleEqualsPress}
          onDecimalPress={handleDecimalPress}
          onClearPress={handleClearPress}
          onBackspacePress={handleBackspacePress}
          activeOperator={activeOperator}
        />
      </div>
    </div>
  );
};

function calculate(a: number, b: number, op: string): number {
  switch (op) {
    case '+': return a + b;
    case '−': return a - b;
    case '×': return a * b;
    case '÷': return b !== 0 ? a / b : 0;
    default: return b;
  }
}

function formatResult(value: number): string {
  if (!isFinite(value)) return 'Error';
  const str = parseFloat(value.toPrecision(12)).toString();
  return str;
}

export default Calculator;