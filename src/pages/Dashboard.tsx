
import React from 'react';
import { CheckSquare, ClipboardCheck, FileText, ShieldAlert } from "lucide-react";
import AppLayout from '@/components/layout/AppLayout';
import StatCard from '@/components/dashboard/StatCard';
import InspectionStatusChart from '@/components/dashboard/InspectionStatusChart';
import InfractionSeverityChart from '@/components/dashboard/InfractionSeverityChart';
import RecentInspections from '@/components/dashboard/RecentInspections';
import WorkflowOverview from '@/components/dashboard/WorkflowOverview';
import WorkflowDiagram from '@/components/workflow/WorkflowDiagram';
import { 
  mockInspections, 
  mockInfractions, 
  mockDelinquencyReports, 
  mockCompliance 
} from '@/data/mockData';

const Dashboard = () => {
  // Calculate summary statistics
  const completedInspections = mockInspections.filter(i => i.status === 'Completed').length;
  const pendingInspections = mockInspections.filter(i => i.status !== 'Completed').length;
  const totalInfractions = mockInfractions.length;
  const openInfractions = mockInfractions.filter(i => i.status !== 'Resolved').length;
  const complianceRate = Math.round((mockCompliance.filter(c => c.status === 'Approved').length / mockCompliance.length) * 100);
  const pendingReports = mockDelinquencyReports.filter(r => r.status !== 'Closed').length;

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-rias-primary">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to the RIAS-10 Infraction Record Keeper</p>
          </div>
          <WorkflowDiagram />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Inspections Completed" 
            value={completedInspections}
            description={`${pendingInspections} pending inspections`}
            icon={<ClipboardCheck size={20} />}
          />
          <StatCard 
            title="Total Infractions" 
            value={totalInfractions}
            description={`${openInfractions} open infractions`}
            icon={<ShieldAlert size={20} />}
          />
          <StatCard 
            title="Compliance Rate" 
            value={`${complianceRate}%`}
            description="Based on resolved compliance requirements"
            icon={<CheckSquare size={20} />}
          />
          <StatCard 
            title="Pending Reports" 
            value={pendingReports}
            description="Delinquency reports awaiting processing"
            icon={<FileText size={20} />}
          />
        </div>

        <WorkflowOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InspectionStatusChart inspections={mockInspections} />
          <InfractionSeverityChart infractions={mockInfractions} />
        </div>
        
        <RecentInspections inspections={mockInspections} />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
