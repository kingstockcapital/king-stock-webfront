
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowLeft } from "lucide-react";

// Sample chart data - in a real app, this would be based on the selected metric
const generateChartData = (metricName: string) => {
  // Generate some random data based on the metric name
  const data = [];
  const now = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Use the hash of the metric name to generate consistent random values
    const hash = metricName.split("").reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    // Base value changes based on metric name hash
    const baseValue = Math.abs(hash % 100) / 10;
    
    // Generate a value with some randomness but also a trend
    const value = baseValue + (Math.sin(i/5) * 10) + (Math.random() * 5);
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: parseFloat(value.toFixed(2))
    });
  }
  
  return data;
};

interface MetricDetailChartProps {
  metric: {
    name: string;
    description: string;
    value: string;
    change: string;
    status: string;
  };
  onClose: () => void;
}

const MetricDetailChart: React.FC<MetricDetailChartProps> = ({ metric, onClose }) => {
  const chartData = generateChartData(metric.name);

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Button variant="ghost" size="sm" onClick={onClose} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              {metric.name}
            </CardTitle>
            <CardDescription>{metric.description}</CardDescription>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">{metric.value}</div>
            <div className={metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
              {metric.change} (24h)
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ChartContainer config={{}}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  domain={['auto', 'auto']} 
                />
                <Tooltip 
                  formatter={(value: any) => [`${value}`, 'Value']}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Line 
                  type="monotone"
                  dataKey="value" 
                  stroke={
                    metric.status === "Optimal" 
                      ? "#22c55e" // green
                      : metric.status === "Monitor" 
                        ? "#f59e0b" // amber
                        : metric.status === "Neutral" 
                          ? "#3b82f6" // blue
                          : "#ef4444" // red
                  }
                  strokeWidth={2} 
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="mt-6 text-sm text-muted-foreground">
          <p className="mb-2"><strong>Metric Analysis:</strong></p>
          <p>
            This chart shows the historical data for {metric.name.toLowerCase()} over the last 30 days. 
            {metric.change.startsWith("+") 
              ? " The metric has been trending upward, which is " + (metric.status === "Optimal" ? "positive" : "concerning") + "."
              : " The metric has been trending downward, which is " + (metric.status === "Optimal" ? "concerning" : "positive") + "."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricDetailChart;
