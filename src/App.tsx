import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import CommunityPage from "./pages/CommunityPage";
import AdoptionPage from "./pages/AdoptionPage";
import EventsPage from "./pages/EventsPage";
import ServicesPage from "./pages/ServicesPage";
import SharePage from "./pages/SharePage";
import ProfilePage from "./pages/ProfilePage";
import GetStartedPage from "./pages/GetStartedPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/share" element={<SharePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
