import { useState } from "react";
import type { Assessment, FilterState, AssessmentTypeOption, StatusOption } from "@/types/types";
import { paginateItems, filterAssessments } from "@/utils/utils";
import assessmentsData from "@/data/assessments.json";

export function useAssessments() {
  const assessments: Assessment[] = assessmentsData.assessments as Assessment[];
  const assessmentTypes: AssessmentTypeOption[] = assessmentsData.assessmentTypes as AssessmentTypeOption[];
  const statusOptions: StatusOption[] = assessmentsData.statusOptions as StatusOption[];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    status: "",
    type: "",
  });

  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);

  const filteredAssessments = filterAssessments(assessments, filters);
  const totalItems = filteredAssessments.length;
  const paginatedAssessments = paginateItems(filteredAssessments, currentPage, pageSize);

  if (currentPage > 1 && paginatedAssessments.length === 0 && totalItems > 0) {
    setCurrentPage(1);
  }

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ search: "", status: "", type: "" });
  };

  const handleAssessmentClick = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
  };

  const closeAssessmentDetail = () => {
    setSelectedAssessment(null);
  };

  return {
    assessments: paginatedAssessments,
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
  };
}
