import React from 'react';

interface HistoryToggleProps {
  count: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const HistoryToggle: React.FC<HistoryToggleProps> = ({
  count,
  isOpen,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className="
        md:hidden fixed bottom-6 right-6 z-50
        bg-blue-600 text-white
        rounded-xl shadow-md
        h-14 w-14 flex items-center justify-center
        hover:bg-blue-700 active:bg-blue-800
        transition-colors duration-100
        cursor-pointer select-none
      "
      aria-label={isOpen ? 'Hide history' : 'Show history'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        {isOpen ? (
          <path d="M18 6L6 18M6 6l12 12" />
        ) : (
          <>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </>
        )}
      </svg>
      {count > 0 && !isOpen && (
        <span
          className="
            absolute -top-1 -right-1
            bg-white text-blue-600
            text-xs font-bold
            min-w-[1.25rem] h-5
            flex items-center justify-center
            rounded-full border border-blue-600
            px-1
          "
        >
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
};

export default HistoryToggle;