import PackageSkeletonCard from "./PackageSkeletonCard";

export const PackageSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 w-full px-10 gap-6">
      {Array.from({ length: 4 }).map((_, idx) => (
        <PackageSkeletonCard key={idx} />
      ))}
    </div>
  );
};

export const PackagePageSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full px-10 gap-6 mt-10">
      {Array.from({ length: 6 }).map((_, idx) => (
        <PackageSkeletonCard key={idx} />
      ))}
    </div>
  );
};
