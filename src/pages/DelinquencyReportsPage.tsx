
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText } from "lucide-react";
import { mockInspections } from "@/data/mockData";
import { format } from "date-fns";

// Only show inspections that have infractions
const inspectionsWithInfractions = mockInspections.filter(
  (inspection) => inspection.hasInfractions
);

const DelinquencyReportsPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Delinquency Reports</h1>
            <p className="text-muted-foreground">
              Manage and track delinquency reports for infractions
            </p>
          </div>
          <Button>Generate New Report</Button>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Reports</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search reports..." 
                  className="pl-8 w-[250px]" 
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Inspection</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inspectionsWithInfractions.map((inspection, index) => (
                    <TableRow key={inspection.id}>
                      <TableCell>DR-{2023000 + index}</TableCell>
                      <TableCell>{format(new Date(inspection.date), "MMM d, yyyy")}</TableCell>
                      <TableCell>{inspection.type} Inspection</TableCell>
                      <TableCell>{inspection.unit}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            index % 4 === 0 ? "default" : 
                            index % 4 === 1 ? "secondary" : 
                            index % 4 === 2 ? "outline" : "success"
                          }
                        >
                          {index % 4 === 0 ? "Draft" : 
                           index % 4 === 1 ? "Issued" : 
                           index % 4 === 2 ? "Processing" : "Closed"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="icon" className="mr-2">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default DelinquencyReportsPage;
