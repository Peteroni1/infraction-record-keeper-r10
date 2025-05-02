
import { Personnel, Inspection, Infraction, DelinquencyReport, Compliance, WorkflowStatus } from '../types';

export const mockPersonnel: Personnel[] = [
  {
    id: "P1",
    name: "John C. Santos",
    rank: "Police Colonel",
    position: "Office Head",
    unit: "RIAS-10 Office",
    badgeNumber: "PC-0053",
    contactInfo: "jcsantos@rias10.gov.ph"
  },
  {
    id: "P2",
    name: "Maria D. Reyes",
    rank: "Police Major",
    position: "Team Lead - Inspections",
    unit: "Inspection Division",
    badgeNumber: "PM-0127",
    contactInfo: "mdreyes@rias10.gov.ph"
  },
  {
    id: "P3",
    name: "Robert G. Aquino",
    rank: "Police Captain",
    position: "Inspector",
    unit: "Inspection Division",
    badgeNumber: "PC-0284",
    contactInfo: "rgaquino@rias10.gov.ph"
  },
  {
    id: "P4",
    name: "Elena F. Mendoza",
    rank: "Police Lieutenant",
    position: "Administrative Officer",
    unit: "Admin Division",
    badgeNumber: "PL-0362",
    contactInfo: "efmendoza@rias10.gov.ph"
  },
  {
    id: "P5",
    name: "Michael B. Tan",
    rank: "Police Senior Master Sergeant",
    position: "Records Officer",
    unit: "Records Section",
    badgeNumber: "PSMS-0491",
    contactInfo: "mbtan@rias10.gov.ph"
  }
];

export const mockInspections: Inspection[] = [
  {
    id: "INS-2023-001",
    date: "2023-11-15T09:00:00",
    type: "Office/Unit",
    status: "Completed",
    unit: "Regional Headquarters",
    location: "Cagayan de Oro City",
    team: ["P2", "P3"],
    findings: "All policies generally followed with minor exceptions noted.",
    hasInfractions: true,
    notes: "Follow-up needed on vehicle maintenance records."
  },
  {
    id: "INS-2023-002",
    date: "2023-12-05T10:30:00",
    type: "Personnel",
    status: "Completed",
    unit: "Provincial Mobile Force Company",
    location: "Misamis Oriental",
    team: ["P2", "P4"],
    findings: "Several personnel found with uniform violations.",
    hasInfractions: true,
    notes: "Recorded 3 instances of improper uniform compliance."
  },
  {
    id: "INS-2023-003",
    date: "2023-12-20T08:00:00",
    type: "Vehicle",
    status: "Completed",
    unit: "Regional Mobile Force Battalion",
    location: "Bukidnon",
    team: ["P3", "P5"],
    findings: "2 vehicles with maintenance issues, 1 with improper documentation.",
    hasInfractions: true,
    notes: "Immediate action required on vehicle BK-498."
  },
  {
    id: "INS-2024-001",
    date: "2024-01-10T09:30:00",
    type: "Rank",
    status: "Completed",
    unit: "City Police Office",
    location: "Iligan City",
    team: ["P2", "P3"],
    findings: "All personnel properly uniformed and equipped.",
    hasInfractions: false,
    notes: "Commend unit for excellent compliance."
  },
  {
    id: "INS-2024-002",
    date: "2024-01-25T10:00:00",
    type: "Office/Unit",
    status: "In Progress",
    unit: "Provincial Police Office",
    location: "Lanao del Norte",
    team: ["P3", "P4"],
    hasInfractions: false
  },
  {
    id: "INS-2024-003",
    date: "2024-02-15T08:30:00",
    type: "Vehicle",
    status: "Scheduled",
    unit: "Regional Logistics Division",
    location: "Cagayan de Oro City",
    team: ["P2", "P5"],
    hasInfractions: false
  }
];

export const mockInfractions: Infraction[] = [
  {
    id: "INF-2023-001",
    inspectionId: "INS-2023-001",
    date: "2023-11-15",
    type: "Documentation",
    description: "Missing vehicle maintenance logs for 2 patrol vehicles",
    unit: "Regional Headquarters",
    severity: "Minor",
    status: "Resolved",
    delinquencyReport: "DR-2023-001",
    actionTaken: "Logs have been updated and systems put in place for regular maintenance documentation",
    complianceStatus: "Compliant",
    complianceDeadline: "2023-12-15",
    complianceNotes: "All required documents submitted on 2023-12-10"
  },
  {
    id: "INF-2023-002",
    inspectionId: "INS-2023-002",
    date: "2023-12-05",
    type: "Uniform Violation",
    description: "3 personnel with improper uniform components",
    personnel: ["Regular Member 1", "Regular Member 2", "Regular Member 3"],
    unit: "Provincial Mobile Force Company",
    severity: "Minor",
    status: "Resolved",
    delinquencyReport: "DR-2023-002",
    actionTaken: "Personnel counseled and uniform issues corrected",
    complianceStatus: "Compliant",
    complianceDeadline: "2023-12-20",
    complianceNotes: "Verification inspection confirmed compliance on 2023-12-18"
  },
  {
    id: "INF-2023-003",
    inspectionId: "INS-2023-003",
    date: "2023-12-20",
    type: "Vehicle Maintenance",
    description: "Critical safety issues with patrol vehicle BK-498",
    unit: "Regional Mobile Force Battalion",
    severity: "Major",
    status: "Under Review",
    delinquencyReport: "DR-2023-003",
    actionTaken: "Vehicle taken out of service pending repairs",
    complianceStatus: "In Progress",
    complianceDeadline: "2024-01-20",
    complianceNotes: "Awaiting parts for repair"
  },
  {
    id: "INF-2023-004",
    inspectionId: "INS-2023-003",
    date: "2023-12-20",
    type: "Documentation",
    description: "Improper documentation for fuel consumption and mileage",
    unit: "Regional Mobile Force Battalion",
    severity: "Moderate",
    status: "Processed",
    delinquencyReport: "DR-2023-003",
    actionTaken: "New documentation procedures implemented",
    complianceStatus: "Compliant",
    complianceDeadline: "2024-01-10",
    complianceNotes: "New system verified and working properly"
  }
];

export const mockDelinquencyReports: DelinquencyReport[] = [
  {
    id: "DR-2023-001",
    inspectionId: "INS-2023-001",
    infractionIds: ["INF-2023-001"],
    date: "2023-11-16",
    issuedBy: "P2",
    forwardedTo: "Regional Headquarters Admin Officer",
    status: "Closed",
    notes: "All issues addressed and resolved"
  },
  {
    id: "DR-2023-002",
    inspectionId: "INS-2023-002",
    infractionIds: ["INF-2023-002"],
    date: "2023-12-06",
    issuedBy: "P2",
    forwardedTo: "Provincial Mobile Force Company Admin Officer",
    status: "Closed",
    notes: "Personnel corrected uniform issues promptly"
  },
  {
    id: "DR-2023-003",
    inspectionId: "INS-2023-003",
    infractionIds: ["INF-2023-003", "INF-2023-004"],
    date: "2023-12-21",
    issuedBy: "P3",
    forwardedTo: "Regional Mobile Force Battalion Admin Officer",
    status: "Processing",
    notes: "Major vehicle issues still pending resolution"
  }
];

export const mockCompliance: Compliance[] = [
  {
    id: "COMP-2023-001",
    infractionId: "INF-2023-001",
    delinquencyReportId: "DR-2023-001",
    type: "AAR-Action Taken",
    requiredDocuments: ["Updated Maintenance Logs", "Procedural Update Memo"],
    deadline: "2023-12-15",
    status: "Approved",
    submittedDate: "2023-12-10",
    approvedDate: "2023-12-12",
    notes: "All requirements satisfied"
  },
  {
    id: "COMP-2023-002",
    infractionId: "INF-2023-002",
    delinquencyReportId: "DR-2023-002",
    type: "AAR-Action Taken",
    requiredDocuments: ["Personnel Counseling Records", "Uniform Compliance Photos"],
    deadline: "2023-12-20",
    status: "Approved",
    submittedDate: "2023-12-18",
    approvedDate: "2023-12-19",
    notes: "Verification confirmed compliance"
  },
  {
    id: "COMP-2023-003",
    infractionId: "INF-2023-003",
    delinquencyReportId: "DR-2023-003",
    type: "AAR-Action Taken",
    requiredDocuments: ["Vehicle Repair Order", "Safety Inspection Certificate"],
    deadline: "2024-01-20",
    status: "Pending",
    notes: "Awaiting completion of repairs"
  },
  {
    id: "COMP-2023-004",
    infractionId: "INF-2023-004",
    delinquencyReportId: "DR-2023-003",
    type: "AAR-Action Taken",
    requiredDocuments: ["New Documentation System", "Training Records"],
    deadline: "2024-01-10",
    status: "Approved",
    submittedDate: "2024-01-08",
    approvedDate: "2024-01-09",
    notes: "New system implemented successfully"
  }
];

export const mockWorkflowStatus: WorkflowStatus[] = [
  {
    inspectionId: "INS-2023-001",
    currentStep: "Submit Reports",
    completedSteps: [
      "Calendar Preparation",
      "Team Assignment",
      "Coordination",
      "Proceed to Unit",
      "Courtesy Call",
      "Inspection",
      "Infraction Found",
      "Exit Briefing",
      "Delinquency Report",
      "Forward to Admin",
      "Compliance",
      "Update Database",
      "Submit Reports"
    ],
    pendingSteps: [],
    lastUpdated: "2023-12-15"
  },
  {
    inspectionId: "INS-2023-002",
    currentStep: "Submit Reports",
    completedSteps: [
      "Calendar Preparation",
      "Team Assignment",
      "Coordination",
      "Proceed to Unit",
      "Courtesy Call",
      "Inspection",
      "Infraction Found",
      "Exit Briefing",
      "Delinquency Report",
      "Forward to Admin",
      "Compliance",
      "Update Database",
      "Submit Reports"
    ],
    pendingSteps: [],
    lastUpdated: "2023-12-20"
  },
  {
    inspectionId: "INS-2023-003",
    currentStep: "Compliance",
    completedSteps: [
      "Calendar Preparation",
      "Team Assignment",
      "Coordination",
      "Proceed to Unit",
      "Courtesy Call",
      "Inspection",
      "Infraction Found",
      "Exit Briefing",
      "Delinquency Report",
      "Forward to Admin"
    ],
    pendingSteps: [
      "Compliance",
      "Update Database",
      "Submit Reports"
    ],
    lastUpdated: "2024-01-05"
  },
  {
    inspectionId: "INS-2024-001",
    currentStep: "Submit Reports",
    completedSteps: [
      "Calendar Preparation",
      "Team Assignment",
      "Coordination",
      "Proceed to Unit",
      "Courtesy Call",
      "Inspection",
      "Exit Briefing",
      "Submit Reports"
    ],
    pendingSteps: [],
    lastUpdated: "2024-01-11"
  },
  {
    inspectionId: "INS-2024-002",
    currentStep: "Inspection",
    completedSteps: [
      "Calendar Preparation",
      "Team Assignment",
      "Coordination",
      "Proceed to Unit",
      "Courtesy Call"
    ],
    pendingSteps: [
      "Exit Briefing",
      "Submit Reports"
    ],
    lastUpdated: "2024-01-25"
  },
  {
    inspectionId: "INS-2024-003",
    currentStep: "Calendar Preparation",
    completedSteps: [
      "Calendar Preparation"
    ],
    pendingSteps: [
      "Team Assignment",
      "Coordination",
      "Proceed to Unit",
      "Courtesy Call",
      "Inspection",
      "Exit Briefing",
      "Submit Reports"
    ],
    lastUpdated: "2024-01-20"
  }
];
