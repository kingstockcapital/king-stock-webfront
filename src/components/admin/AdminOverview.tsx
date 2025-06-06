
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, Eye } from "lucide-react";

const AdminOverview = () => {
  const stats = [
    {
      title: "Tổng số bài viết",
      value: "24",
      change: "+3 tháng này",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Tổng số khách hàng",
      value: "156",
      change: "+12 tháng này",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Lượt xem trang",
      value: "8,432",
      change: "+18% so với tháng trước",
      icon: Eye,
      color: "text-purple-600"
    },
    {
      title: "Tăng trưởng",
      value: "12.5%",
      change: "So với quý trước",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-2">
          Tổng quan hệ thống
        </h2>
        <p className="text-gray-600">
          Thống kê tổng quan về hoạt động của hệ thống
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
              Bài viết gần đây
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Phân tích thị trường Q4 2024",
                "Xu hướng đầu tư bền vững",
                "Chiến lược đa dạng hóa danh mục"
              ].map((article, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="text-sm text-gray-700">{article}</span>
                  <span className="text-xs text-gray-500">2 ngày trước</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-serif text-ksc-navy">
              Khách hàng mới
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Nguyễn Văn A", type: "Individual" },
                { name: "Công ty ABC", type: "Institutional" },
                { name: "Trần Thị B", type: "Individual" }
              ].map((customer, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <span className="text-sm font-medium text-gray-700">{customer.name}</span>
                    <span className="block text-xs text-gray-500">{customer.type}</span>
                  </div>
                  <span className="text-xs text-gray-500">Hôm nay</span>
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
