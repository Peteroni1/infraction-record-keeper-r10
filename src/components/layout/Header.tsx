
import { useState } from 'react';
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [userName] = useState("Admin User");

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold text-rias-primary">Infraction Record Keeper</h2>
      </div>

      <div className="flex items-center">
        {/* Search */}
        <div className="relative mr-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search..." 
            className="pl-8 w-64 h-9 bg-gray-50" 
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="mr-2 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        {/* User Menu */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-rias-primary text-white flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
          <span className="text-sm font-medium">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
