import React from "react";

interface RecommendationsProps {
  currentMood?: string | null;
  taskHistory?: string[];
}

export function Recommendations({
  currentMood,
  taskHistory,
}: RecommendationsProps) {
  // Mood-based suggestions
  const moodSuggestions: { [key: string]: string[] } = {
    angry: [
      "Try deep breathing exercises",
      "Listen to calming music",
      "Write in a journal to process emotions",
    ],
    sad: [
      "Reach out to a trusted friend",
      "Watch a comforting movie",
      "Practice self-compassion meditation",
    ],
    neutral: [
      "Try a new hobby or skill",
      "Organize your workspace",
      "Take a mindfulness walk",
    ],
    happy: [
      "Share your positivity with others",
      "Plan a small celebration",
      "Create a gratitude list",
    ],
    excited: [
      "Channel energy into creative projects",
      "Set ambitious goals for the week",
      "Try an adrenaline-pumping activity",
    ],
  };

  const getRecommendations = () => {
    if (!currentMood) return [];

    let recommendations: string[] = [];

    // Mood-based suggestions
    const moodKey = currentMood.toLowerCase();
    recommendations = moodSuggestions[moodKey] || [];

    // Task-based suggestions
    if (taskHistory && taskHistory.length > 0) {
      const wellnessCount = taskHistory.filter(
        (task) =>
          task.toLowerCase().includes("meditation") ||
          task.toLowerCase().includes("yoga")
      ).length;

      if (wellnessCount > 2) {
        recommendations.push("Try a new yoga flow", "Schedule a massage");
      }
    }

    // Default fallback if no mood suggestions exist
    if (recommendations.length === 0) {
      recommendations = [
        "Start with a 5-minute mindfulness exercise",
        "Review your weekly goals",
        "Connect with a friend or colleague",
      ];
    }

    return recommendations.slice(0, 3);
  };

  const recommendations = getRecommendations();

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Personalized Recommendations
      </h2>

      <div className="space-y-3">
        {recommendations.length > 0 ? (
          recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="flex items-start p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
            >
              <span className="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 mt-1">
                {index + 1}
              </span>
              <p className="text-foreground">{recommendation}</p>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground text-center py-4">
            No recommendations available for the current mood
          </p>
        )}
      </div>
    </section>
  );
}
