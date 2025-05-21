
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      <SummaryCards progress={progress} />

      {userType === 'institutional' && (
        <InstitutionalBanner onAccessTools={onAccessTools} />
      )}

      {/* Performance, Allocations, Transactions Tabs */}
      <Tabs defaultValue="performance" className="mb-8">
        <TabsList className="mb-4 bg-white border">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="allocations">Asset Allocation</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance" className="m-0">
          <PerformanceChart />
        </TabsContent>
        
        <TabsContent value="allocations" className="m-0">
          <AssetAllocation />
        </TabsContent>
        
        <TabsContent value="transactions" className="m-0">
          <Transactions />
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FinancialPlanning />
        <NextMeeting />
      </div>
    </div>
  );
};

export default OverviewDashboard;
