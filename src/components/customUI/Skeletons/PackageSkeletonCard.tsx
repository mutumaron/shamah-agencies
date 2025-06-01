import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const PackageSkeletonCard = () => {
  return (
    <Card className="overflow-hidden rounded-lg cursor-pointer">
      <div className="relative">
        <Skeleton className="w-full h-[230px] rounded-lg object-cover" />

        {/* Price */}
        <Skeleton className="absolute bottom-4 left-4 h-6 w-20 rounded-lg" />

        {/* Tag */}
        <Skeleton className="absolute top-4 left-4 h-6 w-24 rounded-md" />
      </div>

      <div className="py-5 px-6 space-y-3">
        <Skeleton className="h-6 w-3/4" /> {/* Title */}
        <Skeleton className="h-4 w-1/2" /> {/* Location */}
        <div className="flex justify-between mt-4 w-full lg:w-[80%]">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="w-full h-[1px] mt-4 mb-4 bg-gray-200 opacity-50"></div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-16" />
          <div className="flex gap-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-4 rounded" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PackageSkeletonCard;
