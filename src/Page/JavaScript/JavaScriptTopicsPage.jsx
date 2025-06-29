import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: "Values and Variables",
    description: "Learn how to store and manage data using variables like let, const, and var.",
    color: "bg-blue-500",
    path: "/javascript/valuesandvariables"
  },
  {
    title: "Data Types in JavaScript",
    description: "Understand primitive types like string, number, boolean, null, undefined, and Symbol.",
    color: "bg-purple-500",
    path: "/javascript/datatypes"
  },
  {
    title: "Advanced Data Types",
    description: "Explore complex types like Objects, Arrays, and special values like NaN and Infinity.",
    color: "bg-indigo-500",
    path: "/javascript/advanced-datatypes"
  },
  {
    title: "Concatenation & Type Coercion",
    description: "See how JavaScript converts values automatically and how to concatenate strings and numbers.",
    color: "bg-green-500",
    path: "/javascript/Concatenation&TypeCoercion"
  },
  {
    title: "Expressions & Operators (incl. Loops)",
    description: "From arithmetic to logical operators, and master for, while, do-while loops in JS.",
    color: "bg-red-500",
    path: "/javascript/Expressions&operators-loops"
  },
  {
    title: "Functions in JavaScript",
    description: "Write reusable code blocks using function declarations, expressions, arrow functions, and callbacks.",
    color: "bg-yellow-500",
    path: "/javascript/functions"
  }
];

const JavaScriptTopicsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">📘 JavaScript Learning Path</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore the core concepts of JavaScript with interactive guides and coding challenges.
        </p>

        {/* Topic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className={`block p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white ${topic.color}`}
            >
              <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
              <p className="opacity-90">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavaScriptTopicsPage;