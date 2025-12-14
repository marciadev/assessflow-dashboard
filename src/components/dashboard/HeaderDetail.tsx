import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface HeaderDetailProps {
    onClose: () => void;
}

function HeaderDetail({ onClose }: HeaderDetailProps) {
    return (
        <header className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-[100]">
            <h2 className="text-lg font-semibold text-gray-900">
                Assessment Details
            </h2>
            <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 hover:bg-gray-100 group"
                onClick={onClose}
            >
                <X className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            </Button>
        </header>
    );
}

export default HeaderDetail;