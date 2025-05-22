
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChartPieIcon, LineChart, BarChart3, BarChartHorizontal, Users } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userType: 'retail' | 'institutional';
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, userType }) => {
  const navItems = [
    { id: "overview", label: "Overview", icon: <ChartPieIcon className="h-5 w-5" /> },
    { id: "advanced", label: "Advanced Metrics", icon: <LineChart className="h-5 w-5" /> },
    { id: "blockchain", label: "Blockchain Metrics", icon: <BarChart3 className="h-5 w-5" /> },
    { id: "request", label: "Investment Inquiry", icon: <BarChartHorizontal className="h-5 w-5" /> },
  ];

  if (userType === 'institutional') {
    navItems.splice(3, 0, { id: "institutional-tools", label: "Institutional Tools", icon: <Users className="h-5 w-5" /> });
  }

  return (
    <Card className="w-full md:w-64 md:h-[calc(100vh-180px)] rounded-lg overflow-hidden flex-shrink-0 bg-white border shadow-sm">
      <div className="p-3 md:p-4 border-b">
        <div className="font-medium text-base md:text-lg text-ksc-navy">Dashboard Menu</div>
      </div>
      <div className="p-2 space-y-1 max-h-[70vh] md:h-full overflow-y-auto">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className={`w-full justify-start px-3 py-2 ${
              activeTab === item.id 
                ? "bg-ksc-navy text-white" 
                : "text-ksc-navy hover:bg-slate-100"
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default Sidebar;
