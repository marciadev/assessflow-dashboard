import { Button } from "@/components/ui/button";
import { X, Edit3, FileText, Calendar, Download } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Assessment } from "@/types/types";
import { getStatusColors, getScoreColors, formatDate, getStatusLabel } from "@/utils/utils";
import { useAssessmentDetail } from "@/hooks/useAssessmentDetail";

interface AssessmentDetailProps {
  assessment: Assessment | null;
  onClose: () => void;
  isOpen: boolean;
}

function AssessmentDetail({ assessment, onClose, isOpen }: AssessmentDetailProps) {
  const { activeAssessment, shouldRender, isVisible } = useAssessmentDetail({ assessment, isOpen });

  if (!shouldRender && !isOpen) return null;
  if (!activeAssessment) return null;

  const { text: statusColor, bg: statusBg } = getStatusColors(activeAssessment.status);
  const scoreColors = activeAssessment.score !== null ? getScoreColors(activeAssessment.score) : null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 z-[140] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      />
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-[150] overflow-y-auto transform transition-transform duration-300 ease-in-out ${isVisible ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-[100]">
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
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-16 w-16 bg-blue-100 z-0">
              <AvatarFallback className="bg-blue-100 text-xl font-semibold text-blue-600">
                {activeAssessment.patient.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {activeAssessment.patient.name}
              </h3>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5" />
                  {activeAssessment.patient.id}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(activeAssessment.date)}
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
                  {activeAssessment.type}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Status</div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBg} ${statusColor}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                  {getStatusLabel(activeAssessment.status)}
                </span>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">
                  Administered By
                </div>
                <div className="font-medium text-gray-900">
                  {activeAssessment.administeredBy.name}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Duration</div>
                <div className="font-medium text-gray-900">
                  {activeAssessment.duration || "—"}
                </div>
              </div>
            </div>
          </div>

          {activeAssessment.score !== null && (
            <div className="mb-8">
              <h4 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">
                Overall Score
              </h4>
              <div className="flex flex-col items-center py-6 bg-[var(--color-gray-50)] rounded-lg">
                <div className="relative h-20 mb-4 z-0">
                  <svg viewBox="0 -5 200 110" className="w-full h-full">
                    <path
                      d="M 180 90 A 80 80 0 0 0 20 90"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="24"
                      strokeLinecap="butt"
                    />
                    <path
                      d="M 180 90 A 80 80 0 0 0 20 90"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="24"
                      strokeLinecap="butt"
                      strokeDasharray={`${(activeAssessment.score / 100) * 251.2} 251.2`}
                    />
                    <defs>
                      <linearGradient
                        id="scoreGradient"
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="var(--color-success-500)" />
                        <stop offset="50%" stopColor="var(--color-warning-500)" />
                        <stop offset="100%" stopColor="var(--color-error-500)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center pt-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {activeAssessment.score}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Composite Score</div>
                <div className={`text-base font-semibold mt-1 ${scoreColors?.text}`}>
                  {activeAssessment.scoreInterpretation}
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h4 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">
              Subscale Scores
            </h4>
            {activeAssessment.subscales && activeAssessment.subscales.length > 0 ? (
              <div className="space-y-4">
                {activeAssessment.subscales.map((subscale, index) => {
                  const subScoreColors = getScoreColors((subscale.score / subscale.maxScore) * 100);
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{subscale.name}</span>
                        <span className="text-sm font-semibold text-gray-900">{subscale.score}</span>
                      </div>
                      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${subScoreColors.bar} rounded-full transition-all duration-300`}
                          style={{ width: `${(subscale.score / subscale.maxScore) * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-sm text-gray-500">No subscale data available</div>
            )}
          </div>

          {
            activeAssessment.notes && (
              <div className="mb-8">
                <h4 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">Clinician Notes</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Edit3 className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">
                      {activeAssessment.administeredBy.name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{activeAssessment.notes}</p>
                </div>
              </div>
            )
          }
        </div>

        <div className="sticky bottom-0 bg-[var(--color-gray-50)] border-t border-[var(--color-gray-200)] px-[var(--space-6)] py-[var(--space-4)] flex flex-col gap-[var(--space-6)] sm:flex-row sm:items-center justify-between">
          <Button variant="outline" className="flex-1 sm:flex-none gap-2 bg-white border border-[var(--color-gray-200)] text-[var(--color-gray-700)] hover:bg-[var(--color-gray-100)] text-sm font-medium rounded-md h-10">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          <Button className="flex-1 sm:flex-none gap-2 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white text-sm font-medium rounded-md h-10">
            <Edit3 className="h-4 w-4" />
            Edit Assessment
          </Button>
        </div>
      </div>
    </>
  );
}

export default AssessmentDetail;