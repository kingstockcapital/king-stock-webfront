
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// All publications data with more articles and tags
const allPublications = [
  {
    id: 1,
    title: "2025 Market Outlook: Navigating Economic Transitions",
    summary: "A comprehensive analysis of market trends, economic indicators, and investment opportunities for the coming year.",
    date: "May 10, 2025",
    author: "Sarah Johnson, Chief Investment Officer",
    category: "Market Analysis",
    tags: ["Economy", "Investment", "Forecast"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 2,
    title: "The Rise of Sustainable Investing: Impact and Returns",
    summary: "Exploring the growth of ESG investments and their performance compared to traditional investment approaches.",
    date: "April 28, 2025",
    author: "Michael Chen, Senior Investment Analyst",
    category: "Sustainable Finance",
    tags: ["ESG", "Sustainability", "Investment"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 3,
    title: "Tech Sector Analysis: Innovations Driving Future Growth",
    summary: "An in-depth look at emerging technologies and their potential impact on investment portfolios.",
    date: "April 15, 2025",
    author: "David Williams, Technology Sector Specialist",
    category: "Sector Analysis",
    tags: ["Technology", "Innovation", "Growth"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 4,
    title: "Quarterly Economic Review: Q1 2025",
    summary: "A detailed analysis of global economic performance and projections for the coming quarters.",
    date: "April 5, 2025",
    author: "Jennifer Smith, Economic Analyst",
    category: "Economic Analysis",
    tags: ["Economy", "Quarterly", "Global"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 5,
    title: "Infrastructure Investments: Opportunities in Developing Markets",
    summary: "Examining investment prospects in infrastructure projects across emerging economies.",
    date: "March 22, 2025",
    author: "Robert Lee, Global Markets Strategist",
    category: "Global Markets",
    tags: ["Infrastructure", "Emerging Markets", "Investment"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 6,
    title: "Retirement Planning in an Inflationary Environment",
    summary: "Strategies for protecting retirement savings during periods of elevated inflation.",
    date: "March 15, 2025",
    author: "Lisa Thompson, Retirement Specialist",
    category: "Retirement Strategies",
    tags: ["Retirement", "Inflation", "Planning"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 7,
    title: "Healthcare Sector: Post-Pandemic Investment Landscape",
    summary: "Analysis of healthcare industry trends and investment opportunities following global health crises.",
    date: "March 3, 2025",
    author: "Emily Johnson, Healthcare Sector Analyst",
    category: "Sector Analysis",
    tags: ["Healthcare", "Investment", "Trends"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 8,
    title: "Fixed Income Strategies for the Current Rate Environment",
    summary: "Navigating the bond market and optimizing fixed income portfolios in changing interest rate conditions.",
    date: "February 20, 2025",
    author: "Daniel Brown, Fixed Income Specialist",
    category: "Fixed Income",
    tags: ["Bonds", "Interest Rates", "Strategy"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 9,
    title: "Political Landscape and Market Implications for 2025",
    summary: "Analyzing how changing political environments might affect investment markets globally.",
    date: "February 15, 2025",
    author: "Thomas Wright, Political Risk Analyst",
    category: "Political Analysis",
    tags: ["Politics", "Global Markets", "Risk"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 10,
    title: "Political Changes in Southeast Asia: Investment Opportunities",
    summary: "Examining how political shifts in Southeast Asian countries are creating new investment landscapes.",
    date: "February 8, 2025",
    author: "Alice Wong, Asia Pacific Strategist",
    category: "Regional Analysis",
    tags: ["Politics", "Southeast Asia", "Emerging Markets"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  },
  {
    id: 11,
    title: "Digital Currency Developments and Regulatory Impacts",
    summary: "Understanding the evolving landscape of digital currencies and potential effects on traditional markets.",
    date: "January 30, 2025",
    author: "Mark Johnson, Financial Technology Specialist",
    category: "FinTech",
    tags: ["Digital Currency", "Regulation", "Technology"],
    image: "/lovable-uploads/e1a74e54-9d54-49d0-958e-9e9319d3a66c.png"
  },
  {
    id: 12,
    title: "Climate Change Policies and Market Effects",
    summary: "Analyzing how new environmental policies are reshaping investment landscapes across sectors.",
    date: "January 18, 2025",
    author: "Sophia Martinez, ESG Research Lead",
    category: "Environmental Analysis",
    tags: ["Climate", "Policy", "ESG"],
    image: "/lovable-uploads/6bc959bc-62be-47e2-ae92-718ccf8ccc96.png"
  }
];

// All available tags extracted from publications
const allTags = Array.from(
  new Set(
    allPublications.flatMap(pub => pub.tags)
  )
).sort();

const AllPublications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extract all unique categories
  const categories = Array.from(
    new Set(allPublications.map(pub => pub.category))
  ).sort();

  // Filter publications based on search term, tags, and category
  const filteredPublications = allPublications.filter(publication => {
    const matchesSearch = searchTerm === "" || 
      publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publication.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => publication.tags.includes(tag));
    
    const matchesCategory = !selectedCategory || 
      publication.category === selectedCategory;
    
    return matchesSearch && matchesTags && matchesCategory;
  });

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-ksc-lightgray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-ksc-gold font-medium mb-3">Knowledge Library</h6>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ksc-navy mb-6">
                All Publications
              </h1>
              <p className="text-ksc-darkgray text-lg">
                Browse our complete collection of research articles, market analyses, and investment insights.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col space-y-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search publications..." 
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-ksc-gold"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Filter by Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedTags.includes(tag)
                          ? "bg-ksc-navy text-white"
                          : "hover:bg-ksc-navy/10"
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy hover:text-white">
                        {selectedCategory || "All Categories"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                        All Categories
                      </DropdownMenuItem>
                      {categories.map((category) => (
                        <DropdownMenuItem 
                          key={category} 
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                {(selectedTags.length > 0 || selectedCategory || searchTerm) && (
                  <Button 
                    variant="ghost" 
                    className="text-ksc-navy hover:text-ksc-gold"
                    onClick={() => {
                      setSelectedTags([]);
                      setSelectedCategory(null);
                      setSearchTerm("");
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6">
              <p className="text-ksc-darkgray">
                Showing <span className="font-medium">{filteredPublications.length}</span> of {allPublications.length} publications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPublications.map((publication) => (
                <Card key={publication.id} className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={publication.image} 
                      alt={publication.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{publication.date}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-ksc-gold transition-colors">
                      <Link to={`/research/${publication.id}`}>{publication.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-ksc-gold">
                      {publication.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ksc-darkgray line-clamp-3">{publication.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {publication.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-gray-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between items-center w-full">
                      <p className="text-sm text-gray-500">{publication.author.split(',')[0]}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-ksc-navy text-ksc-navy hover:bg-ksc-navy hover:text-white"
                        asChild
                      >
                        <Link to={`/research/${publication.id}`}>Read Article</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filteredPublications.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-ksc-navy mb-2">No publications found</h3>
                <p className="text-ksc-darkgray">Try adjusting your search or filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default AllPublications;
