import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];

  thumbnail: string;

  title: string;
}

export function ProductGallery({
  images,
  thumbnail,
  title,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(thumbnail);
  }, [thumbnail]);

  return (
    <div className="space-y-3">
      <div className="aspect-square overflow-hidden rounded-3xl border border-border/50 bg-muted/20">
        <img
          src={selectedImage}
          alt={title}
          className="h-full w-full object-contain p-6"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {images?.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "overflow-hidden rounded-lg border-2 transition-all",

              selectedImage === image ? "border-primary" : "border-transparent",
            )}
          >
            <img
              src={image}
              alt={title}
              className="h-16 w-16 object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
