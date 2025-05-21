
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const FinancialPlanning: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Planning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Retirement</span>
              <span className="text-sm text-muted-foreground">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Education</span>
              <span className="text-sm text-muted-foreground">65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Home Purchase</span>
              <span className="text-sm text-muted-foreground">45%</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialPlanning;
