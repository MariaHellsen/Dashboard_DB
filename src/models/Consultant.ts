import type { TopMatch } from "./dashboardSections";
import type { Application } from "./dashboardSections";
import type { Assignment } from "./dashboardSections";
import type { Invoice } from "./dashboardSections";

// A single consultant
export interface Consultant {
  id: string;
  name: string;
  surname: string;
  role: string;
  status: ConsultantStatus;
  topMatches: TopMatch[];
  assignments: Assignment[];
  applications: Application[];
  invoices: Invoice[];
}

// High-level status for the consultant on the platform
export type ConsultantStatus =
  | "not-applied"
  | "applied"
  | "on-assignment"
  | "on-assignment-with-applications";

// The root of the JSON file
export interface ConsultantsDatabase {
  consultants: Consultant[];
}
