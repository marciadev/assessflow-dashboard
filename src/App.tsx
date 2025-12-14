import { useState } from "react";
import type { Assessment, FilterState, AssessmentTypeOption, StatusOption } from "@/types/types";
import type { AssessmentCardProps } from "@/components/dashboard/AssessmentCard";
import { paginateItems, filterAssessments, getStatusColors, formatDate, formatTime } from "@/utils/utils";
import Layout from "@/components/layout/LayoutWrapper";
import PageHeader from "@/components/layout/PageHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import AssessmentTable from "@/components/dashboard/AssessmentTable";
import FilterBar from "@/components/dashboard/FilterBar";
import AssessmentCard from "@/components/dashboard/AssessmentCard";
import assessmentsData from "@/data/assessments.json";
import Pagination from "@/components/dashboard/Pagination";
import AssessmentDetail from "@/components/dashboard/AssessmentDetail";



function mapAssessmentToCardProps(a: Assessment): AssessmentCardProps {
  const { text: statusColor, bg: statusBg } = getStatusColors(a.status);
  return {
    patient: a.patient.name,
    patientId: a.patient.id,
    initials: a.patient.initials,
    assessmentType: a.type,
    status: a.status.charAt(0).toUpperCase() + a.status.slice(1),
    statusColor,
    statusBg,
    score: a.score,
    date: formatDate(a.date),
    time: formatTime(a.date),
  };
}

function App() {
  const assessments: Assessment[] = assessmentsData.assessments as Assessment[];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    status: "",
    type: "",
  });

  const filteredAssessments = filterAssessments(assessments, filters);
  const totalItems = filteredAssessments.length;
  const paginatedAssessments = paginateItems(filteredAssessments, currentPage, pageSize);

  if (currentPage > 1 && paginatedAssessments.length === 0 && totalItems > 0) {
    setCurrentPage(1);
  }

  const assessmentTypes: AssessmentTypeOption[] = assessmentsData.assessmentTypes as AssessmentTypeOption[];
  const statusOptions: StatusOption[] = assessmentsData.statusOptions as StatusOption[];

  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);

  const handleAssessmentClick = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
  };

  return (
    <Layout>
      <PageHeader />
      <StatsCard />
      <FilterBar
        filters={filters}
        onFilterChange={(newFilters) => {
          setFilters(newFilters);
          setCurrentPage(1);
        }}
        assessmentTypes={assessmentTypes}
        statusOptions={statusOptions}
      />
      {paginatedAssessments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No assessments found matching your filters.</p>
          <button
            className="mt-2 text-blue-600 hover:underline text-sm font-medium"
            onClick={() => setFilters({ search: "", status: "", type: "" })}
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <>
          <div className="block md:hidden space-y-4">
            {paginatedAssessments.map((assessment) => (
              <AssessmentCard
                key={assessment.id}
                {...mapAssessmentToCardProps(assessment)}
                onClick={() => handleAssessmentClick(assessment)}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <AssessmentTable
              assessments={paginatedAssessments}
              onRowClick={handleAssessmentClick}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            totalItems={totalItems}
            onPageChange={setCurrentPage}
          />
        </>
      )}
      <AssessmentDetail
        assessment={selectedAssessment}
        onClose={() => setSelectedAssessment(null)}
        isOpen={!!selectedAssessment}
      />
    </Layout>
  );
}

export default App;