import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function FilterBar() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <div className="relative flex-1 min-w-[300px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search patients or assessments..."
          className="pl-10 bg-white border-gray-200"
        />
      </div>
      <Select defaultValue="all-status">
        <SelectTrigger className="w-[160px] bg-white border-gray-200">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-status">All Status</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-types">
        <SelectTrigger className="w-[160px] bg-white border-gray-200">
          <SelectValue placeholder="All Types" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-types">All Types</SelectItem>
          <SelectItem value="mmpi">MMPI-2</SelectItem>
          <SelectItem value="beck">Beck Depression</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" className="gap-2 bg-white border-gray-200">
        <Calendar className="h-4 w-4" />
        Last 30 days
      </Button>
    </div>
  );
}

export default FilterBar;