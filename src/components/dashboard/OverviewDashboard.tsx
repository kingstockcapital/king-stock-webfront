
import React from "react";
import SummaryCards from "./SummaryCards";
import PerformanceChart from "./PerformanceChart";
import AssetAllocation from "./AssetAllocation";
import Transactions from "./Transactions";
import FinancialPlanning from "./FinancialPlanning";
import NextMeeting from "./NextMeeting";
import InstitutionalBanner from "./InstitutionalBanner";
import { useIsMobile } from "@/hooks/use-mobile";

interface OverviewDashboardProps {
  progress: number;
  userType: 'retail' | 'institutional';
  onAccessTools: () => void;
}

const OverviewDashboard: React.FC<OverviewDashboardProps> = ({ progress, userType, onAccessTools }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-ksc-navy mb-4 md:mb-6">Portfolio Overview</h2>
        <SummaryCards progress={progress} />
      </div>

      {userType === 'institutional' && (
        <InstitutionalBanner onAccessTools={onAccessTools} />
      )}

      <div className="space-y-6">
        <div className="w-full">
          <PerformanceChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AssetAllocation />
          <Transactions />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <FinancialPlanning />
        <NextMeeting />
      </div>
    </div>
  );
};

export default OverviewDashboard;
