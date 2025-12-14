import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
      <div className="text-sm text-gray-600">
        Showing 1-5 of 248 assessments
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 bg-transparent"
          disabled
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="h-9 w-9 bg-blue-600 hover:bg-blue-700"
        >
          1
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 bg-transparent"
        >
          2
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 bg-transparent"
        >
          3
        </Button>
        <span className="px-2 text-sm text-gray-600">...</span>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 bg-transparent"
        >
          50
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gray-200 bg-transparent"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;