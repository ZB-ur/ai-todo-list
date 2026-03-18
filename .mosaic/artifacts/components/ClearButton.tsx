import React from 'react';

interface ClearButtonProps {
  onPress: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onPress }) => {
  return (
    <button
      onClick={onPress}
      className="bg-gray-200 border border-gray-200 rounded-xl text-gray-900 text-xl font-medium h-16 flex items-center justify-center active:bg-gray-300 active:scale-95 transition-all duration-100 select-none cursor-pointer hover:bg-gray-300"
    >
      AC
    </button>
  );
};

export default ClearButton;