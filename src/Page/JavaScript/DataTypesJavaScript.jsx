import "prismjs/themes/prism.css";
import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript";

// Import your cleaned questions (without tags)
import { DataTypesQuest } from "./JAvaScriptQuestion";

const DataTypesJavaScript = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [languageMode, setLanguageMode] = useState("both");
  const [practiceMode, setPracticeMode] = useState(false);
  const [showAnswers, setShowAnswers] = useState({});
  const [codeStates, setCodeStates] = useState({});
  const [codeOutputs, setCodeOutputs] = useState({});
  const [isRunning, setIsRunning] = useState({});

  const questionsPerPage = 15;

  // Filter questions based on search term
  const filtered = DataTypesQuest.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.englishExplanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.urduExplanation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentData = filtered.slice(startIndex, startIndex + questionsPerPage);

  // Reset page when search changes
  useEffect(() => setCurrentPage(1), [searchTerm]);

  const runCode = (index, code) => {
    setIsRunning((prev) => ({ ...prev, [index]: true }));
    const capturedOutput = [];
    const originalLog = console.log;

    // Override console.log to capture output
    console.log = (...args) => {
      capturedOutput.push(args.map(String).join(" "));
    };

    try {
      const wrappedCode = `
        (function runUserCode() {
          ${code}
        })()
      `;
      eval(wrappedCode);

      // Set final output
      const result =
        capturedOutput.length > 0
          ? capturedOutput.join("\n")
          : "✅ Code executed (no output)";
      setCodeOutputs((prev) => ({ ...prev, [index]: result }));
    } catch (error) {
      setCodeOutputs((prev) => ({ ...prev, [index]: `❌ ${error.message}` }));
    } finally {
      console.log = originalLog; // Restore original console.log
      setIsRunning((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-6 transition-colors duration-300`}
    >

        {/* Hero section  */}
      <>
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          {["english", "urdu", "both"].map((mode) => (
            <button
              key={mode}
              onClick={() => setLanguageMode(mode)}
              className={`px-3 py-1 rounded-full transition ${
                languageMode === mode
                  ? "bg-blue-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white border text-gray-800"
              }`}
            >
              {mode === "both"
                ? "🇬🇧 + 🇵🇰 Both"
                : mode === "english"
                ? "🇬🇧 English"
                : "🇵🇰 Urdu"}
            </button>
          ))}
        </div>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            JavaScript Data Types
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-900 dark:text-gray-600">
            Understand the different types of data JavaScript works with, such
            as strings, numbers, booleans, objects, and more.
          </p>
        </section>

        {/* Primitive Data Types */}
        <section
          className={`mb-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold text-blue-500 mb-3">
            Primitive Data Types
          </h2>

          {(languageMode === "english" || languageMode === "both") && (
            <p className="mb-3">
              JavaScript has 7 primitive types: string, number, boolean, null,
              undefined, symbol, and bigint.
            </p>
          )}

          {(languageMode === "urdu" || languageMode === "both") && (
            <p
              className={`mb-3 italic ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <strong>Roman Urdu:</strong> JavaScript mein 7 primitive types
              hoti hain: string, number, boolean, null, undefined, symbol, aur
              bigint.
            </p>
          )}

          <pre
            className={`p-3 rounded text-sm overflow-x-auto ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            {`let name = "Ali";     // string\nlet age = 25;         // number\nlet isHappy = true;   // boolean\nlet nothing = null;   // null\nlet notSet;           // undefined\nlet id = Symbol();    // symbol\nlet big = 12345678901234567890n; // bigint`}
          </pre>
        </section>

        {/* typeof Operator */}
        <section
          className={`mb-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold text-green-500 mb-3">
            Using typeof
          </h2>

          {(languageMode === "english" || languageMode === "both") && (
            <p className="mb-3">
              The <code>typeof</code> operator returns the type of a value. It
              helps check whether a variable is a string, number, etc.
            </p>
          )}
          {(languageMode === "urdu" || languageMode === "both") && (
            <p
              className={`mb-3 italic ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <strong>Roman Urdu:</strong> <code>typeof</code> operator value ka
              type batata hai, jaise ke string, number ya boolean.
            </p>
          )}

          <pre
            className={`p-3 rounded text-sm overflow-x-auto ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            {`typeof "Hello";   // "string"\ntypeof 123;        // "number"\ntypeof true;       // "boolean"\ntypeof null;       // "object"\ntypeof undefined;  // "undefined"`}
          </pre>
        </section>

        {/* Object & Array Types */}
        <section
          className={`mb-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold text-purple-500 mb-3">
            Object and Array
          </h2>

          {(languageMode === "english" || languageMode === "both") && (
            <p className="mb-3">
              Objects and arrays are non-primitive data types used to store
              collections of data.
            </p>
          )}
          {(languageMode === "urdu" || languageMode === "both") && (
            <p
              className={`mb-3 italic ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <strong>Roman Urdu:</strong> Object aur array non-primitive types
              hain jo multiple data ko store karti hain.
            </p>
          )}

          <pre
            className={`p-3 rounded text-sm overflow-x-auto ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            {`let person = { name: "Ali", age: 25 };\nlet colors = ["red", "blue", "green"];`}
          </pre>
        </section>

        {/* Extra Tips */}
        <section
          className={`mb-10 p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            Useful Type Checks
          </h2>

          {(languageMode === "english" || languageMode === "both") && (
            <ul className="list-disc pl-5 mb-2">
              <li>
                <code>Array.isArray(value)</code> checks if value is an array
              </li>
              <li>
                <code>isNaN(value)</code> checks if it's Not-a-Number
              </li>
            </ul>
          )}
          {(languageMode === "urdu" || languageMode === "both") && (
            <ul
              className={`list-disc pl-5 italic ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>
                <code>Array.isArray(value)</code> se pata chalta hai ke value
                array hai
              </li>
              <li>
                <code>isNaN(value)</code> check karta hai ke value number nahi
                hai
              </li>
            </ul>
          )}

          <pre
            className={`p-3 rounded text-sm overflow-x-auto ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            {`Array.isArray(["a", "b"]);  // true\nisNaN("abc");             // true`}
          </pre>
        </section>
      </>
      {/* Rest of your interactive practice UI goes here */}
      {/* Keep all the rest of your existing JSX below this line... */}
      {/* Your question cards, pagination, buttons, etc. */}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 md:mb-0">
          🧠 JavaScript Practice
        </h1>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          {["english", "urdu", "both"].map((mode) => (
            <button
              key={mode}
              onClick={() => setLanguageMode(mode)}
              className={`px-3 py-1 rounded-full ${
                languageMode === mode
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-800"
              }`}
            >
              {mode === "both"
                ? "🇬🇧 + 🇵🇰 Both"
                : mode === "english"
                ? "🇬🇧 English"
                : "🇵🇰 Urdu"}
            </button>
          ))}
          <button
            onClick={() => {
              setPracticeMode(!practiceMode);
              setShowAnswers({});
            }}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
          >
            {practiceMode ? "📝 View All Answers" : "🎯 Practice Mode"}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {currentData.map((q, i) => {
          const globalIndex = startIndex + i;
          const currentCode = codeStates[globalIndex] ?? q.code;
          const isAnswerVisible = showAnswers[globalIndex];
          const isLoading = isRunning[globalIndex];

          return (
            <div
              key={globalIndex}
              className={`rounded-xl p-6 shadow ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-semibold text-purple-600 mb-2">
                {q.question}
              </h2>

              {practiceMode && !isAnswerVisible ? (
                <button
                  className="bg-indigo-500 text-white px-4 py-1 rounded"
                  onClick={() =>
                    setShowAnswers((s) => ({ ...s, [globalIndex]: true }))
                  }
                >
                  Show Answer
                </button>
              ) : (
                <>
                  <p className="text-sm text-gray-500 mb-2">
                    💡 Tip: Use{" "}
                    <code className="bg-gray-200 px-1">console.log(value)</code>{" "}
                    or end with an expression like{" "}
                    <code className="bg-gray-200 px-1">value</code>
                  </p>

                  <Editor
                    value={currentCode}
                    onValueChange={(newCode) =>
                      setCodeStates((s) => ({ ...s, [globalIndex]: newCode }))
                    }
                    highlight={(code) => highlight(code, languages.javascript)}
                    padding={10}
                    className="bg-gray-100 rounded font-mono text-sm mb-2"
                    style={{ whiteSpace: "pre-wrap" }}
                  />

                  <button
                    disabled={isLoading}
                    onClick={() => runCode(globalIndex, currentCode)}
                    className={`flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mb-2 transition ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-b-2 border-white rounded-full"></span>
                        Running...
                      </>
                    ) : (
                      <>▶️ Run Code</>
                    )}
                  </button>

                  {codeOutputs[globalIndex] !== undefined && (
                    <div className="bg-gray-200 text-black p-2 rounded font-mono text-sm mb-2 whitespace-pre">
                      <strong>Output:</strong> {codeOutputs[globalIndex]}
                    </div>
                  )}

                  {languageMode !== "urdu" && (
                    <p>
                      <strong>🟥 English:</strong> {q.englishExplanation}
                    </p>
                  )}
                  {languageMode !== "english" && (
                    <p>
                      <strong>🟦 Roman Urdu:</strong> {q.urduExplanation}
                    </p>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-1.5 rounded ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-white border text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Print Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => window.print()}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          📄 Download as PDF
        </button>
      </div>
    </div>
  );
};

export default DataTypesJavaScript;
