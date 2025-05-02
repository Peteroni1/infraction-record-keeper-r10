
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
import { mockInspectionsData } from "@/data/mockData";
import { format } from "date-fns";
import { Search } from "lucide-react";

const InspectionsPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Inspections</h1>
            <p className="text-muted-foreground">
              View and manage all inspection records
            </p>
          </div>
          <Button>New Inspection</Button>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Inspection Records</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search inspections..." 
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
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Infractions</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockInspectionsData.map((inspection) => (
                    <TableRow key={inspection.id}>
                      <TableCell>{format(new Date(inspection.date), "MMM d, yyyy")}</TableCell>
                      <TableCell>{inspection.type}</TableCell>
                      <TableCell>{inspection.unit}</TableCell>
                      <TableCell>{inspection.location}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            inspection.status === "Completed" ? "success" :
                            inspection.status === "In Progress" ? "warning" :
                            inspection.status === "Cancelled" ? "destructive" : "default"
                          }
                        >
                          {inspection.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {inspection.hasInfractions ? (
                          <Badge variant="destructive">Yes</Badge>
                        ) : (
                          <Badge variant="outline">No</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
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

export default InspectionsPage;
