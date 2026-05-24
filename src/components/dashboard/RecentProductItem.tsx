import { Link } from "react-router-dom";
import { Card } from "../ui";

interface RecentProductItemProps {
  product: any;
  onOpenDetails: (id: number) => void;
}

export function RecentProductItem({
  product,
  onOpenDetails,
}: RecentProductItemProps) {
  return (
    <Card
      onClick={() => onOpenDetails(product.id)}
      className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background/40 p-4 transition-all duration-200 hover:border-border hover:bg-accent/30 hover:shadow-md"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-14 w-14 rounded-2xl border border-border/40 object-cover shadow-sm object-cover"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {product.title}
        </p>

        <p className="text-sm text-muted-foreground">{product.category}</p>
      </div>

      <div className="text-right">
        <p className="text-base font-semibold tracking-tight">
          ${product.price.toFixed(2)}
        </p>

        <p
          className={`text-sm ${
            product.stock > 0
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
      </div>
    </Card>
  );
}
