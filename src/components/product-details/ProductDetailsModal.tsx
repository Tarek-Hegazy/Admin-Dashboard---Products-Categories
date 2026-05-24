import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import {
  ProductGallery,
  ProductInfo,
  ProductInventory,
  ProductMeta,
  ProductDetailsSkeleton,
} from "@/components/product-details";

import { ErrorState } from "@/components/ui";

import { useProduct } from "@/hooks";

interface ProductDetailsModalProps {
  productId: number | null;

  open: boolean;

  onOpenChange: (open: boolean) => void;
}

export function ProductDetailsModal({
  productId,
  open,
  onOpenChange,
}: ProductDetailsModalProps) {
  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useProduct(productId ?? 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl border-border/60 bg-background p-0 shadow-2xl sm:max-w-5xl">
        <DialogTitle className="sr-only">Product Details</DialogTitle>

        {isLoading ? (
          <div className="p-6">
            <ProductDetailsSkeleton />
          </div>
        ) : isError || !product ? (
          <div className="p-6">
            <ErrorState
              title="Failed to load product details"
              message="There was a problem loading the product details."
              onRetry={refetch}
            />
          </div>
        ) : (
          <div className="grid gap-6 p-6 lg:grid-cols-[420px_1fr]">
            {/* Gallery */}
            <ProductGallery
              images={product.images}
              thumbnail={product.thumbnail}
              title={product.title}
            />

            {/* Details */}
            <div className="space-y-5">
              <ProductInfo product={product} />

              <div className="grid gap-5 md:grid-cols-2">
                <ProductInventory stock={product.stock} />

                <ProductMeta product={product} />
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
