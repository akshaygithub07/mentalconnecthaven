import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you have shadcn/ui
import { getAuth, signOut } from "firebase/auth"; // Import Firebase auth
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logged out successfully.");
        navigate("/"); // Redirect to home or login page
      })
      .catch((error) => {
        // An error happened.
        console.error("Error logging out:", error);
        toast.error("Failed to log out. Please try again.");
      });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-lg bg-white/80 shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-semibold text-mind-700 flex items-center"
        >
          <span
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            MindConnect
          </span>
        </Link>

        {/* Logout Button */}
        {auth.currentUser && ( // Only show if logged in
          <Button
            variant="outline"
            onClick={handleLogout}
            className="ml-auto md:ml-0 opacity-0 animate-fade-in" // Adjusted margin
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Log Out
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
