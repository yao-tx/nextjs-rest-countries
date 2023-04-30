import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

interface SearchBarProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filters: string[];
};

export function SearchBar({
  onInputChange,
  onSelectChange,
  filters,
}: SearchBarProps) {
  return (
    <div className="flex flex-row justify-center align-center mt-8 w-3/4 mx-auto">
      <select
        onChange={onSelectChange}
        className="rounded-full rounded-r-none px-5 py-3 border-r-0 border-2 border-gray-300 bg-white text-black dark:text-white dark:bg-neutral-800 dark:border-gray-600"
      >
        <option value="">All Regions</option>
        {filters.map((filter, key) => (
        <option
          key={key}
          value={filter}
        >
          {filter}
        </option>
        ))}
      </select>
      <label htmlFor="search" className="relative text-gray-400 focus-within:text-gray-600 w-full">
        <input
          id="search"
          type="search"
          onChange={onInputChange}
          className="w-full rounded-full rounded-l-none px-5 py-3 border-l-0 border-2 border-gray-300 bg-white text-black dark:text-white dark:bg-neutral-800 dark:border-gray-600"
          placeholder="Search"
        />
        <MagnifyingGlassIcon className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-5" />
      </label>
    </div>
  );
}