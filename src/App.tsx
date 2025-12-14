import type { Assessment } from "@/types/types";
import type { AssessmentCardProps } from "@/components/dashboard/AssessmentCard";
import { getStatusColors, formatDate, formatTime } from "@/utils/utils";
import Layout from "@/components/layout/LayoutWrapper";
import PageHeader from "@/components/layout/PageHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import AssessmentTable from "@/components/dashboard/AssessmentTable";
import FilterBar from "@/components/dashboard/FilterBar";
import AssessmentCard from "@/components/dashboard/AssessmentCard";
import Pagination from "@/components/dashboard/Pagination";
import AssessmentDetail from "@/components/dashboard/AssessmentDetail";
import { useAssessments } from "@/hooks/useAssessments";

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
  const {
    assessments,
    totalItems,
    currentPage,
    pageSize,
    filters,
    assessmentTypes,
    statusOptions,
    selectedAssessment,
    setCurrentPage,
    handleFilterChange,
    clearFilters,
    handleAssessmentClick,
    closeAssessmentDetail,
  } = useAssessments();

  return (
    <Layout>
      <PageHeader />
      <StatsCard />
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        assessmentTypes={assessmentTypes}
        statusOptions={statusOptions}
      />
      {assessments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No assessments found matching your filters.</p>
          <button
            className="mt-2 text-blue-600 hover:underline text-sm font-medium"
            onClick={clearFilters}
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <>
          <div className="block md:hidden space-y-4">
            {assessments.map((assessment) => (
              <AssessmentCard
                key={assessment.id}
                {...mapAssessmentToCardProps(assessment)}
                onClick={() => handleAssessmentClick(assessment)}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <AssessmentTable
              assessments={assessments}
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
        onClose={closeAssessmentDetail}
        isOpen={!!selectedAssessment}
      />
    </Layout>
  );
}

export default App;