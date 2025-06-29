import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-fit bg-gradient-to-b from-blue-50 to-white text-gray-800">


      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">📘 Learn Concepts</h2>
          <p className="text-gray-600">
            Dive into essential web development topics with easy-to-understand guides and visual examples.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-gray-100">
          <h2 className="text-2xl font-bold text-green-600 mb-4">✍️ Practice Questions</h2>
          <p className="text-gray-600">
            Sharpen your skills with real-world coding problems and quizzes tailored for beginners to pros.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-gray-100">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">🛠️ Live Examples</h2>
          <p className="text-gray-600">
            Experiment with live code editors and see results instantly without leaving your browser.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-blue-600 text-white rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Skills?</h2>
        <p className="mb-6 text-lg opacity-90">Start practicing today — no setup required!</p>
        <a
          href='#web-coure'
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300"
        >
          Begin Learning
        </a>
      </section>

     
    </div>
  );
};

export default HomePage;