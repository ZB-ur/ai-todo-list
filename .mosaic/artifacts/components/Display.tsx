import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  const getFontSize = (val: string): string => {
    if (val.length > 16) return 'text-2xl';
    if (val.length > 12) return 'text-3xl';
    if (val.length > 8) return 'text-4xl';
    return 'text-5xl';
  };

  return (
    <div className="w-full bg-gray-900 rounded-xl p-6 min-h-[96px] flex items-end justify-end overflow-hidden">
      <span
        className={`${getFontSize(value)} font-light text-white tracking-wide truncate max-w-full text-right`}
      >
        {value || '0'}
      </span>
    </div>
  );
};

export default Display;