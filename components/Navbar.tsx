import {
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { ThemeToggler } from '@/components/ThemeToggler';

export function Navbar() {
  return (
    <nav className="w-full bg-emerald-200 text-black dark:bg-emerald-950 dark:text-white shadow">
      <div className="w-full px-4 py-3 flex flex-row justify-between">
        <Link
          href="/"
          className="group flex flex-row items-center hover:text-gray-600 dark:hover:text-gray-300 font-semibold"
        >
          <GlobeAsiaAustraliaIcon className="w-10 h-10 mr-2 text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200" />
          Where in the world?
        </Link>
        <ThemeToggler />
      </div>
    </nav>
  )
}