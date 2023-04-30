interface AttributeProps {
  title: string;
  description: string;
};

export function AttributeBox({
  title,
  description,
}: AttributeProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-600 col-span-1 p-3 bg-white dark:bg-neutral-800 text-black dark:text-white">
      <p className="text-xs uppercase font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}