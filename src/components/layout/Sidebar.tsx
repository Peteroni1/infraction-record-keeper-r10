
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ClipboardCheck, 
  FileText, 
  Home, 
  Settings, 
  Users,
  Database,
  CheckSquare
} from "lucide-react";

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
};

const SidebarItem = ({ icon, label, to, active = false }: SidebarItemProps) => {
  return (
    <Link to={to}>
      <Button 
        variant={active ? "default" : "ghost"} 
        className={`w-full justify-start mb-1 ${active ? 'bg-rias-primary text-white' : ''}`}
      >
        <span className="mr-2">{icon}</span>
        {label}
      </Button>
    </Link>
  );
};

interface SidebarProps {
  currentPath: string;
}

const Sidebar = ({ currentPath }: SidebarProps) => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="mb-8 flex items-center justify-center">
        <h1 className="text-xl font-bold text-rias-primary">RIAS-10</h1>
      </div>
      
      <nav className="flex-1">
        <SidebarItem 
          icon={<Home size={18} />} 
          label="Dashboard" 
          to="/" 
          active={currentPath === "/"} 
        />
        <SidebarItem 
          icon={<Calendar size={18} />} 
          label="Inspection Calendar" 
          to="/calendar" 
          active={currentPath === "/calendar"} 
        />
        <SidebarItem 
          icon={<ClipboardCheck size={18} />} 
          label="Inspections" 
          to="/inspections" 
          active={currentPath === "/inspections"} 
        />
        <SidebarItem 
          icon={<FileText size={18} />} 
          label="Delinquency Reports" 
          to="/reports" 
          active={currentPath === "/reports"} 
        />
        <SidebarItem 
          icon={<Database size={18} />} 
          label="Infractions Database" 
          to="/infractions" 
          active={currentPath === "/infractions"} 
        />
        <SidebarItem 
          icon={<CheckSquare size={18} />} 
          label="Compliance" 
          to="/compliance" 
          active={currentPath === "/compliance"} 
        />
        <SidebarItem 
          icon={<Users size={18} />} 
          label="Personnel" 
          to="/personnel" 
          active={currentPath === "/personnel"} 
        />
        <SidebarItem 
          icon={<Settings size={18} />} 
          label="Settings" 
          to="/settings" 
          active={currentPath === "/settings"} 
        />
      </nav>
      
      <div className="pt-4 mt-auto border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Regional Internal Affairs Service 10
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
