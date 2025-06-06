
import { Users, FileText, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Tổng quan", icon: BarChart3 },
    { id: "articles", label: "Quản lý bài viết", icon: FileText },
    { id: "customers", label: "Quản lý khách hàng", icon: Users },
    { id: "settings", label: "Cài đặt", icon: Settings },
  ];

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg border shadow-sm">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={`w-full justify-start ${
                activeTab === item.id
                  ? "bg-ksc-navy text-white hover:bg-ksc-navy/90"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;
