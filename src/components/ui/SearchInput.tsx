import { Search, X } from "lucide-react";

import { Input, Button } from "@/components/ui";

interface SearchInputProps {
  value: string;

  onChange: (value: string) => void;

  onFocus?: () => void;

  autoFocus?: boolean;

  placeholder?: string;

  className?: string;
}

export function SearchInput({
  value,
  onChange,
  onFocus,
  placeholder = "Search...",
  className,
  autoFocus = false,
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-zinc-700 dark:text-zinc-200" />
      <Input
        value={value}
        onFocus={onFocus}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-2xl border-border/60 bg-background/70 pl-11 pr-11 shadow-sm backdrop-blur-sm"
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => onChange("")}
          className="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-xl text-muted-foreground hover:bg-accent/60 hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
