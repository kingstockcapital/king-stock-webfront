
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import ProfileModal from "./ProfileModal";

interface PortalHeaderProps {
  user: {
    name: string;
    type: 'retail' | 'institutional';
    email: string; // Changed from optional to required
    organization?: string;
  };
  onLogout: () => void;
}

const PortalHeader: React.FC<PortalHeaderProps> = ({ user, onLogout }) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

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
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="border-ksc-navy hover:bg-ksc-navy/10 flex items-center gap-2"
          onClick={() => setIsProfileModalOpen(true)}
        >
          <UserRound size={16} />
          <span>Profile</span>
        </Button>
        <Button 
          variant="outline" 
          className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy/10"
          onClick={onLogout}
        >
          Sign Out
        </Button>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        user={user}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
};

export default PortalHeader;
