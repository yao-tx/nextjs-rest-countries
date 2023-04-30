export function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 w-full">
        <div className="bg-emerald-200 dark:bg-emerald-950 text-black dark:text-white border-gray-300 flex justify-center align-center">
          <p className="p-3">
            Made by&nbsp;
            <a
              className="text-black font-semibold hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
              href="https://github.com/yao-tx"
              target="_blank"
            >
              yao-tx
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}