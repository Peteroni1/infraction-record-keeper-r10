
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppLayout from '@/components/layout/AppLayout';
import InfractionList from '@/components/infractions/InfractionList';
import InfractionDetail from '@/components/infractions/InfractionDetail';
import { mockInfractions } from '@/data/mockData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Infraction } from '@/types';

const InfractionsPage = () => {
  const [selectedInfraction, setSelectedInfraction] = useState<Infraction | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Filter infractions based on status
  const pendingInfractions = mockInfractions.filter(
    inf => ['Pending', 'Under Review', 'Processed'].includes(inf.status)
  );
  
  const resolvedInfractions = mockInfractions.filter(
    inf => inf.status === 'Resolved'
  );

  const handleViewInfraction = (infraction: Infraction) => {
    setSelectedInfraction(infraction);
    setIsDetailOpen(true);
  };

  const handleEditInfraction = (infraction: Infraction) => {
    // In a real app, this would open an edit form
    setSelectedInfraction(infraction);
    // For now, just show the detail view
    setIsDetailOpen(true);
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-rias-primary">Infractions Database</h1>
          <p className="text-muted-foreground">
            Manage and track all infractions recorded during inspections
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Infractions</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <InfractionList 
              infractions={mockInfractions} 
              onView={handleViewInfraction}
              onEdit={handleEditInfraction}
            />
          </TabsContent>
          
          <TabsContent value="pending" className="mt-4">
            <InfractionList 
              infractions={pendingInfractions} 
              onView={handleViewInfraction}
              onEdit={handleEditInfraction}
            />
          </TabsContent>
          
          <TabsContent value="resolved" className="mt-4">
            <InfractionList 
              infractions={resolvedInfractions} 
              onView={handleViewInfraction}
              onEdit={handleEditInfraction}
            />
          </TabsContent>
        </Tabs>

        {/* Infraction Detail Dialog */}
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent className="max-w-3xl">
            {selectedInfraction && (
              <InfractionDetail 
                infraction={selectedInfraction}
                onClose={() => setIsDetailOpen(false)}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default InfractionsPage;
