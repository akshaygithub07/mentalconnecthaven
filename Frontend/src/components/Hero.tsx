import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-mind-100 rounded-full opacity-70 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-wellness-100 rounded-full opacity-70 blur-3xl" />

      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`space-y-3 ${
                isLoaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700 animate-pulse-slow">
                Your Mental Health Journey Starts Here
              </span>
              <h1
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-calm-900 leading-tight opacity-0 animate-slide-up"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                Your Wellness,
                <span className="text-mind-600"> Simplified:</span>AI Insights,
                Therapist Support, and Daily Care.
              </h1>
              <p
                className="text-lg md:text-xl text-calm-600 max-w-xl opacity-0 animate-slide-up"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Track moods, chat anonymously, and connect with therapists – all
                in one place.
              </p>
            </div>

            <div
              className="flex gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Link
                to="/register"
                className="btn-primary text-center px-8 py-3.5 text-lg font-semibold"
              >
                Get Started
              </Link>
            </div>

            <div
              className="flex items-center gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-calm-200 border-2 border-white flex items-center justify-center text-xs font-medium text-calm-700"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-calm-600">
                  Trusted by{" "}
                  <span className="font-semibold text-calm-900">5,000+</span>{" "}
                  patients
                </p>
              </div>
            </div>
          </div>

          {/* Right SVG Illustration */}
          <div
            className="relative opacity-0 animate-slide-in-right"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <img
              src="/images/mental-health-illustration.jpg"
              alt="Online therapy illustration"
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
