const Separator = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-400"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-4">
            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Separator; 