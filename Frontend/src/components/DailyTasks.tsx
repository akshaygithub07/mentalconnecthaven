import React, { useState } from "react";

interface DailyTasksProps {
  tasks: { id: number; text: string; completed: boolean }[];
  setTasks: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; completed: boolean }[]>
  >;
}

export function DailyTasks({ tasks, setTasks }: DailyTasksProps) {
  // const [tasks, setTasks] = useState<
  //   { id: number; text: string; completed: boolean }[]
  // >([]);
  const [newTask, setNewTask] = useState("");

  // Predefined suggestions
  const suggestions = [
    "Start your day with 10 minutes of meditation.",
    "Write down three things you're grateful for.",
    "Organize your workspace for better focus.",
    "Set a clear goal for today and break it into smaller steps.",
    "Take a 15-minute walk to refresh your mind.",
    "Batch similar tasks together for efficiency.",
    "Try the Pomodoro technique for focused work sessions.",
    "Read a chapter of a book you've been meaning to finish.",
  ];

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
        <h3 className="text-lg font-medium mb-2">Suggestions</h3>
        <ul className="space-y-2">
          {suggestions.slice(0, 3).map((suggestion, index) => (
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

      {/* User's Tasks */}
      <div className="space-y-3 mb-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="group flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-400"
            />
            <p
              className={`ml-3 flex-1 ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.text}
            </p>
            <button
              onClick={() => deleteTask(task.id)}
              className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity"
            >
              ✕
            </button>
          </div>
        ))}
        {tasks.length === 0 && (
          <p className="text-center text-gray-500">
            No tasks yet. Add one from the suggestions above!
          </p>
        )}
      </div>

      {/* Add New Task */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a custom task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          onKeyDown={(e) => e.key === "Enter" && addTask(newTask)}
        />
        <button
          onClick={() => addTask(newTask)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
    </section>
  );
}
