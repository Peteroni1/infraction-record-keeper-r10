
// Personnel Types
export interface Personnel {
  id: string;
  name: string;
  rank: string;
  position: string;
  unit: string;
  badgeNumber?: string;
  contactInfo?: string;
}

// Inspection Types
export type InspectionType = 'Personnel' | 'Office/Unit' | 'Vehicle' | 'Rank';

export interface Inspection {
  id: string;
  date: string;
  type: InspectionType;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  unit: string;
  location: string;
  team: string[];
  findings?: string;
  hasInfractions: boolean;
  notes?: string;
}

// Infraction Types
export interface Infraction {
  id: string;
  inspectionId: string;
  date: string;
  type: string;
  description: string;
  personnel?: string[];
  unit?: string;
  severity: 'Minor' | 'Moderate' | 'Major' | 'Critical';
  status: 'Pending' | 'Under Review' | 'Processed' | 'Resolved' | 'Escalated';
  delinquencyReport?: string;
  actionTaken?: string;
  complianceStatus?: 'Pending' | 'Compliant' | 'Non-Compliant' | 'In Progress';
  complianceDeadline?: string;
  complianceNotes?: string;
}

// Delinquency Report Types
export interface DelinquencyReport {
  id: string;
  inspectionId: string;
  infractionIds: string[];
  date: string;
  issuedBy: string;
  forwardedTo: string;
  status: 'Draft' | 'Issued' | 'Processing' | 'Closed';
  notes?: string;
}

// Compliance Types
export interface Compliance {
  id: string;
  infractionId: string;
  delinquencyReportId?: string;
  type: 'AAR-Fatigue Duty' | 'AAR-Action Taken' | 'Other';
  requiredDocuments: string[];
  deadline: string;
  status: 'Pending' | 'Submitted' | 'Approved' | 'Rejected' | 'Overdue';
  submittedDate?: string;
  approvedDate?: string;
  notes?: string;
}

// Workflow Steps
export type WorkflowStep = 
  | 'Calendar Preparation'
  | 'Team Assignment'
  | 'Coordination'
  | 'Proceed to Unit'
  | 'Courtesy Call'
  | 'Inspection'
  | 'Infraction Found'
  | 'Exit Briefing'
  | 'Delinquency Report'
  | 'Forward to Admin'
  | 'Compliance'
  | 'Update Database'
  | 'Submit Reports';

export interface WorkflowStatus {
  inspectionId: string;
  currentStep: WorkflowStep;
  completedSteps: WorkflowStep[];
  pendingSteps: WorkflowStep[];
  lastUpdated: string;
}
