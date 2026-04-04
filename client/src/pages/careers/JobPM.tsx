import JobDetailContent from "./JobDetail";
import { jobOpeningsById } from "@/components/careers/careersData";

export default function JobPM() {
  return <JobDetailContent job={jobOpeningsById.pm} />;
}
