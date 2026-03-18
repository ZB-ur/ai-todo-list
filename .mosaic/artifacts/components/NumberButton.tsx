import React from 'react';

interface NumberButtonProps {
  digit: string;
  onPress: (digit: string) => void;
  wide?: boolean;
}

const NumberButton: React.FC<NumberButtonProps> = ({ digit, onPress, wide = false }) => {
  return (
    <button
      onClick={() => onPress(digit)}
      className={`${
        wide ? 'col-span-2' : ''
      } bg-white border border-gray-200 rounded-xl text-gray-900 text-2xl font-medium h-16 flex items-center justify-center active:bg-gray-100 active:scale-95 transition-all duration-100 select-none cursor-pointer hover:bg-gray-50`}
    >
      {digit}
    </button>
  );
};

export default NumberButton;