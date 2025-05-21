
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Import refactored components
import PortalHeader from "@/components/dashboard/PortalHeader";
import OverviewDashboard from "@/components/dashboard/OverviewDashboard";
import AdvancedMetrics from "@/components/AdvancedMetrics";
import InvestmentInquiryForm from "@/components/InvestmentInquiryForm";
import InstitutionalTools from "@/components/InstitutionalTools";
import BlockchainMetrics from "@/components/metrics/BlockchainMetrics";

const ClientPortal = () => {
  const [progress, setProgress] = useState(78);
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [showInstitutionalTools, setShowInstitutionalTools] = useState(false);
  const [showBlockchainMetrics, setShowBlockchainMetrics] = useState(false);
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

  const handleShowBlockchainMetrics = () => {
    setShowBlockchainMetrics(true);
    setShowInstitutionalTools(false);
  };

  // User is authenticated, show portal content
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <PortalHeader user={user} onLogout={handleLogout} />

          {/* Show Blockchain Metrics if active */}
          {showBlockchainMetrics ? (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-ksc-navy">Blockchain Metrics</h2>
                <button 
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                  onClick={() => setShowBlockchainMetrics(false)}
                >
                  Back to Dashboard
                </button>
              </div>
              <BlockchainMetrics userType={user.type} />
            </div>
          ) : 
          /* Show Institutional Tools if active */
          showInstitutionalTools && user.type === 'institutional' ? (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-ksc-navy">Institutional Tools</h2>
                <button 
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                  onClick={() => {
                    setShowInstitutionalTools(false);
                  }}
                >
                  Back to Dashboard
                </button>
              </div>
              <InstitutionalTools />
            </div>
          ) : (
            <>
              {/* Main navigation tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="mb-6 bg-white border">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced Metrics</TabsTrigger>
                  <TabsTrigger value="blockchain">Blockchain Metrics</TabsTrigger>
                  <TabsTrigger value="request">Investment Inquiry</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <OverviewDashboard 
                    progress={progress} 
                    userType={user.type} 
                    onAccessTools={() => setShowInstitutionalTools(true)} 
                  />
                </TabsContent>
                
                {/* Advanced Metrics Tab */}
                <TabsContent value="advanced">
                  <AdvancedMetrics userType={user.type} />
                </TabsContent>

                {/* Blockchain Metrics Tab */}
                <TabsContent value="blockchain">
                  <BlockchainMetrics userType={user.type} />
                </TabsContent>
                
                {/* Investment Inquiry Tab */}
                <TabsContent value="request">
                  <InvestmentInquiryForm userType={user.type} />
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ClientPortal;
