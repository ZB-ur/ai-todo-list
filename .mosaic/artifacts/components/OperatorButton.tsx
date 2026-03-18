import React from 'react';

interface OperatorButtonProps {
  operator: string;
  onPress: (operator: string) => void;
  active?: boolean;
}

const OperatorButton: React.FC<OperatorButtonProps> = ({ operator, onPress, active = false }) => {
  return (
    <button
      onClick={() => onPress(operator)}
      className={`${
        active
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-blue-50 text-blue-600 border-gray-200 hover:bg-blue-100'
      } border rounded-xl text-2xl font-medium h-16 flex items-center justify-center active:scale-95 transition-all duration-100 select-none cursor-pointer`}
    >
      {operator}
    </button>
  );
};

export default OperatorButton;