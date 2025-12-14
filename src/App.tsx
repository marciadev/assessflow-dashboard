import Layout from "@/components/layout/LayoutWrapper";
import PageHeader from "./components/layout/PageHeader";
import StatsCard from "./components/dashboard/StatsCard";
import AssessmentTable from "./components/dashboard/AssessmentTable";
import FilterBar from "./components/dashboard/FilterBar";

function App() {
  return (
    <Layout>
      <PageHeader />
      <StatsCard />
      <FilterBar />
      <AssessmentTable />
    </Layout>
  );
}

export default App;
