
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Search, UserPlus, Phone, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mockPersonnelData = [
  {
    id: "P001",
    name: "LTC Juan Dela Cruz",
    rank: "Lieutenant Colonel",
    position: "Chief",
    unit: "RIAS-10 HQ",
    badgeNumber: "12345",
    contactInfo: "+63 912 345 6789",
  },
  {
    id: "P002",
    name: "MAJ Maria Santos",
    rank: "Major",
    position: "Deputy Chief",
    unit: "RIAS-10 HQ",
    badgeNumber: "12346",
    contactInfo: "+63 917 123 4567",
  },
  {
    id: "P003",
    name: "CPT Ricardo Dalisay",
    rank: "Captain",
    position: "Team Leader",
    unit: "Investigation Team A",
    badgeNumber: "12347",
    contactInfo: "+63 918 765 4321",
  },
  {
    id: "P004",
    name: "LCDR Ramil Hernandez",
    rank: "Lieutenant Commander",
    position: "Team Leader",
    unit: "Investigation Team B",
    badgeNumber: "12348",
    contactInfo: "+63 919 876 5432",
  },
  {
    id: "P005",
    name: "1LT Anton Mendoza",
    rank: "First Lieutenant",
    position: "Investigator",
    unit: "Investigation Team A",
    badgeNumber: "12349",
    contactInfo: "+63 920 987 6543",
  },
];

const PersonnelPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Personnel</h1>
            <p className="text-muted-foreground">
              Manage RIAS-10 personnel records
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Personnel
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Personnel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockPersonnelData.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Teams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Investigators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Personnel Records</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search personnel..." 
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
                    <TableHead>Name</TableHead>
                    <TableHead>Rank</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Badge #</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPersonnelData.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarFallback>
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>{person.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{person.rank}</TableCell>
                      <TableCell>{person.position}</TableCell>
                      <TableCell>{person.unit}</TableCell>
                      <TableCell>{person.badgeNumber}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
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

export default PersonnelPage;
