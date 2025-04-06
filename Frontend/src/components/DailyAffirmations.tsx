import React, { useState, useEffect } from "react";

export function DailyAffirmations() {
  const [currentAffirmation, setCurrentAffirmation] = useState<string>("");
  const [showTip, setShowTip] = useState<boolean>(false);

  // Affirmations and tips data
  const affirmations = [
    "You're capable of amazing things today!",
    "Progress, not perfection, is the goal 🚀",
    "Your potential is limitless 🌟",
    "One step at a time - you've got this!",
    "Today is your opportunity to shine ✨",
  ];

  const tips = [
    "Start your day with 5 minutes of deep breathing",
    "Write down 3 things you're grateful for",
    "Hydrate first thing in the morning 💧",
    "Take a 10-minute walk between tasks",
    "Celebrate small wins throughout the day 🏆",
  ];

  // Get random item from array
  const getRandomItem = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  // Initialize first affirmation
  useEffect(() => {
    setCurrentAffirmation(getRandomItem(affirmations));
  }, []);

  const refreshContent = () => {
    setCurrentAffirmation(getRandomItem(affirmations));
    setShowTip((prev) => !prev); // Alternate between tip and affirmation
  };

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        {showTip ? "Daily Tip" : "Affirmation for You"}
      </h2>

      <div className="flex items-center justify-between">
        <p className="text-foreground text-lg">
          {showTip ? getRandomItem(tips) : currentAffirmation}
        </p>

        <button
          onClick={refreshContent}
          className="p-2 rounded-full hover:bg-muted/20 transition-colors"
          aria-label="Refresh content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>
        </button>
      </div>

      {/* Progress dots */}
      {/* <div className="flex gap-2 mt-4">
        {[0, 1].map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === (showTip ? 1 : 0) ? "bg-primary" : "bg-muted/20"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}
