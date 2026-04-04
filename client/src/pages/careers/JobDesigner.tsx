import JobDetailContent from "./JobDetail";
import { jobOpeningsById } from "@/components/careers/careersData";

export default function JobDesigner() {
  return <JobDetailContent job={jobOpeningsById.designer} />;
}
