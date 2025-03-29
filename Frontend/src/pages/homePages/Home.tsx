import React, { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Chatbot />
    </div>
  );
};

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        // Updated URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
      const data = await response.json();
      const chatbotMessage = { text: data.response, sender: "chatbot" };
      setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
    } catch (error) {
      console.error("Error fetching data:", error);
      const errorMessage = {
        text: "Error communicating with chatbot.",
        sender: "chatbot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="flex flex-col my-24 w-full mx-auto">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg px-3 py-2 max-w-[70%] sm:max-w-[50%] whitespace-pre-wrap break-words ${
                message.sender === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 text-gray-800 mr-auto"
              }`}
            >
              <p className="text-sm">
                {/* {message.sender === "user" ? "You: " : "Chatbot: "} */}
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full px-8 py-8 border-t bg-calm-50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
