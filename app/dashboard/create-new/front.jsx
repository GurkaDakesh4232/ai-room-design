"use client"
import React from 'react';
import { FaUpload, FaPaintBrush, FaDownload, FaHeadset } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { FaLinkedin, FaInstagram, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import additional icons

function FrontPage() {
  const router = useRouter(); // Initialize the router

  const handleGetStarted = () => {
    router.push('/dashboard'); // Redirect to the dashboard page
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-gray-800 bg-cover bg-center"
      style={{ backgroundImage: "url('/back.jpg')" }}
    >
      {/* Header Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
        AI Interior Design Transformation
      </h1>
      <p className="text-lg text-center text-gray-500 mb-12">
        See your space transformed with AI! Upload a photo, select your preferred style, and witness the makeover instantly.
      </p>

      {/* Before and After Images */}
      <div className="flex gap-8 mb-10">
        <div className="flex flex-col items-center transform transition-transform hover:scale-105">
          <img
            src="/before.webp"
            alt="Before"
            className="w-64 h-64 object-cover rounded-lg shadow-lg backdrop-blur-sm bg-opacity-50"
            style={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          />
          <p className="text-center text-gray-600 mt-2">Before</p>
        </div>
        <div className="flex flex-col items-center transform transition-transform hover:scale-105">
          <img
            src="/after.webp"
            alt="After"
            className="w-64 h-64 object-cover rounded-lg shadow-lg backdrop-blur-sm bg-opacity-50"
            style={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          />
          <p className="text-center text-gray-600 mt-2">After</p>
        </div>
      </div>

      {/* Get Started Button */}
      <button
        onClick={handleGetStarted}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg mb-10"
      >
        Get Started
      </button>

      {/* Icons and Descriptions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl text-center">
        <div className="flex flex-col items-center">
          <FaUpload className="text-4xl text-purple-600 mb-2" />
          <p className="font-semibold text-gray-700">Upload</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPaintBrush className="text-4xl text-purple-600 mb-2" />
          <p className="font-semibold text-gray-700">Select Design</p>
        </div>
        <div className="flex flex-col items-center">
          <FaDownload className="text-4xl text-purple-600 mb-2" />
          <p className="font-semibold text-gray-700">Ready to Download</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHeadset className="text-4xl text-purple-600 mb-2" />
          <p className="font-semibold text-gray-700">24/7 Support</p>
        </div>
      </div>

      {/* Footer with contact information */}
      <footer className="w-full max-w-3xl text-center mt-10 py-6 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Contact Details</h2>
        <p className="text-gray-700 mb-4">Gurka Dakesh</p>
        
        {/* Contact Icons */}
        <div className="flex justify-center space-x-6 text-gray-600 mb-4">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-purple-600">
            <FaPhone className="text-xl" />
            <span>+91-7799887363</span>
          </a>
          <a href="mailto:youremail@gmail.com" className="flex items-center gap-2 hover:text-purple-600">
            <FaEnvelope className="text-xl" />
            <span>gurkadakesh4232@gmail.com</span>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/gurka-dakesh-719928314/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://github.com/GurkaDakesh4232" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
            <FaGithub className="text-2xl" />
          </a>
        </div>

        <p className="text-gray-500 mt-4">
          Passionate about AI-driven design transformations. Let's connect and make your spaces look extraordinary!
        </p>
      </footer>
    </div>
  );
}

export default FrontPage;
