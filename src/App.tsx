
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InfractionsPage from "./pages/InfractionsPage";
import NotFound from "./pages/NotFound";
import InspectionCalendarPage from "./pages/InspectionCalendarPage";
import InspectionsPage from "./pages/InspectionsPage";
import DelinquencyReportsPage from "./pages/DelinquencyReportsPage";
import CompliancePage from "./pages/CompliancePage";
import PersonnelPage from "./pages/PersonnelPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/infractions" element={<InfractionsPage />} />
          <Route path="/calendar" element={<InspectionCalendarPage />} />
          <Route path="/inspections" element={<InspectionsPage />} />
          <Route path="/reports" element={<DelinquencyReportsPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/personnel" element={<PersonnelPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
