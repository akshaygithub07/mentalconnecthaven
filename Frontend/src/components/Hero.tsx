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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-calm-900 leading-tight opacity-0 animate-slide-up"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                Connect With Licensed Therapists
                <span className="text-mind-600"> Online</span>
              </h1>
              <p
                className="text-lg md:text-xl text-calm-600 max-w-xl opacity-0 animate-slide-up"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Get professional support from the comfort of your home. Access
                therapy sessions and medication delivery with ease.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Link to="/therapists" className="btn-primary text-center">
                Find a Therapist
              </Link>
              <Link to="/medications" className="btn-secondary text-center">
                Order Medication
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

          <div
            className="relative opacity-0 animate-slide-in-right"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-mind-200/50 to-wellness-200/50 rounded-3xl transform rotate-3 scale-105 animate-float"></div>
              <div className="glass rounded-3xl p-6 md:p-10">
                <div className="aspect-video bg-calm-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-mind-300/20 to-wellness-300/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-mind-100 flex items-center justify-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-mind-500"></div>
                      </div>
                      <h3 className="text-xl font-medium text-calm-800">
                        Video Therapy Session
                      </h3>
                      <p className="text-calm-600 mt-2">
                        Connect with your therapist from anywhere
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-calm-100">
                    <div className="w-10 h-10 rounded-full bg-mind-100 flex items-center justify-center mb-3">
                      <span className="text-mind-600 font-medium">1</span>
                    </div>
                    <h4 className="font-medium text-calm-800">Book Session</h4>
                    <p className="text-sm text-calm-600 mt-1">
                      Choose your preferred time
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-calm-100">
                    <div className="w-10 h-10 rounded-full bg-mind-100 flex items-center justify-center mb-3">
                      <span className="text-mind-600 font-medium">2</span>
                    </div>
                    <h4 className="font-medium text-calm-800">
                      Attend Session
                    </h4>
                    <p className="text-sm text-calm-600 mt-1">
                      Join securely online
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-calm-100">
                    <div className="w-10 h-10 rounded-full bg-mind-100 flex items-center justify-center mb-3">
                      <span className="text-mind-600 font-medium">3</span>
                    </div>
                    <h4 className="font-medium text-calm-800">Get Support</h4>
                    <p className="text-sm text-calm-600 mt-1">
                      Professional guidance
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-calm-100">
                    <div className="w-10 h-10 rounded-full bg-mind-100 flex items-center justify-center mb-3">
                      <span className="text-mind-600 font-medium">4</span>
                    </div>
                    <h4 className="font-medium text-calm-800">Follow-up</h4>
                    <p className="text-sm text-calm-600 mt-1">
                      Continuous care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
