import { DailyTasks } from "@/components/DailyTasks";
import { MoodTracker } from "@/components/MoodTracker";
import { Recommendations } from "@/components/Recommendations";
import { DailyAffirmations } from "@/components/DailyAffirmations";
import { SelfAssessment } from "@/components/SelfAssessment";
import { MoodVisualizer } from "@/components/MoodVisualizer";
import React, { useState } from "react";

const Home = () => {
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [moodHistory, setMoodHistory] = useState<
    { date: string; mood: string }[]
  >([]);

  // Handle mood submission
  const handleMoodSubmit = (mood: string) => {
    setCurrentMood(mood);

    // Update mood history
    const today = new Date().toISOString().split("T")[0];
    setMoodHistory((prev) => [
      ...prev.filter((entry) => entry.date !== today),
      { date: today, mood },
    ]);
  };

  // Get task history for recommendations
  const taskHistory = tasks.map((task) => task.text);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
        {/* Left Column */}
        <div className="space-y-6">
          <DailyAffirmations />
          <MoodTracker onSubmit={handleMoodSubmit} />

          <SelfAssessment />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Recommendations
            currentMood={currentMood}
            taskHistory={taskHistory}
          />
          <DailyTasks tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
      <MoodVisualizer moodHistory={moodHistory} />
    </div>
  );
};

export default Home;
