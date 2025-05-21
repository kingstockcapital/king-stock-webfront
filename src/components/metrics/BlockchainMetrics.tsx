
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import MetricDetailChart from "./MetricDetailChart";

// Types of metrics based on the comprehensive article
const marketMetrics = [
  { name: "Order Book Depth", description: "Measures the volume of buy and sell orders at different price levels", value: "128.4", change: "+2.3%", status: "Optimal" },
  { name: "Bid-Ask Spread", description: "The difference between the highest buy offer and lowest sell offer", value: "0.15%", change: "-0.05%", status: "Optimal" },
  { name: "Trading Volume", description: "Total volume of assets traded in a given period", value: "$452M", change: "+18.2%", status: "Monitor" },
  { name: "Market Cap / TVL Ratio", description: "Compares market capitalization to total value locked", value: "1.2", change: "-0.1", status: "Optimal" },
  { name: "Volatility Index", description: "Measure of price fluctuations over time", value: "38.4", change: "+5.2%", status: "Warning" },
  { name: "Liquidity Premium", description: "Additional return required for less liquid assets", value: "2.8%", change: "+0.3%", status: "Monitor" },
  { name: "Price Impact Metrics", description: "Effect of large orders on asset price", value: "1.25%", change: "-0.15%", status: "Optimal" },
  { name: "Slippage Rates", description: "Difference between expected price and execution price", value: "0.85%", change: "+0.1%", status: "Monitor" },
  { name: "CEX vs DEX Volume", description: "Trading volume comparison between centralized and decentralized exchanges", value: "2.3:1", change: "-0.2", status: "Neutral" },
  { name: "Whale Transaction Volume", description: "Volume of large-scale transactions", value: "$78M", change: "+12.5%", status: "Monitor" }
];

const activityMetrics = [
  { name: "Social Media Engagement", description: "Mentions and interactions on social platforms", value: "12,840", change: "+15.3%", status: "Optimal" },
  { name: "Sentiment Analysis Score", description: "Aggregated sentiment from social media and news", value: "68/100", change: "+4", status: "Optimal" },
  { name: "Fear & Greed Index", description: "Market sentiment indicator", value: "72", change: "+8", status: "Monitor" },
  { name: "Developer Activity", description: "Contributions and commits to project codebase", value: "428", change: "+52", status: "Optimal" },
  { name: "GitHub Commits", description: "Code contributions in GitHub repositories", value: "185", change: "-23", status: "Monitor" },
  { name: "New Address Growth", description: "Rate of new wallet address creation", value: "8,420", change: "+11.5%", status: "Optimal" },
  { name: "Active Addresses", description: "Number of unique addresses with activity", value: "154K", change: "+3.8%", status: "Optimal" },
  { name: "Transaction Count", description: "Total number of transactions", value: "1.2M", change: "+5.4%", status: "Monitor" },
  { name: "Network Hash Rate", description: "Total computational power of the network", value: "235 EH/s", change: "+8.2%", status: "Optimal" },
  { name: "Block Time Consistency", description: "Stability of block production intervals", value: "9.8s", change: "-0.2s", status: "Optimal" }
];

const valuationMetrics = [
  { name: "NVT Ratio", description: "Network Value to Transactions Ratio", value: "65.3", change: "+3.2", status: "Monitor" },
  { name: "MVRV Ratio", description: "Market Value to Realized Value Ratio", value: "2.8", change: "+0.4", status: "Warning" },
  { name: "Realized Cap", description: "Value based on when coins last moved", value: "$485B", change: "+$14B", status: "Monitor" },
  { name: "Stablecoin Supply Ratio", description: "Stablecoins relative to cryptocurrency market cap", value: "0.08", change: "+0.01", status: "Neutral" },
  { name: "Exchange Inflow/Outflow", description: "Net movement of assets to/from exchanges", value: "-$32M", change: "-$18M", status: "Optimal" },
  { name: "Supply Distribution", description: "Distribution of assets across address sizes", value: "0.72 Gini", change: "-0.01", status: "Monitor" },
  { name: "Holder Concentration", description: "Assets held by top addresses", value: "18.5%", change: "-0.7%", status: "Optimal" },
  { name: "Coin Days Destroyed", description: "Economic activity indicator based on dormant coins", value: "24.5M", change: "+3.8M", status: "Monitor" },
  { name: "Stock-to-Flow Ratio", description: "Measure of scarcity and inflation rate", value: "56.2", change: "+0.8", status: "Optimal" },
  { name: "Mining Profitability", description: "Profit margins for mining operations", value: "38%", change: "-5%", status: "Warning" }
];

const networkMetrics = [
  { name: "Flow Centrality Index", description: "Measure of transaction flow centralization", value: "0.42", change: "-0.03", status: "Optimal" },
  { name: "Network Value", description: "Total economic value of the network", value: "$850B", change: "+$34B", status: "Optimal" },
  { name: "Transaction Value Density", description: "Economic density of transactions", value: "$1,240", change: "+$85", status: "Monitor" },
  { name: "Fee Market Dynamics", description: "Analysis of transaction fee patterns", value: "12.3 gwei", change: "+2.1 gwei", status: "Monitor" },
  { name: "Mempool Growth Rate", description: "Rate of pending transaction accumulation", value: "+3.2%/hr", change: "-0.5%", status: "Optimal" },
  { name: "Block Space Utilization", description: "Percentage of available block space used", value: "78%", change: "+5%", status: "Monitor" },
  { name: "Cross-Chain Volume", description: "Value transferred between different blockchains", value: "$45M", change: "+$8.5M", status: "Optimal" },
  { name: "Bridge/Wrapped Assets Volume", description: "Volume of assets wrapped or bridged", value: "$28M", change: "+$4.2M", status: "Monitor" },
  { name: "Layer 2 Transaction Share", description: "Percentage of transactions on L2 solutions", value: "35%", change: "+4%", status: "Optimal" },
  { name: "Gas Price Volatility", description: "Fluctuation in gas prices", value: "18.5%", change: "-2.3%", status: "Optimal" }
];

const predictiveMetrics = [
  { name: "On-chain Value Signals", description: "Predictive indicators from on-chain data", value: "62/100", change: "+5", status: "Optimal" },
  { name: "Short-term Holder ROI", description: "Return on investment for recent buyers", value: "8.5%", change: "+2.8%", status: "Optimal" },
  { name: "Long-term Holder ROI", description: "Return on investment for long-term holders", value: "128%", change: "+14%", status: "Optimal" },
  { name: "Exchange Reserve Change", description: "Net change in exchange reserves", value: "-3.2%", change: "-0.8%", status: "Optimal" },
  { name: "Futures Funding Rate", description: "Rate paid for perpetual futures positions", value: "0.025%", change: "+0.008%", status: "Monitor" },
  { name: "Options Put/Call Ratio", description: "Relationship between put and call options", value: "0.78", change: "-0.05", status: "Neutral" },
  { name: "Open Interest Growth", description: "Growth in outstanding derivative contracts", value: "+12.5%", change: "+3.8%", status: "Monitor" },
  { name: "Liquidation Levels", description: "Price levels where liquidations may occur", value: "$38,250", change: "-$750", status: "Warning" },
  { name: "Leverage Ratio", description: "Extent of leveraged positions in the market", value: "2.4x", change: "+0.2x", status: "Warning" },
  { name: "Correlation with Traditional Assets", description: "Statistical correlation with stocks, gold, etc.", value: "0.35", change: "-0.08", status: "Neutral" }
];

interface BlockchainMetricsProps {
  userType: 'retail' | 'institutional';
}

const BlockchainMetrics: React.FC<BlockchainMetricsProps> = ({ userType }) => {
  const [activeTab, setActiveTab] = useState("market");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMetric, setSelectedMetric] = useState<any>(null);

  // Get current metrics based on active tab
  const getCurrentMetrics = () => {
    switch (activeTab) {
      case "market": return marketMetrics;
      case "activity": return activityMetrics;
      case "valuation": return valuationMetrics;
      case "network": return networkMetrics;
      case "predictive": return predictiveMetrics;
      default: return marketMetrics;
    }
  };

  // Filter metrics by search query
  const filteredMetrics = getCurrentMetrics().filter(metric => 
    metric.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    metric.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle metric click
  const handleMetricClick = (metric: any) => {
    setSelectedMetric(metric);
  };

  // Handle close chart
  const handleCloseChart = () => {
    setSelectedMetric(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Blockchain Analytics Hub</CardTitle>
          <CardDescription>
            Advanced blockchain metrics and analytics derived from a comprehensive set of on-chain indicators and market data.
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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="mb-4 bg-white border">
              <TabsTrigger value="market">Market & Liquidity</TabsTrigger>
              <TabsTrigger value="activity">Activity & Sentiment</TabsTrigger>
              <TabsTrigger value="valuation">Valuation & Economics</TabsTrigger>
              <TabsTrigger value="network">Network & Flow</TabsTrigger>
              <TabsTrigger value="predictive">Predictive & Risk</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {selectedMetric ? (
        <MetricDetailChart metric={selectedMetric} onClose={handleCloseChart} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{activeTab === "market" ? "Market & Liquidity" : 
                      activeTab === "activity" ? "Activity & Sentiment" : 
                      activeTab === "valuation" ? "Valuation & Economics" :
                      activeTab === "network" ? "Network & Flow" : "Predictive & Risk"} Metrics</CardTitle>
            <CardDescription>
              Comprehensive blockchain metrics providing insights into {activeTab} dynamics
              <span className="block mt-1 text-sm text-blue-600">Click on any metric to view detailed chart</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Current Value</TableHead>
                  <TableHead>Change (24h)</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMetrics.map((metric, index) => (
                  <TableRow 
                    key={index} 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleMetricClick(metric)}
                  >
                    <TableCell className="font-medium">{metric.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{metric.description}</TableCell>
                    <TableCell>{metric.value}</TableCell>
                    <TableCell className={metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
                      {metric.change}
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        metric.status === "Optimal" 
                          ? "bg-green-100 text-green-800" 
                          : metric.status === "Monitor" 
                            ? "bg-amber-100 text-amber-800" 
                            : metric.status === "Neutral" 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-red-100 text-red-800"
                      }`}>
                        {metric.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BlockchainMetrics;
