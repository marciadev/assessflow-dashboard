import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Eye, Download, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate, formatTime, getStatusColors, getScoreColors, getStatusLabel } from "@/utils/utils";
import type { Assessment } from "@/types/types";

interface AssessmentTableProps {
  assessments: Assessment[];
  onRowClick: (assessment: Assessment) => void;
}

function AssessmentTable({ assessments, onRowClick }: AssessmentTableProps) {

  return (
    <Card className="border-gray-200 bg-white rounded-b-none border-b-0">
      <CardContent className="p-0">
        <div className="overflow-x-auto border-[solid 2px var(--color-gray-200)] rounded-t-lg border-b-0">
          <table className="w-full">
            <thead className="text-left px-5 py-[14px] text-xs font-bold text-[var(--color-gray-500)] uppercase tracking-wider bg-[var(--color-gray-50)] border-b border-[var(--color-gray-200)]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-gray-500)]">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-gray-500)]">
                  Assessment Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-gray-500)]">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-gray-500)]">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-gray-500)]">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[var(--color-gray-500)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assessments.map((assessment) => {
                const { text: statusColor, bg: statusBg } = getStatusColors(assessment.status);

                let scoreColors = { bar: "bg-gray-500", text: "text-gray-500" };
                if (assessment.score !== null) {
                  scoreColors = getScoreColors(assessment.score);
                }
                const dateStr = formatDate(assessment.date);
                const timeStr = formatTime(assessment.date);
                return (
                  <tr
                    key={assessment.id}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => onRowClick(assessment)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 bg-gray-100">
                          <AvatarFallback className="bg-gray-100 text-sm font-medium text-gray-600">
                            {assessment.patient.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">
                            {assessment.patient.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {assessment.patient.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-100 p-2 rounded-md">
                          <FileText className="h-4 w-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-900">
                          {assessment.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBg} ${statusColor}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                        {getStatusLabel(assessment.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {assessment.status === 'cancelled' || assessment.status === 'pending' ? (
                        <span className="text-sm font-medium text-gray-900">—</span>
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-100">
                            <div
                              className={`h-full ${scoreColors.bar}`}
                              style={{ width: `${assessment.score ?? 0}%` }}
                            />
                          </div>
                          <span className={`text-sm font-medium ${scoreColors.text}`}>
                            {assessment.score !== null ? assessment.score : '—'}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {dateStr}
                      </div>
                      <div className="text-sm text-gray-500">
                        {timeStr}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                          title="Download Report"
                        >
                          <Download className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                          title="More Options"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export default AssessmentTable;