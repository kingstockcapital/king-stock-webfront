
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ResearchInsights from "./pages/ResearchInsights";
import AllPublications from "./pages/AllPublications";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import ClientPortal from "./pages/ClientPortal";
import ClientPortalLogin from "./pages/ClientPortalLogin";
import NotFound from "./pages/NotFound";
import { useState } from "react";

// Move the App component definition to avoid QueryClient instantiation during rendering
const App = () => {
  // Create a new QueryClient instance inside the component, so it's created during render
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/research" element={<ResearchInsights />} />
            <Route path="/publications" element={<AllPublications />} />
            <Route path="/research/:articleId" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-portal-login" element={<ClientPortalLogin />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
