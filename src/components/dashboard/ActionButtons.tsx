import { Button } from "@/components/ui/button";
import { Download, Edit3 } from "lucide-react";

function ActionButtons() {
    return (
        <footer className="sticky bottom-0 bg-[var(--color-gray-50)] border-t border-[var(--color-gray-200)] px-[var(--space-6)] py-[var(--space-4)] flex flex-col gap-[var(--space-6)] sm:flex-row sm:items-center justify-between">
            <Button variant="outline" className="flex-1 sm:flex-none gap-2 bg-white border border-[var(--color-gray-200)] text-[var(--color-gray-700)] hover:bg-[var(--color-gray-100)] text-sm font-medium rounded-md h-10">
                <Download className="h-4 w-4" />
                Download Report
            </Button>
            <Button className="flex-1 sm:flex-none gap-2 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white text-sm font-medium rounded-md h-10">
                <Edit3 className="h-4 w-4" />
                Edit Assessment
            </Button>
        </footer>
    );
}

export default ActionButtons;