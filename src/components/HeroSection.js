import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const name = "Vikram";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayText(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: { value: "#ffffff" } },
    fullScreen: { enable: true },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#1E90FF", "#FF69B4", "#8A2BE2"] },
      links: { color: "#8A2BE2", distance: 150, enable: true, opacity: 0.6, width: 1 },
      collisions: { enable: true },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 1.5 },
      number: { density: { enable: true, area: 800 }, value: 70 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  };

  const handleResumePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/myResume.pdf"; 
    link.download = "Vikram Badhan SDE Resume_EXP.pdf";
    link.click();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white via-blue-100 to-blue-200 w-full relative overflow-hidden">
      {/* Particles Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Photo Section */}
        <div className="mb-6">
          <img
            src="/my_image.jpg" // Correct static file path
            alt="Vikram Badhan"
            className="w-64 h-64 rounded-full border-8 border-blue-500 shadow-lg mx-auto"
          />
        </div>

        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          Hi, I'm{" "}
          <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-xl text-gray-600 mt-6 mb-5 animate-fade-in">
          <b> Data Analyst | Interested in Software Engineering and Data Science | NYU Grad </b>
        </p>

        <button
          onClick={handleResumePreview}
          className="group relative px-8 py-4 w-48 overflow-hidden rounded-2xl bg-white/80 text-gray-700 font-medium border-2 border-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-all hover:scale-105"
        >
          <span className="relative z-10">Preview CV</span>
        </button>

        <div className="mt-12 flex justify-center gap-6 animate-fade-in-delayed">
          <SocialLink icon={<GithubIcon />} href="https://github.com/vikrambadhan" />
          <SocialLink icon={<LinkedInIcon />} href="https://www.linkedin.com/in/vikb9/" />
          <SocialLink icon={<LeetCodeIcon />} href="https://leetcode.com/u/vikram-badhan/" />
        </div>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Resume Preview</h2>
            <embed
              src="/myResume.pdf" // Correct static file path
              type="application/pdf"
              className="w-full h-96"
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button
                onClick={handleResumeDownload}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





const SocialLink = ({ icon, href }) => (
  <a
    href={href}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);



const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export default HeroSection;