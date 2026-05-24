import { Button } from "@/components/ui";

interface ProductPaginationProps {
  currentPage: number;

  totalPages: number;

  paginationPages: (number | string)[];

  setCurrentPage: (page: number) => void;
}

export function ProductPagination({
  currentPage,
  totalPages,
  paginationPages,
  setCurrentPage,
}: ProductPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Previous */}
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </Button>

      {/* Pages */}
      <div className="flex items-center gap-1">
        {paginationPages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${index}`}
                className="px-2 text-muted-foreground"
              >
                ...
              </span>
            );
          }

          return (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(Number(page))}
            >
              {page}
            </Button>
          );
        })}
      </div>

      {/* Next */}
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
