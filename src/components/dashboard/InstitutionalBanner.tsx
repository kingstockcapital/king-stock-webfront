
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

interface InstitutionalBannerProps {
  onAccessTools: () => void;
}

const InstitutionalBanner: React.FC<InstitutionalBannerProps> = ({ onAccessTools }) => {
  return (
    <Card className="mb-8 border-l-4 border-l-blue-600 shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl text-blue-700">
          <Users className="h-5 w-5 mr-2" /> 
          Institutional Services
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <p className="text-blue-800 mb-2">
              As an institutional investor, you have access to additional premium services including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
              <li>Custom portfolio analysis and advanced reporting tools</li>
              <li>Direct fund manager access and priority support</li>
              <li>Institutional-grade research and market insights</li>
              <li>Customized investment strategies and solutions</li>
            </ul>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={onAccessTools}
            >
              Access Institutional Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstitutionalBanner;
