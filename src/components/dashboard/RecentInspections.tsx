
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Inspection } from '@/types';

interface RecentInspectionsProps {
  inspections: Inspection[];
}

const RecentInspections: React.FC<RecentInspectionsProps> = ({ inspections }) => {
  // Sort inspections by date (newest first) and take the first 5
  const recentInspections = [...inspections]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Inspections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentInspections.map((inspection) => (
            <div key={inspection.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">{inspection.unit}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(inspection.date).toLocaleDateString()} - {inspection.type} Inspection
                </p>
                {inspection.findings && <p className="text-sm mt-1">{inspection.findings}</p>}
              </div>
              <Badge 
                className={`
                  ${inspection.status === 'Completed' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                  ${inspection.status === 'Scheduled' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : ''}
                  ${inspection.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : ''}
                  ${inspection.status === 'Cancelled' ? 'bg-red-100 text-red-800 hover:bg-red-100' : ''}
                `}
              >
                {inspection.status}
              </Badge>
            </div>
          ))}
          {recentInspections.length === 0 && <p>No recent inspections</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentInspections;
