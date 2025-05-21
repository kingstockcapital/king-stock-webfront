import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { Search, Filter, ChartPie, TrendingUp, Database, Ban } from "lucide-react";

// Sample data for metrics visualization
const blockchainMetricsData = [
  { date: "Jan", value: 65, transactions: 15200 },
  { date: "Feb", value: 72, transactions: 17800 },
  { date: "Mar", value: 84, transactions: 19400 },
  { date: "Apr", value: 78, transactions: 18300 },
  { date: "May", value: 90, transactions: 21500 },
  { date: "Jun", value: 96, transactions: 23700 },
];

const sentimentData = [
  { category: "Bull", value: 68 },
  { category: "Bear", value: 32 },
  { category: "Neutral", value: 47 },
  { category: "Fear", value: 54 },
  { category: "Greed", value: 72 },
];

// Categories of metrics based on the provided articles
const metricCategories = [
  {
    id: "market",
    name: "Market & Liquidity",
    icon: <ChartPie className="h-5 w-5 text-blue-500" />,
    metrics: [
      "Order Book Depth",
      "Bid-Ask Spread",
      "Trading Volume",
      "Market Cap / TVL Ratio",
      "Volatility Index",
      "Liquidity Premium",
      "Price Impact Metrics",
      "Slippage Rates",
      "Centralized vs DEX Volume",
      "Whale Transaction Volume"
    ]
  },
  {
    id: "sentiment",
    name: "Sentiment & Activity",
    icon: <TrendingUp className="h-5 w-5 text-purple-500" />,
    metrics: [
      "Social Media Engagement",
      "Sentiment Analysis Score",
      "Fear & Greed Index",
      "Developer Activity",
      "GitHub Commits",
      "New Address Growth",
      "Active Addresses",
      "Transaction Count",
      "Network Hash Rate",
      "Block Time Consistency"
    ]
  },
  {
    id: "economics",
    name: "Economic & Valuation",
    icon: <Ban className="h-5 w-5 text-green-500" />,
    metrics: [
      "NVT Ratio",
      "MVRV Ratio",
      "Realized Cap",
      "Stablecoin Supply Ratio",
      "Exchange Inflow/Outflow",
      "Supply Distribution",
      "Holder Concentration",
      "Coin Days Destroyed",
      "Stock-to-Flow Ratio",
      "Mining Profitability"
    ]
  },
  {
    id: "network",
    name: "Network & Flow",
    icon: <Database className="h-5 w-5 text-amber-500" />,
    metrics: [
      "Flow Centrality Index",
      "Network Value",
      "Transaction Value Density",
      "Fee Market Dynamics",
      "Mempool Growth Rate",
      "Block Space Utilization",
      "Cross-Chain Volume",
      "Bridge/Wrapped Assets Volume",
      "Layer 2 Transaction Share",
      "Gas Price Volatility"
    ]
  },
  {
    id: "predictive",
    name: "Predictive & Risk",
    icon: <TrendingUp className="h-5 w-5 text-red-500" />,
    metrics: [
      "On-chain Value Signals",
      "Short-term Holder ROI",
      "Long-term Holder ROI",
      "Exchange Reserve Change",
      "Futures Funding Rate",
      "Options Put/Call Ratio",
      "Open Interest Growth",
      "Liquidation Levels",
      "Leverage Ratio",
      "Correlation with Traditional Assets"
    ]
  }
];

const InstitutionalTools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("market");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMetrics = metricCategories.map(category => ({
    ...category,
    metrics: category.metrics.filter(metric => 
      metric.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  const selectedCategoryData = metricCategories.find(c => c.id === selectedCategory);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Description Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Institutional Analytics Hub</CardTitle>
          <CardDescription>
            Access to advanced metrics, analytics, and insights for institutional investors. Powered by proprietary models and comprehensive data sources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Input 
              placeholder="Search metrics..." 
              className="max-w-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
            {metricCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="flex items-center justify-start gap-2"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Blockchain Activity Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ChartContainer config={{}}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={blockchainMetricsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      name="Index Value"
                    />
                    <Area
                      type="monotone"
                      dataKey="transactions"
                      stroke="#82ca9d"
                      fillOpacity={0}
                      name="Transactions"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Sentiment Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ChartContainer config={{}}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle>{selectedCategoryData?.name} Metrics</CardTitle>
          <CardDescription>
            Detailed metrics and indicators for {selectedCategoryData?.name.toLowerCase()} analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Current Value</TableHead>
                <TableHead>Change (24h)</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMetrics
                .find(c => c.id === selectedCategory)?.metrics.map((metric, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{metric}</TableCell>
                    <TableCell>
                      {index % 2 === 0 
                        ? (Math.random() * 100).toFixed(2) 
                        : (Math.random() * 10).toFixed(3)}
                    </TableCell>
                    <TableCell className={index % 3 === 0 ? "text-green-600" : "text-red-600"}>
                      {index % 3 === 0 ? "+" : ""}{(Math.random() * 10 - 5).toFixed(2)}%
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        index % 4 === 0 
                          ? "bg-green-100 text-green-800" 
                          : index % 4 === 1 
                            ? "bg-amber-100 text-amber-800" 
                            : index % 4 === 2 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-red-100 text-red-800"
                      }`}>
                        {index % 4 === 0 
                          ? "Optimal" 
                          : index % 4 === 1 
                            ? "Monitor" 
                            : index % 4 === 2 
                              ? "Neutral" 
                              : "Warning"}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Documentation and Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Research Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <a href="#" className="text-blue-600 hover:underline">Comprehensive List of Metrics for Blockchain Analytics</a>
                <span className="text-xs text-muted-foreground">May 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <a href="#" className="text-blue-600 hover:underline">Decoding Market Sentiment in a Blockchain Economy</a>
                <span className="text-xs text-muted-foreground">Apr 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <a href="#" className="text-blue-600 hover:underline">The Blockchain Economy: A New Era</a>
                <span className="text-xs text-muted-foreground">Mar 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <a href="#" className="text-blue-600 hover:underline">Flow Centrality in a Blockchain Economy</a>
                <span className="text-xs text-muted-foreground">Feb 2025</span>
              </li>
              <li className="flex justify-between items-center">
                <a href="#" className="text-blue-600 hover:underline">Predicting Money Flows in a Blockchain</a>
                <span className="text-xs text-muted-foreground">Jan 2025</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Access</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Access our institutional-grade metrics directly via our secure API. Download comprehensive datasets for custom analysis.
            </p>
            <div className="flex flex-col space-y-2">
              <Button>Generate API Key</Button>
              <Button variant="outline">Download Documentation</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstitutionalTools;
