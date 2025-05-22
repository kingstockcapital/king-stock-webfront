
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Import dashboard components
import PortalHeader from "@/components/dashboard/PortalHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import OverviewDashboard from "@/components/dashboard/OverviewDashboard";
import AdvancedMetrics from "@/components/AdvancedMetrics";
import InvestmentInquiryForm from "@/components/InvestmentInquiryForm";
import InstitutionalTools from "@/components/InstitutionalTools";
import BlockchainMetrics from "@/components/metrics/BlockchainMetrics";

const ClientPortal = () => {
  const [progress, setProgress] = useState(78);
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const storedUser = localStorage.getItem("clientPortalUser");
    if (!storedUser) {
      toast.error("Please login to access the client portal");
      navigate("/client-portal-login");
      return;
    }

    // Parse user data
    try {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    } catch (e) {
      // Invalid stored data
      localStorage.removeItem("clientPortalUser");
      navigate("/client-portal-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("clientPortalUser");
    toast.success("Logged out successfully");
    navigate("/client-portal-login");
  };

  // Show loading state while checking auth
  if (!user) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-ksc-gold border-t-transparent mx-auto mb-4"></div>
            <p>Loading your portfolio...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Render dashboard content based on active tab
  const renderDashboardContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewDashboard progress={progress} userType={user.type} onAccessTools={() => setActiveTab("institutional-tools")} />;
      case "advanced":
        return <AdvancedMetrics userType={user.type} />;
      case "blockchain":
        return <BlockchainMetrics userType={user.type} />;
      case "request":
        return <InvestmentInquiryForm userType={user.type} />;
      case "institutional-tools":
        return <InstitutionalTools />;
      default:
        return <OverviewDashboard progress={progress} userType={user.type} onAccessTools={() => setActiveTab("institutional-tools")} />;
    }
  };

  // User is authenticated, show portal content
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <PortalHeader user={user} onLogout={handleLogout} />
          
          <div className="flex gap-6">
            {/* Sidebar navigation */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} userType={user.type} />
            
            {/* Main content area */}
            <div className="flex-1 bg-white p-6 rounded-lg border shadow-sm">
              {renderDashboardContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ClientPortal;
