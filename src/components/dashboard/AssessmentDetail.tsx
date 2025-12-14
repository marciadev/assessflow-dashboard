import { Edit3 } from "lucide-react";
import type { Assessment } from "@/types/types";
import { getScoreColors } from "@/utils/utils";
import { useAssessmentDetail } from "@/hooks/useAssessmentDetail";
import ActionButtons from "./ActionButtons";
import HeaderDetail from "./HeaderDetail";
import PatientInformation from "./PatientInformation";
import ScoreGauge from "./ScoreGauge";

interface AssessmentDetailProps {
  assessment: Assessment | null;
  onClose: () => void;
  isOpen: boolean;
}

function AssessmentDetail({ assessment, onClose, isOpen }: AssessmentDetailProps) {
  const { activeAssessment, shouldRender, isVisible } = useAssessmentDetail({ assessment, isOpen });

  if (!shouldRender && !isOpen) return null;
  if (!activeAssessment) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 z-[140] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-[150] overflow-y-auto transform transition-transform duration-300 ease-in-out ${isVisible ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <HeaderDetail onClose={onClose} />

        <div className="p-6">
          <PatientInformation assessment={activeAssessment} />

          {activeAssessment.score !== null && (
            <ScoreGauge
              score={activeAssessment.score}
              scoreInterpretation={activeAssessment.scoreInterpretation || ""}
            />
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
        <ActionButtons />
      </div >
    </>
  );
}

export default AssessmentDetail;