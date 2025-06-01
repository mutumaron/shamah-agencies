import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DestinationCardSkeleton = () => {
  return (
    <Card className="relative flex">
      {/* Image placeholder */}
      <Skeleton className="h-[450px] w-full rounded-lg" />

      {/* Floating text card */}
      <Card className="absolute bottom-10 right-1/4 flex justify-between w-1/2 p-2">
        <div className="space-y-2 w-3/4">
          <Skeleton className="h-6 w-2/3" /> {/* Title */}
          <Skeleton className="h-4 w-1/3" /> {/* Tours */}
        </div>
        <Skeleton className="h-6 w-6 rounded-full" /> {/* Arrow icon */}
      </Card>
    </Card>
  );
};

export default DestinationCardSkeleton;
