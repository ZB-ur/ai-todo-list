import React from 'react';
import { CalcButton } from './CalcButton';

interface ButtonPanelProps {
  onDigit: (digit: string) => void;
  onOperator: (op: string) => void;
  onAction: (action: 'clear' | 'backspace' | 'toggle-sign' | 'percent') => void;
  onEquals: () => void;
  decimalDisabled?: boolean;
}

interface ButtonDef {
  label: string;
  type: 'digit' | 'operator' | 'action' | 'equals';
  handler: () => void;
  span?: number;
  disabled?: boolean;
}

export const ButtonPanel: React.FC<ButtonPanelProps> = ({
  onDigit,
  onOperator,
  onAction,
  onEquals,
  decimalDisabled = false,
}) => {
  const buttons: ButtonDef[][] = [
    [
      { label: 'AC', type: 'action', handler: () => onAction('clear') },
      { label: '±', type: 'action', handler: () => onAction('toggle-sign') },
      { label: '%', type: 'action', handler: () => onAction('percent') },
      { label: '÷', type: 'operator', handler: () => onOperator('÷') },
    ],
    [
      { label: '7', type: 'digit', handler: () => onDigit('7') },
      { label: '8', type: 'digit', handler: () => onDigit('8') },
      { label: '9', type: 'digit', handler: () => onDigit('9') },
      { label: '×', type: 'operator', handler: () => onOperator('×') },
    ],
    [
      { label: '4', type: 'digit', handler: () => onDigit('4') },
      { label: '5', type: 'digit', handler: () => onDigit('5') },
      { label: '6', type: 'digit', handler: () => onDigit('6') },
      { label: '−', type: 'operator', handler: () => onOperator('−') },
    ],
    [
      { label: '1', type: 'digit', handler: () => onDigit('1') },
      { label: '2', type: 'digit', handler: () => onDigit('2') },
      { label: '3', type: 'digit', handler: () => onDigit('3') },
      { label: '+', type: 'operator', handler: () => onOperator('+') },
    ],
    [
      { label: '0', type: 'digit', handler: () => onDigit('0'), span: 2 },
      { label: '.', type: 'digit', handler: () => onDigit('.'), disabled: decimalDisabled },
      { label: '=', type: 'equals', handler: onEquals },
    ],
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.flat().map((btn) => (
        <CalcButton
          key={btn.label}
          label={btn.label}
          type={btn.type}
          onClick={btn.handler}
          span={btn.span}
          disabled={btn.disabled}
        />
      ))}
    </div>
  );
};

export default ButtonPanel;