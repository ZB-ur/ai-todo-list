import React from 'react';

interface HistoryRecordProps {
  expression: string;
  result: string;
  onClick: () => void;
}

export const HistoryRecord: React.FC<HistoryRecordProps> = ({
  expression,
  result,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full text-left px-4 py-3
        bg-white border border-gray-200 rounded-xl
        hover:bg-blue-50 hover:border-blue-200
        active:bg-blue-100
        transition-colors duration-100
        cursor-pointer select-none
      "
    >
      <span className="text-sm text-gray-600">{expression}</span>
      <span className="text-sm text-gray-400 mx-2">=</span>
      <span className="text-sm font-semibold text-gray-900">{result}</span>
    </button>
  );
};

export default HistoryRecord;