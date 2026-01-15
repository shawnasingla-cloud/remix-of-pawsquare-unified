import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { useNavigate } from "react-router-dom";

const GetStartedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <GetStarted onComplete={() => navigate("/")} />
      </main>

      <Footer />
    </div>
  );
};

export default GetStartedPage;
