
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign, ArrowUpRight, ChartPie, Wallet } from "lucide-react";

interface SummaryCardsProps {
  progress: number;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ progress }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">Total Balance</CardTitle>
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-ksc-navy" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-ksc-navy">$247,829.00</div>
          <div className="flex items-center pt-1 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">+4.5%</span>
            <span className="text-muted-foreground ml-2">from last month</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">YTD Returns</CardTitle>
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <ChartPie className="h-5 w-5 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-ksc-navy">12.8%</div>
          <div className="flex items-center pt-1 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">+2.1%</span>
            <span className="text-muted-foreground ml-2">above benchmark</span>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">Target Progress</CardTitle>
          <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
            <Wallet className="h-5 w-5 text-amber-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Retirement Goal</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-100" />
          <div className="mt-2 text-sm text-muted-foreground">
            $247,829 of $320,000 target
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
