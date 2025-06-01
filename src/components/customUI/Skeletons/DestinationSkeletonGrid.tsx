import DestinationCardSkeleton from "./DestinationCardSkeleton";

const DestinationsSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 w-full">
      {Array.from({ length: 3 }).map((_, idx) => (
        <DestinationCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default DestinationsSkeletonGrid;
