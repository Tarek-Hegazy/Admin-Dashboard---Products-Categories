import { Edit, Trash2 } from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/Button";

export function ProductActions() {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          toast("Edit Product", {
            description: "Edit feature is coming soon.",
          })
        }
      >
        <Edit className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="text-destructive"
        onClick={() =>
          toast("Delete Product", {
            description: "Delete feature is coming soon.",
          })
        }
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
