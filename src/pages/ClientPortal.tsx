
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { CreditCard, ArrowUpRight, ArrowDownRight, DollarSign, Wallet, ChartPie } from "lucide-react";

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

const allocationsData = [
  { name: "Stocks", value: 45 },
  { name: "Bonds", value: 30 },
  { name: "Real Estate", value: 15 },
  { name: "Cash", value: 10 },
];

const transactionsData = [
  { date: "2025-05-15", type: "Deposit", amount: "$10,000", status: "Completed" },
  { date: "2025-05-10", type: "Withdrawal", amount: "$2,500", status: "Completed" },
  { date: "2025-05-01", type: "Dividend", amount: "$750", status: "Completed" },
  { date: "2025-04-20", type: "Fee", amount: "$100", status: "Completed" },
  { date: "2025-04-15", type: "Deposit", amount: "$5,000", status: "Completed" },
];

const ClientPortal = () => {
  const [progress, setProgress] = useState(78);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-serif text-ksc-navy mb-2">Client Portal</h1>
            <p className="text-ksc-darkgray">Welcome back, John Smith. Here's your portfolio overview.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Total Balance</CardTitle>
                <DollarSign className="h-5 w-5 text-ksc-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$247,829.00</div>
                <div className="flex items-center pt-1 text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+4.5%</span>
                  <span className="text-muted-foreground ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">YTD Returns</CardTitle>
                <ChartPie className="h-5 w-5 text-ksc-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12.8%</div>
                <div className="flex items-center pt-1 text-sm">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">+2.1%</span>
                  <span className="text-muted-foreground ml-2">above benchmark</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Target Progress</CardTitle>
                <Wallet className="h-5 w-5 text-ksc-gold" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Retirement Goal</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="mt-2 text-sm text-muted-foreground">
                  $247,829 of $320,000 target
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="performance" className="mb-8">
            <TabsList className="mb-4 bg-white border">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="allocations">Asset Allocation</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="performance" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Performance</CardTitle>
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
                          <CartesianGrid strokeDasharray="3 3" />
                          <Tooltip content={<CustomTooltip />} />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#D4AF37"
                            fillOpacity={1}
                            fill="url(#colorValue)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="allocations" className="m-0">
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
            </TabsContent>
            
            <TabsContent value="transactions" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactionsData.map((transaction, index) => (
                        <TableRow key={index}>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                              {transaction.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            <Card>
              <CardHeader>
                <CardTitle>Next Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="font-medium text-lg mb-1">Quarterly Portfolio Review</div>
                    <div className="text-muted-foreground mb-3">
                      Tuesday, June 15, 2025 • 10:00 AM EST
                    </div>
                    <div className="text-sm">
                      <p>Topics to discuss:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Portfolio performance review</li>
                        <li>Rebalancing strategy</li>
                        <li>Tax planning opportunities</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-ksc-gold hover:text-ksc-navy transition-colors text-sm flex items-center">
                      <span className="mr-1">Reschedule</span>
                      <CreditCard className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

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

export default ClientPortal;
