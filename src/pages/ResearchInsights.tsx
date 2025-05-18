
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample research articles data
const featuredArticles = [
  {
    id: 1,
    title: "2025 Market Outlook: Navigating Economic Transitions",
    summary: "A comprehensive analysis of market trends, economic indicators, and investment opportunities for the coming year.",
    date: "May 10, 2025",
    author: "Sarah Johnson, Chief Investment Officer",
    category: "Market Analysis",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 2,
    title: "The Rise of Sustainable Investing: Impact and Returns",
    summary: "Exploring the growth of ESG investments and their performance compared to traditional investment approaches.",
    date: "April 28, 2025",
    author: "Michael Chen, Senior Investment Analyst",
    category: "Sustainable Finance",
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 3,
    title: "Tech Sector Analysis: Innovations Driving Future Growth",
    summary: "An in-depth look at emerging technologies and their potential impact on investment portfolios.",
    date: "April 15, 2025",
    author: "David Williams, Technology Sector Specialist",
    category: "Sector Analysis",
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  }
];

const recentPublications = [
  {
    id: 4,
    title: "Quarterly Economic Review: Q1 2025",
    date: "April 5, 2025",
    category: "Economic Analysis"
  },
  {
    id: 5,
    title: "Infrastructure Investments: Opportunities in Developing Markets",
    date: "March 22, 2025",
    category: "Global Markets"
  },
  {
    id: 6,
    title: "Retirement Planning in an Inflationary Environment",
    date: "March 15, 2025",
    category: "Retirement Strategies"
  },
  {
    id: 7,
    title: "Healthcare Sector: Post-Pandemic Investment Landscape",
    date: "March 3, 2025",
    category: "Sector Analysis"
  },
  {
    id: 8,
    title: "Fixed Income Strategies for the Current Rate Environment",
    date: "February 20, 2025",
    category: "Fixed Income"
  }
];

const ResearchInsights = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-ksc-gold font-medium mb-3">Knowledge Center</h6>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-6">
                Research & Insights
              </h1>
              <p className="text-ksc-darkgray text-lg">
                Expert analysis, market perspectives, and investment insights from our team of financial specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-ksc-gold"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy hover:text-white">
                  All Topics
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  Market Analysis
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  Investment Strategy
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  Economic Outlook
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-8">
              Featured Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-ksc-gold transition-colors">
                      <Link to={`/research/${article.id}`}>{article.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-ksc-gold">
                      {article.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ksc-darkgray">{article.summary}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4 border-t">
                    <p className="text-sm text-gray-500">{article.author}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Publications */}
        <section className="py-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl font-semibold text-ksc-navy mb-8">
              Recent Publications
            </h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[400px]">Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPublications.map((publication) => (
                    <TableRow key={publication.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-ksc-gold mt-0.5" />
                          <span>{publication.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>{publication.category}</TableCell>
                      <TableCell>{publication.date}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy hover:text-white"
                          asChild
                        >
                          <Link to={`/research/${publication.id}`}>Read More</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-ksc-navy hover:bg-ksc-navy/90 text-white border-none">
                View All Publications
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-12 bg-gradient-to-br from-ksc-navy to-ksc-navy/90 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-semibold mb-4">
                Stay Informed
              </h2>
              <p className="mb-8">
                Subscribe to our newsletter to receive the latest market insights and research directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-md text-ksc-darkgray focus:outline-none focus:ring-2 focus:ring-ksc-gold"
                />
                <Button className="bg-ksc-gold hover:bg-ksc-gold/90 text-ksc-navy font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchInsights;
