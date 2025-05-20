
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, BarChart, Bar } from "recharts";
import { ChartPie, TrendingUp, ShieldAlert, DollarSign } from "lucide-react";

interface AdvancedMetricsProps {
  userType: 'retail' | 'institutional';
}

// Sample data for advanced metrics
const riskMetricsData = [
  { name: "Market Risk", value: 68 },
  { name: "Credit Risk", value: 42 },
  { name: "Liquidity Risk", value: 35 },
  { name: "Operational Risk", value: 27 },
];

const retailVolatilityData = [
  { month: "Jan", market: 12, portfolio: 9 },
  { month: "Feb", market: 15, portfolio: 10 },
  { month: "Mar", market: 18, portfolio: 12 },
  { month: "Apr", market: 14, portfolio: 11 },
  { month: "May", market: 12, portfolio: 9 },
  { month: "Jun", market: 19, portfolio: 13 },
];

const institutionalAnalyticsData = [
  { category: "Alpha Generation", value: 2.8 },
  { category: "Beta Exposure", value: 0.85 },
  { category: "Sharpe Ratio", value: 1.7 },
  { category: "Information Ratio", value: 0.95 },
  { category: "Tracking Error", value: 3.2 },
];

const sectorAllocation = [
  { name: "Technology", value: 32 },
  { name: "Healthcare", value: 18 },
  { name: "Financials", value: 15 },
  { name: "Consumer", value: 12 },
  { name: "Energy", value: 8 },
  { name: "Others", value: 15 },
];

const RiskMetricsTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Risk Category</TableHead>
        <TableHead>Rating</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {riskMetricsData.map((item) => (
        <TableRow key={item.name}>
          <TableCell className="font-medium">{item.name}</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Progress value={item.value} className="h-2 w-24" />
              <span className="text-xs">{item.value}%</span>
            </div>
          </TableCell>
          <TableCell>
            <span 
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                item.value > 50 ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"
              }`}
            >
              {item.value > 50 ? "Monitor" : "Normal"}
            </span>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

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

const AdvancedMetrics: React.FC<AdvancedMetricsProps> = ({ userType }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {/* Risk Metrics (for both user types) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-amber-500" />
            Risk Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RiskMetricsTable />
        </CardContent>
      </Card>
      
      {/* Sector Allocation (for both user types) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChartPie className="h-5 w-5 text-blue-500" />
            Sector Allocation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ChartContainer config={{}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sectorAllocation}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* User-specific metrics */}
      {userType === 'retail' ? (
        <>
          {/* Volatility Comparison for retail */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                Portfolio vs Market Volatility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ChartContainer config={{}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={retailVolatilityData}>
                      <defs>
                        <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="market" stroke="#8884d8" fillOpacity={1} fill="url(#colorMarket)" name="Market" />
                      <Area type="monotone" dataKey="portfolio" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPortfolio)" name="Your Portfolio" />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Your portfolio has shown lower volatility than the market over the past 6 months, indicating effective risk management.
              </div>
            </CardContent>
          </Card>

          {/* Tax Efficiency for retail */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                Tax Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Tax-Loss Harvesting</span>
                    <span className="text-sm text-green-600 font-medium">$2,350 saved</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimated tax savings through strategic tax-loss harvesting
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Tax-Efficient Asset Location</span>
                    <span className="text-sm text-green-600 font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Percentage of assets optimally placed for tax efficiency
                  </p>
                </div>

                <div className="pt-2 border-t">
                  <h4 className="text-sm font-medium mb-2">Tax Optimization Recommendations</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    <li>• Consider increasing 401(k) contributions</li>
                    <li>• Review municipal bond allocation</li>
                    <li>• Schedule year-end tax planning session</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* Advanced Analytics for institutional */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartPie className="h-5 w-5 text-indigo-500" />
                Advanced Portfolio Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Benchmark</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {institutionalAnalyticsData.map((item) => (
                    <TableRow key={item.category}>
                      <TableCell className="font-medium">{item.category}</TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {item.category === "Alpha Generation" && (
                            <>
                              <span className="text-green-600 font-medium">+1.2</span>
                              <span className="text-xs text-muted-foreground ml-2">(Outperforming)</span>
                            </>
                          )}
                          {item.category === "Beta Exposure" && (
                            <>
                              <span className="">1.0</span>
                              <span className="text-xs text-amber-600 ml-2">(Higher exposure)</span>
                            </>
                          )}
                          {item.category === "Sharpe Ratio" && (
                            <>
                              <span className="text-green-600 font-medium">1.3</span>
                              <span className="text-xs text-muted-foreground ml-2">(Outperforming)</span>
                            </>
                          )}
                          {item.category === "Information Ratio" && (
                            <>
                              <span className="text-green-600 font-medium">0.7</span>
                              <span className="text-xs text-muted-foreground ml-2">(Outperforming)</span>
                            </>
                          )}
                          {item.category === "Tracking Error" && (
                            <>
                              <span className="">3.0</span>
                              <span className="text-xs text-amber-600 ml-2">(Slightly higher)</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 text-sm">
                <p className="font-medium">Performance Attribution:</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Security Selection: +1.8% | Sector Allocation: +0.7% | Factor Exposure: +0.3%
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* ESG Metrics for institutional */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-emerald-500" />
                ESG Integration & Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                    <span className="text-lg font-bold">A-</span>
                  </div>
                  <div className="text-sm font-medium">Environmental</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
                    <span className="text-lg font-bold">B+</span>
                  </div>
                  <div className="text-sm font-medium">Social</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-2">
                    <span className="text-lg font-bold">A</span>
                  </div>
                  <div className="text-sm font-medium">Governance</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Carbon Intensity vs Benchmark</span>
                    <span className="text-sm text-green-600 font-medium">-32%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">SDG Alignment</span>
                    <span className="text-sm text-muted-foreground">7 of 17 SDGs</span>
                  </div>
                  <Progress value={41} className="h-2" />
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t">
                <p className="text-sm font-medium">Impact Highlights:</p>
                <ul className="text-xs space-y-1 text-muted-foreground mt-2">
                  <li>• 45% of portfolio aligned with climate transition</li>
                  <li>• 28% invested in companies with science-based targets</li>
                  <li>• 12% contributing to inclusive finance initiatives</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default AdvancedMetrics;
