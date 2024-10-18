import React, { useState } from "react";
import './output.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">

      {/* Main Page Content */}
      <div class="absolute top-10 left-10 flex flex-col space-y-4">
            <a href="#" class="text-white"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-white"><i class="fab fa-youtube"></i></a>
        </div>
      <div class="text-center text-white flex-1 flex flex-col items-center justify-center space-y-6">
        <h1 class="text-5xl font-bold">Get your task done</h1>
        <p class="text-3xl">Your AI-Based Scheduler</p>
        <p class="max-w-xl text-lg leading-relaxed">
          This AI-based scheduler will break your bigger task into smaller simple steps so you can tackle them down.
        </p>
        <button
          onClick={openModal}
          class="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          Get Started
        </button>

      </div>
  

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg shadow-lg p-8 w-96">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-lg font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 text-white"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-lg font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 text-white"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
                Sign Up
              </button>
            </form>
            <button
              onClick={closeModal}
              className="w-full mt-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
