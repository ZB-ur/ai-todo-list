import React from 'react';

interface CalcButtonProps {
  label: string;
  type: 'digit' | 'operator' | 'action' | 'equals';
  onClick: () => void;
  disabled?: boolean;
  span?: number;
}

const typeStyles: Record<CalcButtonProps['type'], string> = {
  digit:
    'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 active:bg-gray-100',
  operator:
    'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 active:bg-blue-200',
  action:
    'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 active:bg-gray-300',
  equals:
    'bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 active:bg-blue-800',
};

export const CalcButton: React.FC<CalcButtonProps> = ({
  label,
  type,
  onClick,
  disabled = false,
  span = 1,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${typeStyles[type]}
        ${span > 1 ? `col-span-${span}` : ''}
        rounded-xl text-lg font-semibold
        h-14 flex items-center justify-center
        transition-colors duration-100
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-inherit
        cursor-pointer select-none
      `}
    >
      {label}
    </button>
  );
};

export default CalcButton;