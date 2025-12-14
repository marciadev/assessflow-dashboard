import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { FilterState, AssessmentTypeOption, StatusOption, AssessmentStatus, AssessmentTypeCode } from "@/types/types";

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  assessmentTypes: AssessmentTypeOption[];
  statusOptions: StatusOption[];
}

function FilterBar({ filters, onFilterChange, assessmentTypes, statusOptions }: FilterBarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleStatusChange = (value: string) => {
    const status = value === "all-status" ? "" : (value as AssessmentStatus);
    onFilterChange({ ...filters, status });
  };

  const handleTypeChange = (value: string) => {
    const type = value === "all-types" ? "" : (value as AssessmentTypeCode);
    onFilterChange({ ...filters, type });
  };

  return (
    <div className="mb-6 w-full md:w-3/4 flex flex-col md:flex-row md:items-center md:justify-start gap-4">
      <div className="relative w-full md:basis-[36.6%] md:max-w-[36.6%] min-w-[220px] md:min-w-[220px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search patients or assessments..."
          className="pl-10 bg-white border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 rounded-md h-10 focus-visible:ring-2 focus-visible:ring-[var(--color-primary-100)] focus-visible:ring-offset-0 focus-visible:border-[var(--color-primary-500)]"
          value={filters.search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full md:basis-[63.4%] md:max-w-[63.4%] gap-4">
        <Select
          value={filters.status || "all-status"}
          onValueChange={handleStatusChange}
        >
          <SelectTrigger className="w-full md:w-[140px] bg-white border border-gray-200 text-sm text-gray-900 rounded-md h-10 focus-visible:ring-2 focus-visible:ring-[var(--color-primary-100)] focus-visible:ring-offset-0 focus-visible:border-[var(--color-primary-500)]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent className="bg-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
            <SelectItem value="all-status" className="hover:bg-primary-500 hover:text-white focus:bg-primary-500 focus:text-white cursor-pointer pl-2">All Status</SelectItem>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value} tabIndex={0}
                className="hover:bg-primary-500 hover:text-white focus:bg-primary-500 focus:text-white cursor-pointer pl-2">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={filters.type || "all-types"}
          onValueChange={handleTypeChange}
        >
          <SelectTrigger className="w-full md:w-[140px] bg-white border border-gray-200 text-sm text-gray-900 rounded-md h-10">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent className="bg-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
            <SelectItem value="all-types" className="hover:bg-primary-500 hover:text-white focus:bg-primary-500 focus:text-white cursor-pointer pl-2">All Types</SelectItem>
            {assessmentTypes.map((type) => (
              <SelectItem key={type.code} value={type.code} tabIndex={0}
                className="hover:bg-primary-500 hover:text-white focus:bg-primary-500 focus:text-white cursor-pointer pl-2">
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          className="w-full md:w-auto gap-2 bg-white border border-gray-200 text-sm text-gray-900 rounded-md h-10"
        >
          <Calendar className="h-4 w-4 text-gray-500" />
          Last 30 days
        </Button>
      </div>
    </div>
  );
}

export default FilterBar;