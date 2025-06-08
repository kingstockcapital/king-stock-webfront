
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Shield, Lock, Eye, EyeOff, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple admin authentication (in production, this should be secured)
    if (credentials.username === "admin" && credentials.password === "admin123") {
      localStorage.setItem("adminAuth", JSON.stringify({
        username: credentials.username,
        loginTime: new Date().toISOString(),
        role: "admin"
      }));
      toast.success("Admin login successful!");
      navigate("/admin-dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ksc-lightgray via-white to-slate-50">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-center min-h-[calc(100vh-180px)]">
          <div className="w-full max-w-md">
            {/* Header Section */}
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-ksc-navy to-ksc-navy/80 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-ksc-gold" />
              </div>
              <h1 className="text-2xl font-serif font-semibold text-ksc-navy mb-2">
                Administrator Portal
              </h1>
              <p className="text-sm text-ksc-darkgray">
                Secure access to administrative functions
              </p>
            </div>

            {/* Login Card */}
            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ksc-gold/3 to-transparent"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <CardTitle className="text-lg font-serif text-ksc-navy flex items-center justify-center gap-2">
                  <User className="h-5 w-5 text-ksc-gold" />
                  Sign In
                </CardTitle>
                <CardDescription className="text-ksc-darkgray text-sm">
                  Enter your credentials to access the dashboard
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-ksc-navy font-medium text-sm">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      value={credentials.username}
                      onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                      required
                      placeholder="Enter your username"
                      className="h-10 border-2 border-slate-200 focus:border-ksc-gold focus:ring-ksc-gold/20 text-sm rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-ksc-navy font-medium text-sm">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={credentials.password}
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                        required
                        placeholder="Enter your password"
                        className="h-10 pr-10 border-2 border-slate-200 focus:border-ksc-gold focus:ring-ksc-gold/20 text-sm rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ksc-darkgray hover:text-ksc-navy transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-10 bg-gradient-to-r from-ksc-navy to-ksc-navy/90 hover:from-ksc-navy/90 hover:to-ksc-navy/80 text-white font-medium text-sm rounded-lg shadow-md transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Signing in...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Lock className="h-4 w-4 mr-2" />
                        Access Dashboard
                      </div>
                    )}
                  </Button>
                </form>
                
                {/* Demo Credentials */}
                <div className="mt-6 p-4 bg-gradient-to-r from-ksc-gold/8 to-ksc-gold/4 border border-ksc-gold/15 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-ksc-gold rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-ksc-navy mb-1">
                        Demo Credentials
                      </h4>
                      <p className="text-xs text-ksc-darkgray leading-relaxed">
                        <strong className="text-ksc-navy">Username:</strong> admin<br />
                        <strong className="text-ksc-navy">Password:</strong> admin123
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="text-center pt-4 border-t border-slate-100">
                  <p className="text-xs text-ksc-darkgray">
                    🔒 Secure area • All access attempts are logged
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="text-center mt-6">
              <p className="text-sm text-ksc-darkgray">
                Need assistance? Contact your system administrator
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminLogin;
