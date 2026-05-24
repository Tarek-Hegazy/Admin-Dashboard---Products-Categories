import { useNavigate } from "react-router-dom";

import { useProductDetailsStore } from "@/stores/productDetailsStore";

interface SearchResultItemProps {
  title: string;

  subtitle?: string;

  image?: string;

  href?: string;

  productId?: number;

  onCloseOverlay?: () => void;

  onClick?: () => void;
}

export function SearchResultItem({
  title,
  subtitle,
  image,
  href,
  productId,
  onCloseOverlay,
  onClick,
}: SearchResultItemProps) {
  const navigate = useNavigate();

  const { openModal } = useProductDetailsStore();

  return (
    <button
      type="button"
      onClick={() => {
        if (productId) {
          onClick?.();

          onCloseOverlay?.();

          setTimeout(() => {
            openModal(productId);
          }, 150);

          return;
        }

        if (href) {
          navigate(href);

          onClick?.();

          onCloseOverlay?.();

          return;
        }

        // onClick?.();
      }}
      className="flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="h-10 w-10 rounded-xl object-cover"
        />
      )}

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{title}</p>

        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </button>
  );
}
