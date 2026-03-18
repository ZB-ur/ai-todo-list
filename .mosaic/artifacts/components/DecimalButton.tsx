import React from 'react';

interface DecimalButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

const DecimalButton: React.FC<DecimalButtonProps> = ({ onPress, disabled = false }) => {
  return (
    <button
      onClick={onPress}
      disabled={disabled}
      className={`bg-white border border-gray-200 rounded-xl text-gray-900 text-2xl font-medium h-16 flex items-center justify-center transition-all duration-100 select-none ${
        disabled
          ? 'opacity-40 cursor-not-allowed'
          : 'active:bg-gray-100 active:scale-95 cursor-pointer hover:bg-gray-50'
      }`}
    >
      .
    </button>
  );
};

export default DecimalButton;