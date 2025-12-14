import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function PageHeader() {
  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Assessments</h1>
        <p className="mt-1 text-gray-600">
          Manage and review patient psychological assessments
        </p>
      </div>
      <Button className="bg-blue-600">
        <Plus className="mr-2 h-4 w-4" />
        New Assessment
      </Button>
    </div>
  );
}

export default PageHeader;
