import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Download, MoreVertical } from "lucide-react";

export interface AssessmentCardProps {
  patient: string;
  patientId: string;
  initials: string;
  assessmentType: string;
  status: string;
  statusColor: string;
  statusBg: string;
  score: number | null;
  date: string;
  time: string;
  onClick?: () => void;
}

export function AssessmentCard({
  patient,
  patientId,
  initials,
  assessmentType,
  status,
  statusColor,
  statusBg,
  score,
  date,
  time,
  onClick,
}: AssessmentCardProps) {
  return (
    <Card
      className={`border-gray-200 bg-white hover:shadow-md transition-shadow ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-4">

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 bg-gray-100">
              <AvatarFallback className="bg-gray-100 text-sm font-medium text-gray-600">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-gray-900">{patient}</div>
              <div className="text-xs text-gray-500">{patientId}</div>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBg} ${statusColor}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
            {status}
          </span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Assessment</span>
            <span className="text-sm font-medium text-gray-900">
              {assessmentType}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Score</span>
            <span className="text-sm font-medium text-gray-900">
              {score !== null ? score : "—"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Date</span>
            <span className="text-sm font-medium text-blue-600">{`${date} • ${time}`}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <Button
            variant="outline"
            size="sm"
            className="text-sm bg-transparent"
            onClick={onClick}
          >
            <Eye className="mr-2 h-3.5 w-3.5" />
            View Details
          </Button>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-gray-600"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-gray-600"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AssessmentCard;