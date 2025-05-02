
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { mockInspections } from '@/data/mockData';

const WorkflowOverview = () => {
  // Count inspections at each stage
  const counts = {
    planning: 0,
    inspection: 0,
    processing: 0,
    compliance: 0,
    completed: 0
  };
  
  mockInspections.forEach(inspection => {
    if (inspection.status === 'Scheduled') {
      counts.planning++;
    } else if (inspection.status === 'In Progress') {
      counts.inspection++;
    } else if (inspection.status === 'Completed' && inspection.hasInfractions) {
      // Check if this has unresolved infractions
      const hasUnresolvedInfractions = false; // In a real app, you would check the infractions
      if (hasUnresolvedInfractions) {
        counts.compliance++;
      } else {
        counts.processing++;
      }
    } else if (inspection.status === 'Completed') {
      counts.completed++;
    }
  });
  
  const workflowSteps = [
    { name: 'Planning & Scheduling', count: counts.planning, icon: <Clock size={16} /> },
    { name: 'Active Inspections', count: counts.inspection, icon: <Clock size={16} /> },
    { name: 'Processing Findings', count: counts.processing, icon: <Clock size={16} /> },
    { name: 'Pending Compliance', count: counts.compliance, icon: <Clock size={16} /> },
    { name: 'Completed', count: counts.completed, icon: <Check size={16} /> }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Workflow Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Workflow Timeline */}
          <div className="flex justify-between mb-2">
            {workflowSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center w-1/5"
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${step.count > 0 ? 'bg-rias-primary text-white' : 'bg-gray-100 text-gray-400'}
                `}>
                  {step.icon}
                </div>
                <div className="text-xs text-center mt-2 font-medium">{step.name}</div>
                <div className="text-lg font-bold">{step.count}</div>
              </div>
            ))}
          </div>
          
          {/* Connecting Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" style={{ width: '80%', left: '10%' }}></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkflowOverview;
