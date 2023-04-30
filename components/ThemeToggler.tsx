import {
} from "@heroicons/react/24/outline";
import {
  SunIcon,
  MoonIcon
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true) }, []);

  if (!mounted) return <></>;

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light" )}
        className="flex flex-row items-center justify-center"
      >
        {
          theme === "dark" ? (
            <>
              <MoonIcon className="w-6 text-white mr-2" />
              <span className="text-white hidden md:block">Dark Mode</span>
            </>
          )
          : (
            <>
              <SunIcon className="w-6 text-black mr-2" />
              <span className="text-black hidden md:block">Light Mode</span>
            </>
          )
        }
      </button>
    </>
  )
}