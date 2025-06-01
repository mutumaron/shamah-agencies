import { Skeleton } from "@/components/ui/skeleton";

const BannerCardSkeleton = () => {
  return (
    <section className="relative h-full rounded-lg md:w-1/2">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <Skeleton className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl" />
      </div>

      {/* Content Placeholder */}
      <div className="relative z-10 p-5 flex flex-col justify-between gap-10 w-1/2">
        <Skeleton className="h-6 w-1/3 rounded-md" /> {/* Location */}
        <Skeleton className="h-10 w-3/4 rounded-md" /> {/* Discount heading */}
        <Skeleton className="h-10 w-1/3 rounded-lg" /> {/* Button */}
      </div>
    </section>
  );
};

export default BannerCardSkeleton;
