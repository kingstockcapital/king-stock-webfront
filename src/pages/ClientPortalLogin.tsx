
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

// Demo user accounts
const demoAccounts = [
  { email: "retail@example.com", password: "password123", type: "retail", name: "John Smith" },
  { email: "institutional@example.com", password: "password123", type: "institutional", name: "Jane Corporation" }
];

const ClientPortalLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ 
    email: "", 
    password: "", 
    confirmPassword: "",
    investorType: "retail",
    name: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      const user = demoAccounts.find(account => 
        account.email === loginData.email && account.password === loginData.password
      );

      if (user) {
        // Store user info in localStorage
        localStorage.setItem("clientPortalUser", JSON.stringify({
          email: user.email,
          name: user.name,
          type: user.type
        }));
        
        toast.success("Login successful!");
        navigate("/client-portal");
      } else {
        toast.error("Invalid email or password. Try demo accounts listed below.");
      }
      setIsLoading(false);
    }, 800);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate password match
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords don't match");
      setIsLoading(false);
      return;
    }

    // Simulate network request
    setTimeout(() => {
      // In a real app, you would send this data to your backend
      toast.success("Account created successfully! Please login.");
      setSignupData({ 
        email: "", 
        password: "", 
        confirmPassword: "",
        investorType: "retail",
        name: ""
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-gray-100 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-ksc-navy">Client Portal Access</CardTitle>
                <CardDescription>Sign in to access your investment portfolio</CardDescription>
              </CardHeader>

              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Create Account</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="you@example.com"
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Button variant="link" className="text-xs text-ksc-gold p-0 h-auto">
                            Forgot your password?
                          </Button>
                        </div>
                        <Input 
                          id="password" 
                          type="password" 
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full bg-ksc-navy hover:bg-ksc-navy/90"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </CardFooter>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignup}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name">Full Name</Label>
                        <Input 
                          id="signup-name" 
                          placeholder="John Smith"
                          value={signupData.name}
                          onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input 
                          id="signup-email" 
                          type="email" 
                          placeholder="you@example.com"
                          value={signupData.email}
                          onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input 
                          id="signup-password" 
                          type="password"
                          value={signupData.password}
                          onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-confirm">Confirm Password</Label>
                        <Input 
                          id="signup-confirm" 
                          type="password"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Investor Type</Label>
                        <RadioGroup 
                          value={signupData.investorType}
                          onValueChange={(value) => setSignupData({...signupData, investorType: value})}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="retail" id="retail" />
                            <Label htmlFor="retail">Retail Investor</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="institutional" id="institutional" />
                            <Label htmlFor="institutional">Institutional Investor</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full bg-ksc-navy hover:bg-ksc-navy/90"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </CardFooter>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="px-6 pb-6">
                <div className="mt-6 border-t pt-4">
                  <p className="text-sm text-center font-medium mb-2">Demo Accounts:</p>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="p-2 bg-gray-50 rounded">
                      <p><strong>Retail Investor:</strong> retail@example.com</p>
                      <p><strong>Password:</strong> password123</p>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <p><strong>Institutional Investor:</strong> institutional@example.com</p>
                      <p><strong>Password:</strong> password123</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ClientPortalLogin;
