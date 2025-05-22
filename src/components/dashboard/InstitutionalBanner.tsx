
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";

interface InstitutionalBannerProps {
  onAccessTools: () => void;
}

const InstitutionalBanner: React.FC<InstitutionalBannerProps> = ({ onAccessTools }) => {
  return (
    <Card className="mb-6 border-l-4 border-l-blue-600 shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg md:text-xl text-blue-700">
          <Users className="h-5 w-5 mr-2" /> 
          Institutional Services
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <p className="text-blue-800 text-sm md:text-base mb-2">
              As an institutional investor, you have access to additional premium services including:
            </p>
            <ul className="list-disc pl-4 md:pl-5 space-y-1 text-xs md:text-sm text-blue-700">
              <li>Custom portfolio analysis and advanced reporting tools</li>
              <li>Direct fund manager access and priority support</li>
              <li>Institutional-grade research and market insights</li>
              <li>Customized investment strategies and solutions</li>
            </ul>
          </div>
          <div className="flex items-center justify-start md:justify-end mt-3 md:mt-0">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm w-full md:w-auto"
              onClick={onAccessTools}
            >
              Access Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstitutionalBanner;
