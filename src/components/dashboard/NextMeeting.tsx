
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const NextMeeting: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Next Meeting</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="font-medium text-lg mb-1">Quarterly Portfolio Review</div>
            <div className="text-muted-foreground mb-3">
              Tuesday, June 15, 2025 • 10:00 AM EST
            </div>
            <div className="text-sm">
              <p>Topics to discuss:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Portfolio performance review</li>
                <li>Rebalancing strategy</li>
                <li>Tax planning opportunities</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="text-ksc-gold hover:text-ksc-navy transition-colors text-sm flex items-center">
              <span className="mr-1">Reschedule</span>
              <CreditCard className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NextMeeting;
