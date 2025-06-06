
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LogOut, Users, FileText, BarChart3, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ArticleManagement from "@/components/admin/ArticleManagement";
import CustomerManagement from "@/components/admin/CustomerManagement";
import AdminOverview from "@/components/admin/AdminOverview";

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  useEffect(() => {
    // Check admin authentication
    const adminAuth = localStorage.getItem("adminAuth");
    if (!adminAuth) {
      toast.error("Please login as admin");
      navigate("/admin-login");
      return;
    }

    try {
      const userData = JSON.parse(adminAuth);
      setUser(userData);
    } catch (e) {
      localStorage.removeItem("adminAuth");
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    toast.success("Logged out successfully");
    navigate("/admin-login");
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-ksc-gold border-t-transparent mx-auto mb-4"></div>
            <p>Loading dashboard...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <AdminOverview />;
      case "articles":
        return <ArticleManagement />;
      case "customers":
        return <CustomerManagement />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          {/* Admin Header */}
          <div className="bg-white p-6 rounded-lg border shadow-sm mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-serif font-bold text-ksc-navy mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">
                  Welcome, <span className="font-medium">{user.username}</span>
                </p>
              </div>
              <Button 
                onClick={handleLogout}
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Main Content */}
            <div className="flex-1 bg-white p-6 rounded-lg border shadow-sm">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboard;
