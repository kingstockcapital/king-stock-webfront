
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";

// Sample data for demonstration
const performanceData = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 1900 },
  { month: "Mar", value: 1600 },
  { month: "Apr", value: 2200 },
  { month: "May", value: 1800 },
  { month: "Jun", value: 2400 },
  { month: "Jul", value: 2100 },
  { month: "Aug", value: 2800 },
  { month: "Sep", value: 3200 },
  { month: "Oct", value: 3000 },
  { month: "Nov", value: 3500 },
  { month: "Dec", value: 3800 },
];

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded shadow-lg">
        <p className="text-sm font-medium">{`${payload[0].payload.month}: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const PerformanceChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState("1Y");
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Portfolio Performance</CardTitle>
        <div className="flex space-x-2">
          <Button 
            variant={timeRange === "1M" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("1M")}
            className={timeRange === "1M" ? "bg-ksc-navy text-white" : ""}
          >
            1M
          </Button>
          <Button 
            variant={timeRange === "3M" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("3M")}
            className={timeRange === "3M" ? "bg-ksc-navy text-white" : ""}
          >
            3M
          </Button>
          <Button 
            variant={timeRange === "1Y" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("1Y")}
            className={timeRange === "1Y" ? "bg-ksc-navy text-white" : ""}
          >
            1Y
          </Button>
          <Button 
            variant={timeRange === "ALL" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("ALL")}
            className={timeRange === "ALL" ? "bg-ksc-navy text-white" : ""}
          >
            All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ChartContainer config={{}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#D4AF37"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
