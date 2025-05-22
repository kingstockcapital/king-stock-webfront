
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { UserCircle, LogOut, Settings } from "lucide-react";

interface PortalHeaderProps {
  user: {
    name: string;
    type: 'retail' | 'institutional';
  };
  onLogout: () => void;
}

const PortalHeader: React.FC<PortalHeaderProps> = ({ user, onLogout }) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  return (
    <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png" 
          alt="King Stock Capital Management Logo" 
          className="h-10 mr-4" 
        />
        <div>
          <h1 className="text-xl font-bold font-serif text-ksc-navy">Client Portal</h1>
          <div className="flex items-center">
            <span className="text-sm text-ksc-darkgray">Welcome, {user.name}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
              {user.type === 'retail' ? 'Retail Investor' : 'Institutional Investor'}
            </span>
          </div>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy/10">
            <UserCircle className="h-4 w-4 mr-2" />
            My Account
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5 text-sm font-medium">{user.name}</div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Account Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setShowLogoutConfirm(true)}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out of your account?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be returned to the login screen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onLogout}>Sign Out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PortalHeader;
