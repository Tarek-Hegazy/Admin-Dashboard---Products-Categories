interface SearchResultGroupProps {
  title: string;

  count: number;

  children: React.ReactNode;
}

export function SearchResultGroup({
  title,
  count,
  children,
}: SearchResultGroupProps) {
  return (
    <div>
      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title} ({count})
      </p>

      <div className="space-y-1">{children}</div>
    </div>
  );
}
