import React from 'react';

interface DisplayProps {
  expression: string;
  value: string;
}

export const Display: React.FC<DisplayProps> = ({ expression, value }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-right">
      <div className="text-sm text-gray-600 truncate min-h-[1.25rem]">
        {expression}
      </div>
      <div className="text-3xl font-bold text-gray-900 truncate mt-1">
        {value}
      </div>
    </div>
  );
};

export default Display;