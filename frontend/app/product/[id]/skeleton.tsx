export function ProductSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 animate-pulse p-4">
      <div className="aspect-square bg-gray-300 rounded-md w-full md:w-1/2"></div>

      <div className="flex-1 space-y-4">
        <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>

        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          <div className="h-5 bg-gray-300 rounded-md w-20 ml-4"></div>
        </div>

        <div className="h-8 bg-gray-300 rounded-md w-1/4"></div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded-md w-full"></div>
          <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
        </div>

        <div className="space-y-2">
          <div className="h-10 bg-gray-300 rounded-md w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded-md w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
