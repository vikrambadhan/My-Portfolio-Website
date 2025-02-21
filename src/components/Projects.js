import React, { useState } from 'react';

const projects = [
  {
    title: "Smart Health App",
    description: "An online meal recommendation and food delivery web application that suggests meals to users on the basis of their nutritional requirements and fitness goals.",
    technologies: ["Python", "AWS-Lambda", "AWS-s3", "aws-APIgateway", "Sagemaker", "Dynamo-db"],
    github: "https://github.com/vikrambadhan/smart-health-app",
    category: "Full Stack"
  }, 
  {
    title: "Rent Dashboard",
    description: "A dynamic rent analysis dashboard to track rental trends, optimize pricing, and project renewal rates with interactive graphs and editable tables.",
    technologies: ["ReactJS", "NodeJS", "ChartJS", "multer"],
    github: "https://github.com/vikrambadhan/rent-dashboard",
    category: "Full Stack"
  },
  {
    title: "Dining Concierge ChatBot",
    description: "A Web application build on AWS that suggests restaurants based on users choice of cuisine and city.",
    technologies: ["Python", "AWS-lex", "AWS-Lambda", "AWS-s3", "aws-APIgateway","Dynamo-db"],
    github: "https://github.com/vikrambadhan/Dining-Concierge-Chatbot",
    category: "Cloud Computing"
  },
  {
    title: "Qatar 2022 World Cup Predictor",
    description: "AI-powered food classification using MobileNetV2.",
    technologies: ["Python", "PySpark", "Pandas", "ML-Algorithms", "Time-Series"],
    github: "https://github.com/vikrambadhan/Qatar2022_World_Cup_Predictor",
    category: "Big Data & ML"
  },
  {
    title: "Cancer Line of Therapy Analysis",
    description: "A PySpark-based analysis of cancer treatment pathways, replicating research findings to determine the sequence of therapies and patient response patterns.",
    technologies: ["Python", "PySpark", "Pandas"],
    github: "https://github.com/vikrambadhan/Cancer-LineOfTherapy-Analysis",
    category: "Big Data & ML"
  },
  {
  title: "Email Spam Detection uing AWS",
    description: "A Machine learning-based email classification system that predicts and flags spam messages in real-time based on trained model predictions.",
    technologies: ["Python", "PySpark", "Pandas"],
    github: "https://github.com/vikrambadhan/Email-Spam-Detection-usingAWS",
    category: "Cloud Computing"
  }, 
  {
    title: "Smart Photo Search Album",
      description: "A photo album web app with natural language search, allowing users to find images using text or voice by identifying people, objects, actions, and landmarks.",
      technologies: ["Python","AWS-Lambda", "AWS-CloudFormation", "AWS=rekognition", "AWS-DynamoDB"],
      github: "https://github.com/vikrambadhan/Voice_based_Smart_Photo_Album_App",
      category: "Cloud Computing"
  },
  {
    title: "Portfolio Website",
    description: "A modern and interactive portfolio showcasing my work with advanced animations.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/vikrambadhan/My-Portfolio-Website",
    category: "Frontend"
  },
  {
    title: "Entrata Automation Using Puppeteer",
    description: "A Puppeteer-based automation tool for downloading and renaming invoices from Entrata, automating filtering, batch downloads, and file naming using invoice numbers.",
    technologies: ["Java", "Distributed Systems"],
    github: "https://github.com/vikrambadhan/entrata-invoice-automation",
    category: "Automation Script"
  }
];

const categories = ["All", ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project =>
    selectedCategory === "All" || project.category === selectedCategory
  );

  /*px-6 py-0*/
  return (
    <div className="min-h-screen bg-white px-6 py-0">   
      {/* Header Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-70" />
        </div>
        <h2 className="text-6xl font-bold relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 drop-shadow-sm">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 text-xl mt-6 max-w-2xl mx-auto">
          Explore my latest work and side projects
        </p>
        <div className="h-1.5 w-40 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mt-8 shadow-lg" />
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative group animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative bg-white rounded-xl p-6 h-full border border-gray-200 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute top-2 right-2">
                <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                {/* Render GitHub Button Conditionally */}
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
                {/* Render Live Demo Button Conditionally */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
