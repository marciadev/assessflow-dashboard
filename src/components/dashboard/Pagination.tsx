import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getPageNumbers, getTotalPages } from "@/utils/utils";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, pageSize, totalItems, onPageChange }: PaginationProps) {
  const totalPages = getTotalPages(totalItems, pageSize);
  const pageNumbers = getPageNumbers(currentPage, totalPages, 7);
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(start + pageSize - 1, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-2 border-gray-200 rounded-b-lg border-t-0 bg-[var(--color-gray-50)] px-6 py-4 gap-4 sm:gap-0">
      <div className="text-sm text-gray-600 text-center sm:text-left w-full sm:w-auto">
        {`Showing ${start}-${end} of ${totalItems} assessments`}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-auto"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {pageNumbers.map((num, idx) =>
          num === null ? (
            <span key={"ellipsis-" + idx} className="px-2 text-sm text-gray-600">...</span>
          ) : (
            <Button
              key={num}
              variant={num === currentPage ? "default" : "outline"}
              size="icon"
              className={`h-9 w-9 ${num === currentPage ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-gray-200 bg-transparent"}`}
              onClick={() => onPageChange(num)}
            >
              {num}
            </Button>
          )
        )}
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-auto"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;