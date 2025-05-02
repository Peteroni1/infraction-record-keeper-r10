
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, CheckSquare } from "lucide-react";

const mockComplianceData = [
  {
    id: "CP-2023001",
    infractionId: "INF-2023001",
    type: "AAR-Fatigue Duty",
    unit: "Station 1",
    deadline: "2023-12-15",
    status: "Pending",
  },
  {
    id: "CP-2023002",
    infractionId: "INF-2023005",
    type: "AAR-Action Taken",
    unit: "Station 3",
    deadline: "2023-12-10",
    status: "Submitted",
  },
  {
    id: "CP-2023003",
    infractionId: "INF-2023008",
    type: "Other",
    unit: "Station 2",
    deadline: "2023-11-30",
    status: "Approved",
  },
  {
    id: "CP-2023004",
    infractionId: "INF-2023012",
    type: "AAR-Fatigue Duty",
    unit: "Station 4",
    deadline: "2023-11-25",
    status: "Rejected",
  },
  {
    id: "CP-2023005",
    infractionId: "INF-2023015",
    type: "AAR-Action Taken",
    unit: "Station 1",
    deadline: "2023-11-20",
    status: "Overdue",
  },
];

const CompliancePage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Compliance</h1>
          <p className="text-muted-foreground">
            Track and manage compliance requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockComplianceData.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Overdue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">
                {mockComplianceData.filter(item => item.status === "Overdue").length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {mockComplianceData.filter(item => item.status === "Approved").length}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Compliance Requirements</CardTitle>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search..." 
                    className="pl-8 w-[200px]" 
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="submitted">Submitted</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockComplianceData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>{new Date(item.deadline).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            item.status === "Pending" ? "default" :
                            item.status === "Submitted" ? "secondary" :
                            item.status === "Approved" ? "success" :
                            item.status === "Rejected" ? "destructive" :
                            "outline"
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="icon" className="mr-2">
                          <CheckSquare className="h-4 w-4" />
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

export default CompliancePage;
