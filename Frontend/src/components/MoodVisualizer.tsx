import React, { useEffect, useState } from "react";

interface MoodEntry {
  date: string;
  mood: string;
}

interface MoodVisualizerProps {
  moodHistory: MoodEntry[];
}

export function MoodVisualizer({ moodHistory }: MoodVisualizerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Calendar generation logic
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay();

    const days = [];

    // Add empty cells for days before first of month
    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }

    // Add actual days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      const moodEntry = moodHistory.find((entry) => entry.date === dateStr);
      days.push({
        date: dateStr,
        dayNumber: day,
        mood: moodEntry?.mood || null,
      });
    }

    return days;
  };

  const moodColorMap: { [key: string]: string } = {
    angry: "bg-red-500",
    sad: "bg-blue-400",
    neutral: "bg-gray-400",
    happy: "bg-yellow-300",
    excited: "bg-green-400",
  };

  return (
    <section className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Mood Calendar -{" "}
        {currentMonth.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>

      {/* Calendar Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() =>
            setCurrentMonth((prev) => {
              const date = new Date(prev);
              date.setMonth(date.getMonth() - 1);
              return date;
            })
          }
          className="p-2 rounded-full hover:bg-muted/20 transition-colors"
          aria-label="Previous month"
        >
          ◀️
        </button>

        <button
          onClick={() => setCurrentMonth(new Date())}
          className="text-sm px-4 py-2 rounded-lg bg-muted/10 hover:bg-muted/20"
          aria-label="Current month"
        >
          Today
        </button>

        <button
          onClick={() =>
            setCurrentMonth((prev) => {
              const date = new Date(prev);
              date.setMonth(date.getMonth() + 1);
              return date;
            })
          }
          className="p-2 rounded-full hover:bg-muted/20 transition-colors"
          aria-label="Next month"
        >
          ▶️
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm text-muted-foreground font-medium"
          >
            {day}
          </div>
        ))}

        {getCalendarDays().map((day, index) => (
          <div
            key={index}
            className={`h-12 rounded-lg flex items-center justify-center text-sm relative ${
              day ? "bg-muted/10 hover:bg-muted/20 cursor-pointer" : ""
            }`}
            aria-label={
              day
                ? `Date: ${day.date}, Mood: ${day.mood || "Not tracked"}`
                : undefined
            }
          >
            {day?.dayNumber}

            {day?.mood && (
              <div
                className={`absolute bottom-1 w-3 h-3 rounded-full ${
                  moodColorMap[day.mood.toLowerCase()] || "bg-gray-400"
                }`}
                title={`Mood: ${day.mood}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center mt-6 flex-wrap">
        {Object.entries(moodColorMap).map(([mood, color]) => (
          <div key={mood} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${color}`} />
            <span className="text-sm capitalize">{mood}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
