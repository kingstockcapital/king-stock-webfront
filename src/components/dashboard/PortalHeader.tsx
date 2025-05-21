
import React from "react";
import { Button } from "@/components/ui/button";

interface PortalHeaderProps {
  user: {
    name: string;
    type: 'retail' | 'institutional';
  };
  onLogout: () => void;
}

const PortalHeader: React.FC<PortalHeaderProps> = ({ user, onLogout }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-ksc-navy mb-2">Client Portal</h1>
        <div className="flex items-center">
          <p className="text-ksc-darkgray">Welcome, {user.name}</p>
          <span className="mx-2">•</span>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
            {user.type === 'retail' ? 'Retail Investor' : 'Institutional Investor'}
          </span>
        </div>
      </div>
      <Button 
        variant="outline" 
        className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy/10"
        onClick={onLogout}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default PortalHeader;
