import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Calendar } from "lucide-react";
import { formatDate, getStatusColors, getStatusLabel } from "@/utils/utils";
import type { Assessment } from "@/types/types";

interface PatientInformationProps {
    assessment: Assessment;
}

function PatientInformation({ assessment }: PatientInformationProps) {
    const { text: statusColor, bg: statusBg } = getStatusColors(assessment.status);
    return (
        <div>
            <div className="flex items-center gap-4 mb-8">
                <Avatar className="h-16 w-16 bg-blue-100 z-0">
                    <AvatarFallback className="bg-blue-100 text-xl font-semibold text-blue-600">
                        {assessment.patient.initials}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        {assessment.patient.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            <FileText className="h-3.5 w-3.5" />
                            {assessment.patient.id}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(assessment.date)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h4 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">
                    Assessment Information
                </h4>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm text-gray-600 mb-1">
                            Assessment Type
                        </div>
                        <div className="font-medium text-gray-900">
                            {assessment.type}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600 mb-1">Status</div>
                        <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBg} ${statusColor}`}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                            {getStatusLabel(assessment.status)}
                        </span>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600 mb-1">
                            Administered By
                        </div>
                        <div className="font-medium text-gray-900">
                            {assessment.administeredBy.name}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-600 mb-1">Duration</div>
                        <div className="font-medium text-gray-900">
                            {assessment.duration || "—"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientInformation;