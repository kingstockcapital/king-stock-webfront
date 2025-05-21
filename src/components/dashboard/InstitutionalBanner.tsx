
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InstitutionalBannerProps {
  onAccessTools: () => void;
}

const InstitutionalBanner: React.FC<InstitutionalBannerProps> = ({ onAccessTools }) => {
  return (
    <Card className="mb-8 bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-xl">Institutional Services</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-blue-800">
          As an institutional investor, you have access to additional services including custom portfolio analysis, 
          direct fund manager access, and advanced reporting tools.
        </p>
        <Button 
          className="mt-4 bg-blue-600 hover:bg-blue-700"
          onClick={onAccessTools}
        >
          Access Institutional Tools
        </Button>
      </CardContent>
    </Card>
  );
};

export default InstitutionalBanner;
