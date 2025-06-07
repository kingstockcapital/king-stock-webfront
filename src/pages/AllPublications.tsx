import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Tag } from "lucide-react";
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
import { getPublishedArticles } from "@/data/articles";

const AllPublications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get published articles from shared data
  const allPublications = getPublishedArticles();

  // Extract all unique tags
  const allTags = Array.from(
    new Set(
      allPublications.flatMap(pub => pub.tags || [])
    )
  ).sort();
  
  // Extract all unique categories
  const categories = Array.from(
    new Set(allPublications.map(pub => pub.category))
  ).sort();

  // Filter publications based on search term, tags, and category
  const filteredPublications = allPublications.filter(publication => {
    const matchesSearch = searchTerm === "" || 
      publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (publication.summary && publication.summary.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => publication.tags?.includes(tag));
    
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
                      {publication.tags?.map((tag) => (
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
