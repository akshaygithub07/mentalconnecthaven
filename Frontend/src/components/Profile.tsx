import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setProfile({
          username: user.displayName || "N/A",
          email: user.email || "N/A",
        });
      } else {
        // Redirect to sign-in if no user is logged in
        navigate("/"); // Replace with your sign-in route
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out");
      navigate("/"); // Redirect to sign-in page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute -bottom-0 -left-40 w-96 h-96 bg-wellness-100 rounded-full opacity-70 blur-3xl" />
      <div className="absolute -top-0 -right-40 w-96 h-96 bg-wellness-100 rounded-full opacity-70 blur-3xl" />
      {/* Profile Information */}
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg bg-white shadow-lg">
        <h1
          className="text-4xl text-mind-600 md:text-5xl lg:text-6xl text-center font-bold text-calm-900 leading-tight opacity-0 animate-slide-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Profile
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Username
            </label>
            <p className="mt-1 text-gray-900">{profile.username}</p>
          </div>

          <div>
            <label className="block text- font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 text-gray-900">{profile.email}</p>
          </div>
        </div>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2 px-4 rounded-md transition-colors duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
