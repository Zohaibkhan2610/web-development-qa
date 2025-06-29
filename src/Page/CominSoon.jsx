import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoonPage = ({ topicTitle = "This Topic" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        <div className="text-6xl mb-4 animate-bounce">🚧</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          {topicTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
          This topic is under construction. We're working hard to bring it to you soon!
        </p>

        <button
          onClick={() => navigate("/Javascript")}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
        >
          🔙 Go Back Javascript Page
        </button>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-6 italic">
          Thank you for your patience 🙏
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
