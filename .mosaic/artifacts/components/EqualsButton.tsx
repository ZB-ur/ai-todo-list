import React from 'react';

interface EqualsButtonProps {
  onPress: () => void;
}

const EqualsButton: React.FC<EqualsButtonProps> = ({ onPress }) => {
  return (
    <button
      onClick={onPress}
      className="bg-blue-600 border border-blue-600 rounded-xl text-white text-2xl font-medium h-16 flex items-center justify-center active:bg-blue-700 active:scale-95 transition-all duration-100 select-none cursor-pointer hover:bg-blue-700"
    >
      =
    </button>
  );
};

export default EqualsButton;