
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, Eye } from "lucide-react";

const AdminOverview = () => {
  const stats = [
    {
      title: "Total Articles",
      value: "24",
      change: "+3 this month",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Total Customers",
      value: "156",
      change: "+12 this month",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Page Views",
      value: "8,432",
      change: "+18% from last month",
      icon: Eye,
      color: "text-purple-600"
    },
    {
      title: "Growth Rate",
      value: "12.5%",
      change: "Compared to last quarter",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-2">
          System Overview
        </h2>
        <p className="text-gray-600">
          Overall statistics about system activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-ksc-navy">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif text-ksc-navy">
              Recent Articles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Q4 2024 Market Analysis",
                "Sustainable Investment Trends",
                "Portfolio Diversification Strategy"
              ].map((article, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="text-sm text-gray-700">{article}</span>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif text-ksc-navy">
              New Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "John Smith", type: "Individual" },
                { name: "ABC Corporation", type: "Institutional" },
                { name: "Sarah Johnson", type: "Individual" }
              ].map((customer, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <span className="text-sm font-medium text-gray-700">{customer.name}</span>
                    <span className="block text-xs text-gray-500">{customer.type}</span>
                  </div>
                  <span className="text-xs text-gray-500">Today</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
