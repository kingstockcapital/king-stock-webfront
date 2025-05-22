
import React from "react";
import SummaryCards from "./SummaryCards";
import PerformanceChart from "./PerformanceChart";
import AssetAllocation from "./AssetAllocation";
import Transactions from "./Transactions";
import FinancialPlanning from "./FinancialPlanning";
import NextMeeting from "./NextMeeting";
import InstitutionalBanner from "./InstitutionalBanner";

interface OverviewDashboardProps {
  progress: number;
  userType: 'retail' | 'institutional';
  onAccessTools: () => void;
}

const OverviewDashboard: React.FC<OverviewDashboardProps> = ({ progress, userType, onAccessTools }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-ksc-navy mb-6">Portfolio Overview</h2>
        <SummaryCards progress={progress} />
      </div>

      {userType === 'institutional' && (
        <InstitutionalBanner onAccessTools={onAccessTools} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        
        <AssetAllocation />
        <Transactions />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <FinancialPlanning />
        <NextMeeting />
      </div>
    </div>
  );
};

export default OverviewDashboard;
