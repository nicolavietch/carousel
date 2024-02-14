import { ImageCard } from "@/app/(home)/_components/card";
import { images } from "@/app/(home)/_components/images";

export const Carousel = () => {
  const items = images;

  return (
    <div className="flex justify-between gap-4">
      {items.map((item) => {
        return <ImageCard key={`card-image-${item.name}`} {...item} />;
      })}
    </div>
  );
};
