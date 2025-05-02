
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Infraction } from '@/types';

interface InfractionDetailProps {
  infraction: Infraction;
  onClose: () => void;
}

const InfractionDetail: React.FC<InfractionDetailProps> = ({ infraction, onClose }) => {
  // Helper for severity badge styles
  const getSeverityBadgeClass = (severity: string) => {
    switch(severity) {
      case 'Minor':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'Major':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-100';
      case 'Critical':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      default:
        return '';
    }
  };
  
  // Helper for status badge styles
  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'Pending':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
      case 'Under Review':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-100';
      case 'Processed':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'Resolved':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'Escalated':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      default:
        return '';
    }
  };
  
  // Helper for compliance status badge styles
  const getComplianceBadgeClass = (status?: string) => {
    if (!status) return '';
    
    switch(status) {
      case 'Pending':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
      case 'Compliant':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'Non-Compliant':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      default:
        return '';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl text-rias-primary">Infraction Details</CardTitle>
            <CardDescription>{infraction.id}</CardDescription>
          </div>
          <Badge className={getSeverityBadgeClass(infraction.severity)}>
            {infraction.severity} Severity
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-medium mb-2">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Date Recorded</p>
              <p>{new Date(infraction.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p>{infraction.type}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Unit</p>
              <p>{infraction.unit || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Inspection Reference</p>
              <p>{infraction.inspectionId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge className={getStatusBadgeClass(infraction.status)}>
                {infraction.status}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Delinquency Report</p>
              <p>{infraction.delinquencyReport || 'Not issued'}</p>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div>
          <h3 className="text-lg font-medium mb-2">Description</h3>
          <p className="text-sm bg-gray-50 p-3 rounded">{infraction.description}</p>
        </div>
        
        {/* Personnel Involved */}
        {infraction.personnel && infraction.personnel.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Personnel Involved</h3>
            <ul className="list-disc pl-5">
              {infraction.personnel.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Compliance Status */}
        <div>
          <h3 className="text-lg font-medium mb-2">Compliance Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Compliance Status</p>
              {infraction.complianceStatus ? (
                <Badge className={getComplianceBadgeClass(infraction.complianceStatus)}>
                  {infraction.complianceStatus}
                </Badge>
              ) : (
                <p>Not applicable</p>
              )}
            </div>
            {infraction.complianceDeadline && (
              <div>
                <p className="text-sm text-muted-foreground">Compliance Deadline</p>
                <p>{new Date(infraction.complianceDeadline).toLocaleDateString()}</p>
              </div>
            )}
          </div>
          {infraction.complianceNotes && (
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Compliance Notes</p>
              <p className="text-sm bg-gray-50 p-3 rounded mt-1">{infraction.complianceNotes}</p>
            </div>
          )}
        </div>
        
        {/* Action Taken */}
        {infraction.actionTaken && (
          <div>
            <h3 className="text-lg font-medium mb-2">Action Taken</h3>
            <p className="text-sm bg-gray-50 p-3 rounded">{infraction.actionTaken}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>Close</Button>
        <Button>Edit Record</Button>
      </CardFooter>
    </Card>
  );
};

export default InfractionDetail;
