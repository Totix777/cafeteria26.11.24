import { FC } from 'react';

interface DateRangeSelectorProps {
  dateRange: {
    startDate: string;
    endDate: string;
  };
  onDateRangeChange: (range: { startDate: string; endDate: string }) => void;
}

export const DateRangeSelector: FC<DateRangeSelectorProps> = ({ dateRange, onDateRangeChange }) => {
  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-medium mb-4">Zeitraum für Export auswählen</h3>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Von
          </label>
          <input
            type="date"
            value={dateRange.startDate}
            onChange={(e) => onDateRangeChange({
              ...dateRange,
              startDate: e.target.value
            })}
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bis
          </label>
          <input
            type="date"
            value={dateRange.endDate}
            onChange={(e) => onDateRangeChange({
              ...dateRange,
              endDate: e.target.value
            })}
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};