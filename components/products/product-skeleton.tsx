export function ProductSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-48 w-full rounded bg-gray-300"></div>
      <div className="h-4 w-3/4 rounded bg-gray-300"></div>
      <div className="h-4 w-1/2 rounded bg-gray-300"></div>
      <div className="flex items-center space-x-2">
        <div className="h-6 w-6 rounded-full bg-gray-300"></div>
        <div className="h-4 w-1/3 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}
