import { X } from "lucide-react";

import { Button } from "@/components/ui";

import { GlobalSearch } from "./GlobalSearch";

interface MobileSearchOverlayProps {
  isOpen: boolean;

  onClose: () => void;
}

export function MobileSearchOverlay({
  isOpen,
  onClose,
}: MobileSearchOverlayProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background p-4 md:hidden">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <GlobalSearch autoFocus onCloseOverlay={onClose} />
        </div>

        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
