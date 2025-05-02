
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search, ZoomIn } from "lucide-react";

const WorkflowDiagram = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Search className="h-4 w-4" /> View Workflow Diagram
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle>RIAS-10 Inspection & Infraction Workflow</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center p-4">
          <img 
            src="/lovable-uploads/4f9bf054-f414-4a0b-ad5a-577f45f2ede2.png" 
            alt="RIAS-10 Workflow Diagram" 
            className="max-w-full h-auto border rounded shadow-sm"
          />
        </div>
        <div className="text-center text-sm text-muted-foreground mt-2">
          Regional Internal Affairs Service 10 Inspection Process Workflow
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkflowDiagram;
