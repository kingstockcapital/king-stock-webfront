
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const investmentSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }),
  sector: z.string().min(1, { message: "Sector is required" }),
  timeHorizon: z.string().min(1, { message: "Time horizon is required" }),
  riskTolerance: z.string().min(1, { message: "Risk tolerance is required" }),
  additionalDetails: z.string().optional(),
});

const withdrawalSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }),
  reason: z.string().min(1, { message: "Reason is required" }),
  withdrawalDate: z.string().min(1, { message: "Date is required" }),
  additionalDetails: z.string().optional(),
});

const consultationSchema = z.object({
  topic: z.string().min(1, { message: "Topic is required" }),
  preferredDate: z.string().min(1, { message: "Preferred date is required" }),
  preferredTime: z.string().min(1, { message: "Preferred time is required" }),
  questions: z.string().min(1, { message: "Questions are required" }),
});

interface InvestmentInquiryFormProps {
  userType: 'retail' | 'institutional';
}

export const InvestmentInquiryForm: React.FC<InvestmentInquiryFormProps> = ({ userType }) => {
  const [submitting, setSubmitting] = useState(false);
  
  const investmentForm = useForm<z.infer<typeof investmentSchema>>({
    resolver: zodResolver(investmentSchema),
    defaultValues: {
      amount: "",
      sector: "",
      timeHorizon: "",
      riskTolerance: "",
      additionalDetails: "",
    },
  });

  const withdrawalForm = useForm<z.infer<typeof withdrawalSchema>>({
    resolver: zodResolver(withdrawalSchema),
    defaultValues: {
      amount: "",
      reason: "",
      withdrawalDate: "",
      additionalDetails: "",
    },
  });

  const consultationForm = useForm<z.infer<typeof consultationSchema>>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      topic: "",
      preferredDate: "",
      preferredTime: "",
      questions: "",
    },
  });

  const onSubmitInvestment = (data: z.infer<typeof investmentSchema>) => {
    setSubmitting(true);
    console.log("Investment inquiry submitted:", data);
    
    // Simulate API call delay
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Investment inquiry submitted successfully", {
        description: "Our team will review your request shortly.",
      });
      investmentForm.reset();
    }, 1500);
  };

  const onSubmitWithdrawal = (data: z.infer<typeof withdrawalSchema>) => {
    setSubmitting(true);
    console.log("Withdrawal request submitted:", data);
    
    // Simulate API call delay
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Withdrawal request submitted successfully", {
        description: "Our team will review your request shortly.",
      });
      withdrawalForm.reset();
    }, 1500);
  };

  const onSubmitConsultation = (data: z.infer<typeof consultationSchema>) => {
    setSubmitting(true);
    console.log("Consultation request submitted:", data);
    
    // Simulate API call delay
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Consultation request submitted successfully", {
        description: "Our team will contact you to confirm the appointment.",
      });
      consultationForm.reset();
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Investment Inquiry</CardTitle>
        <CardDescription>
          Submit a request for investment, withdrawal, or consultation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="invest">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="invest">Invest</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            <TabsTrigger value="consult">Consultation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="invest" className="space-y-4">
            <Form {...investmentForm}>
              <form onSubmit={investmentForm.handleSubmit(onSubmitInvestment)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={investmentForm.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Investment Amount</FormLabel>
                        <FormControl>
                          <Input placeholder="$10,000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={investmentForm.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Sector/Asset Class</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select sector" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="financials">Financials</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="energy">Energy</SelectItem>
                            <SelectItem value="bonds">Bonds</SelectItem>
                            <SelectItem value="alternatives">Alternative Investments</SelectItem>
                            {userType === 'institutional' && (
                              <>
                                <SelectItem value="private-equity">Private Equity</SelectItem>
                                <SelectItem value="venture-capital">Venture Capital</SelectItem>
                                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={investmentForm.control}
                    name="timeHorizon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Investment Time Horizon</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time horizon" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="short">Short-term (< 2 years)</SelectItem>
                            <SelectItem value="medium">Medium-term (2-5 years)</SelectItem>
                            <SelectItem value="long">Long-term (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={investmentForm.control}
                    name="riskTolerance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Risk Tolerance</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select risk tolerance" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="conservative">Conservative</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="aggressive">Aggressive</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={investmentForm.control}
                  name="additionalDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details or Questions</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide any additional information that might help us process your investment request."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Investment Request"}
                </Button>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="withdraw" className="space-y-4">
            <Form {...withdrawalForm}>
              <form onSubmit={withdrawalForm.handleSubmit(onSubmitWithdrawal)} className="space-y-4">
                <FormField
                  control={withdrawalForm.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Withdrawal Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="$5,000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={withdrawalForm.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Withdrawal Reason</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select reason" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personal">Personal Expenses</SelectItem>
                          <SelectItem value="purchase">Major Purchase</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="rebalancing">Portfolio Rebalancing</SelectItem>
                          {userType === 'institutional' && (
                            <>
                              <SelectItem value="liability">Liability Management</SelectItem>
                              <SelectItem value="regulatory">Regulatory Requirements</SelectItem>
                            </>
                          )}
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={withdrawalForm.control}
                  name="withdrawalDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requested Withdrawal Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormDescription>
                        Please allow 3-5 business days for processing.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={withdrawalForm.control}
                  name="additionalDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide any additional information about your withdrawal request."
                          className="min-h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Withdrawal Request"}
                </Button>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="consult" className="space-y-4">
            <Form {...consultationForm}>
              <form onSubmit={consultationForm.handleSubmit(onSubmitConsultation)} className="space-y-4">
                <FormField
                  control={consultationForm.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Consultation Topic</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select topic" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="investment-strategy">Investment Strategy</SelectItem>
                          <SelectItem value="retirement-planning">Retirement Planning</SelectItem>
                          <SelectItem value="tax-planning">Tax Planning</SelectItem>
                          <SelectItem value="estate-planning">Estate Planning</SelectItem>
                          <SelectItem value="risk-management">Risk Management</SelectItem>
                          {userType === 'institutional' && (
                            <>
                              <SelectItem value="asset-allocation">Strategic Asset Allocation</SelectItem>
                              <SelectItem value="esg-integration">ESG Integration</SelectItem>
                              <SelectItem value="liability-matching">Liability Matching</SelectItem>
                              <SelectItem value="governance">Investment Governance</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={consultationForm.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={consultationForm.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1PM - 4PM)</SelectItem>
                            <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={consultationForm.control}
                  name="questions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Questions or Topics to Discuss</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please list the specific questions or topics you would like to discuss during the consultation."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? "Submitting..." : "Request Consultation"}
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <p>Your inquiry will be reviewed by our team within 24 hours.</p>
      </CardFooter>
    </Card>
  );
};

export default InvestmentInquiryForm;
