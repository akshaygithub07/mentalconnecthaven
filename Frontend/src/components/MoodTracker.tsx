import React, { useState } from "react";

interface MoodTrackerProps {
  onSubmit: (mood: string) => void;
}

export function MoodTracker({ onSubmit }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [customMood, setCustomMood] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const moodOptions = [
    { emoji: "😡", label: "Angry" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😊", label: "Happy" },
    { emoji: "😁", label: "Excited" },
  ];

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setSubmitted(false);
  };

  const handleCustomMood = () => {
    if (customMood.trim()) {
      setSelectedMood(customMood);
      setCustomMood("");
      setSubmitted(false);
    }
  };

  const handleSubmit = () => {
    if (selectedMood) {
      onSubmit(selectedMood); // This was missing
      setSubmitted(true);
      console.log("Mood submitted to parent:", selectedMood); // Debugging
    }
  };

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        How is Your Mood?
      </h2>

      {/* Mood Selection Grid */}
      <div className="grid grid-cols-5 gap-3 mb-4">
        {moodOptions.map((mood, index) => (
          <button
            key={index}
            onClick={() => handleMoodSelect(mood.label)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              selectedMood === mood.label
                ? "bg-primary/10 border-primary scale-105"
                : "bg-muted/10 hover:bg-muted/20"
            }`}
          >
            <span className="text-3xl mb-1">{mood.emoji}</span>
            <span className="text-sm text-muted-foreground">{mood.label}</span>
          </button>
        ))}
      </div>

      {/* Custom Mood Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={customMood}
          onChange={(e) => setCustomMood(e.target.value)}
          placeholder="Describe your mood..."
          className="flex-1 px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          onKeyDown={(e) => e.key === "Enter" && handleCustomMood()}
        />
        {/* <button
          onClick={handleCustomMood}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add
        </button> */}

        <button
          onClick={handleSubmit}
          disabled={!selectedMood}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg disabled:bg-muted disabled:text-muted-foreground hover:bg-primary/90 transition-colors"
        >
          Track
        </button>
      </div>

      {/* Submission Section */}
      <div className="flex items-center gap-4">
        {/* <button
          onClick={handleSubmit}
          disabled={!selectedMood}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg disabled:bg-muted disabled:text-muted-foreground hover:bg-primary/90 transition-colors"
        >
          Track My Mood
        </button> */}

        {submitted && selectedMood && (
          <div className="flex items-center gap-2 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <span>Mood recorded: {selectedMood}</span>
          </div>
        )}
      </div>
    </section>
  );
}
