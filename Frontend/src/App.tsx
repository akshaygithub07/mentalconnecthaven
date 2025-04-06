import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Therapists from "./pages/Therapists";
import Medications from "./pages/Medications";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Home from "./pages/homePages/Home";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null); // State to store the user object
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setInitialLoad(false); // Set to false after the initial check
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full border-4 border-mind-100 border-t-mind-600 animate-spin mb-6"></div>
          <h2 className="text-2xl font-semibold text-calm-900 mb-2">
            Loading MindConnect
          </h2>
          <p className="text-calm-600">
            Please wait while we prepare your experience
          </p>
        </div>
      </div>
    );
  }

  if (initialLoad) {
    return null; // Or a loading spinner if you prefer
  }

  if (user) {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/therapists" element={<Therapists />} />
                  <Route path="/medications" element={<Medications />} />
                  
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
