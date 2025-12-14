import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function PageHeader() {
  return (
    <div className="mb-[var(--space-8)] flex flex-col gap-[var(--space-4)] md:flex-row md:items-start md:justify-between">
      <div>
        <h1
          className="text-[28px] font-bold text-[color:var(--color-gray-900)]"
        >
          Assessments
        </h1>
        <p className="mt-1 text-sm text-[color:var(--color-gray-500)] tracking-[0.01em]">
          Manage and review patient psychological assessments
        </p>
      </div>
      <Button className="flex items-center gap-[var(--space-2)] rounded-md bg-[var(--color-primary-600)] px-[var(--space-4)] py-[var(--space-2)] text-white hover:bg-[var(--color-primary-700)] transition-colors">
        <Plus className="h-4 w-4" />
        <span className="text-sm font-medium tracking-[0.015em]">
          New Assessment
        </span>
      </Button>
    </div>
  );
}

export default PageHeader;
