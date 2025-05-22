
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const allocationsData = [
  { name: "Stocks", value: 45, color: "bg-blue-500" },
  { name: "Bonds", value: 30, color: "bg-green-500" },
  { name: "Real Estate", value: 15, color: "bg-amber-500" },
  { name: "Cash", value: 10, color: "bg-gray-400" },
];

const AssetAllocation: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Current Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Visual representation of allocation as a horizontal stacked bar */}
        <div className="w-full h-8 flex rounded-md overflow-hidden mb-6">
          {allocationsData.map((item, i) => (
            <div 
              key={item.name}
              className={`${item.color} h-full`} 
              style={{ width: `${item.value}%` }}
              title={`${item.name}: ${item.value}%`}
            />
          ))}
        </div>
        
        {/* Legend and details */}
        <div className="space-y-4">
          {allocationsData.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.value}%</span>
              </div>
              <Progress value={item.value} className={`h-2 ${item.color.replace('bg-', 'bg-opacity-40')}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetAllocation;
