
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const allocationsData = [
  { name: "Stocks", value: 45 },
  { name: "Bonds", value: 30 },
  { name: "Real Estate", value: 15 },
  { name: "Cash", value: 10 },
];

const AssetAllocation: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {allocationsData.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.value}%</span>
              </div>
              <Progress value={item.value} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetAllocation;
