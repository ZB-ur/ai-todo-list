import React from 'react';
import { HistoryRecord } from './HistoryRecord';

interface HistoryPanelProps {
  records: Array<{ expression: string; result: string; timestamp: number }>;
  onSelect: (result: string) => void;
  isMobileOpen?: boolean;
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;

  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({
  records,
  onSelect,
  isMobileOpen = false,
}) => {
  const panelContent = (
    <>
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">History</h2>
        <span className="text-sm text-gray-600">{records.length} items</span>
      </div>

      {records.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="text-gray-400 text-sm">No calculations yet</div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {records.map((record, index) => (
            <HistoryRecord
              key={`${record.timestamp}-${index}`}
              expression={record.expression}
              result={record.result}
              onClick={() => onSelect(record.result)}
            />
          ))}
        </div>
      )}
    </>
  );

  // Desktop: static sidebar
  const desktopPanel = (
    <div className="hidden md:flex flex-col bg-white border border-gray-200 rounded-xl h-full w-80">
      {panelContent}
    </div>
  );

  // Mobile: slide-up overlay
  const mobilePanel = (
    <div
      className={`
        md:hidden fixed inset-0 z-50
        transition-opacity duration-200
        ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div
        className={`
          absolute bottom-0 left-0 right-0
          bg-white rounded-t-xl
          flex flex-col
          max-h-[70vh]
          transition-transform duration-200
          ${isMobileOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>
        {panelContent}
      </div>
    </div>
  );

  return (
    <>
      {desktopPanel}
      {mobilePanel}
    </>
  );
};

export default HistoryPanel;