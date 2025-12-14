import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, Clock, Users } from "lucide-react";
import assessmentsData from "@/data/assessments.json";

function StatsCard() {
  const statsJson = assessmentsData.stats;
  const stats = [
    {
      icon: FileText,
      value: statsJson.totalAssessments,
      label: "Total Assessments",
      trend: statsJson.totalAssessmentsTrend !== undefined ? `${statsJson.totalAssessmentsTrend > 0 ? "+" : ""}${statsJson.totalAssessmentsTrend}%` : null,
      trendUp: statsJson.totalAssessmentsTrend !== undefined ? statsJson.totalAssessmentsTrend >= 0 : null,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: CheckCircle,
      value: statsJson.completed,
      label: "Completed",
      trend: statsJson.completedTrend !== undefined ? `${statsJson.completedTrend > 0 ? "+" : ""}${statsJson.completedTrend}%` : null,
      trendUp: statsJson.completedTrend !== undefined ? statsJson.completedTrend >= 0 : null,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Clock,
      value: statsJson.inProgress,
      label: "In Progress",
      trend: statsJson.inProgressTrend !== undefined ? `${statsJson.inProgressTrend > 0 ? "+" : ""}${statsJson.inProgressTrend}%` : null,
      trendUp: statsJson.inProgressTrend !== undefined ? statsJson.inProgressTrend >= 0 : null,
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Users,
      value: statsJson.activePatients,
      label: "Active Patients",
      trend: null,
      trendUp: null,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];
  return (
    <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconBg}`}
              >
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              {stat.trend && (
                <span
                  className={`text-sm font-medium ${
                    stat.trendUp ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trendUp ? "↑" : "↓"} {stat.trend}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default StatsCard;