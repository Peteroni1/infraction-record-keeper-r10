
import AppLayout from "@/components/layout/AppLayout";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { mockInspectionsData } from "@/data/mockData";
import { format } from "date-fns";

const InspectionCalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Find inspections for the selected date
  const inspectionsForSelectedDate = date 
    ? mockInspectionsData.filter(inspection => {
        const inspectionDate = new Date(inspection.date);
        return (
          inspectionDate.getDate() === date.getDate() &&
          inspectionDate.getMonth() === date.getMonth() &&
          inspectionDate.getFullYear() === date.getFullYear()
        );
      })
    : [];

  // Get dates that have inspections for highlighting in calendar
  const inspectionDates = mockInspectionsData.map(inspection => new Date(inspection.date));

  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inspection Calendar</h1>
          <p className="text-muted-foreground">
            View and manage scheduled inspections
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Monthly Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-md shadow p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="p-0 pointer-events-auto"
                  modifiers={{
                    hasInspection: inspectionDates,
                  }}
                  modifiersStyles={{
                    hasInspection: {
                      fontWeight: "bold",
                      borderBottom: "2px solid var(--rias-primary)",
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {date ? format(date, "MMMM d, yyyy") : "Select a date"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {inspectionsForSelectedDate.length > 0 ? (
                <div className="space-y-4">
                  {inspectionsForSelectedDate.map((inspection) => (
                    <div key={inspection.id} className="border rounded-md p-3 bg-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{inspection.type} Inspection</h3>
                          <p className="text-sm text-muted-foreground">{inspection.unit}</p>
                          <p className="text-sm">{inspection.location}</p>
                        </div>
                        <Badge 
                          variant={
                            inspection.status === "Completed" ? "success" :
                            inspection.status === "In Progress" ? "warning" :
                            inspection.status === "Cancelled" ? "destructive" : "default"
                          }
                        >
                          {inspection.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No inspections scheduled for this date.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default InspectionCalendarPage;
