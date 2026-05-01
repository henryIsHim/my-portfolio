const Separator = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex items-center">
        <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800"></div>
        <div className="mx-4">
          <div className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-zinc-100"></div>
        </div>
        <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800"></div>
      </div>
    </div>
  );
};

export default Separator; 