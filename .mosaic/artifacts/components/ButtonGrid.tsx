import React from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualsButton from './EqualsButton';
import DecimalButton from './DecimalButton';
import ClearButton from './ClearButton';
import BackspaceButton from './BackspaceButton';

interface ButtonGridProps {
  displayValue: string;
  onNumberPress: (digit: string) => void;
  onOperatorPress: (op: string) => void;
  onEqualsPress: () => void;
  onDecimalPress: () => void;
  onClearPress: () => void;
  onBackspacePress: () => void;
  activeOperator?: string;
  decimalDisabled?: boolean;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({
  onNumberPress,
  onOperatorPress,
  onEqualsPress,
  onDecimalPress,
  onClearPress,
  onBackspacePress,
  activeOperator,
  decimalDisabled = false,
}) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {/* Row 1: AC, ⌫, (empty), ÷ */}
      <ClearButton onPress={onClearPress} />
      <BackspaceButton onPress={onBackspacePress} />
      <div />
      <OperatorButton operator="÷" onPress={onOperatorPress} active={activeOperator === '÷'} />

      {/* Row 2: 7, 8, 9, × */}
      <NumberButton digit="7" onPress={onNumberPress} />
      <NumberButton digit="8" onPress={onNumberPress} />
      <NumberButton digit="9" onPress={onNumberPress} />
      <OperatorButton operator="×" onPress={onOperatorPress} active={activeOperator === '×'} />

      {/* Row 3: 4, 5, 6, − */}
      <NumberButton digit="4" onPress={onNumberPress} />
      <NumberButton digit="5" onPress={onNumberPress} />
      <NumberButton digit="6" onPress={onNumberPress} />
      <OperatorButton operator="−" onPress={onOperatorPress} active={activeOperator === '−'} />

      {/* Row 4: 1, 2, 3, + */}
      <NumberButton digit="1" onPress={onNumberPress} />
      <NumberButton digit="2" onPress={onNumberPress} />
      <NumberButton digit="3" onPress={onNumberPress} />
      <OperatorButton operator="+" onPress={onOperatorPress} active={activeOperator === '+'} />

      {/* Row 5: 0 (wide), ., = */}
      <NumberButton digit="0" onPress={onNumberPress} wide />
      <DecimalButton onPress={onDecimalPress} disabled={decimalDisabled} />
      <EqualsButton onPress={onEqualsPress} />
    </div>
  );
};

export default ButtonGrid;