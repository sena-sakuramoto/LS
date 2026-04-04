import JobDetailContent from "./JobDetail";
import { jobOpeningsById } from "@/components/careers/careersData";

export default function JobSales() {
  return <JobDetailContent job={jobOpeningsById.sales} />;
}
