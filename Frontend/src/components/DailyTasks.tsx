import React, { useState, useMemo } from "react";

interface DailyTasksProps {
  tasks: { id: number; text: string; completed: boolean }[];
  setTasks: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; completed: boolean }[]>
  >;
}

export function DailyTasks({ tasks, setTasks }: DailyTasksProps) {
  const [newTask, setNewTask] = useState("");

  // Predefined suggestions
  const suggestions = useMemo(
    () => [
      "Start your day with 10 minutes of meditation.",
      "Write down three things you're grateful for.",
      "Organize your workspace for better focus.",
      "Set a clear goal for today and break it into smaller steps.",
      "Take a 15-minute walk to refresh your mind.",
      "Batch similar tasks together for efficiency.",
      "Try the Pomodoro technique for focused work sessions.",
      "Read a chapter of a book you've been meaning to finish.",
    ],
    []
  );

  // Randomly selected daily suggestions
  const dailySuggestions = useMemo(() => {
    const shuffled = [...suggestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [suggestions]);

  const addTask = (taskText: string) => {
    if (taskText.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: Date.now(),
          text: taskText,
          completed: false,
        },
      ]);
    }
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <section className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <h2 className="text-xl font-semibold mb-4">What You Can Do Today</h2>

      {/* Suggested Tasks */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Today's Suggestions</h3>
        <ul className="space-y-2">
          {dailySuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
            >
              <p className="text-gray-800">{suggestion}</p>
              <button
                onClick={() => addTask(suggestion)}
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
