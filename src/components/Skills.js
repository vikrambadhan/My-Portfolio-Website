import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: "🎯",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "TypeScript", icon: "💫" },
        { name: "JavaScript", icon: "📘" },
        { name: "Java", icon: "☕" },
        
      ],
      description: "Code Wizardry"
    },
    {
      category: "Frontend Magic",
      icon: "✨",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Angular", icon: "🔺" },
        { name: "HTML/CSS", icon: "🎨" },
        { name: "TypeScript", icon: "📘" }
      ],
      description: "Interface Sorcery"
    },
    {
      category: "Backend Powers",
      icon: "⚡",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "Node.js", icon: "🚀" },
        { name: "Django", icon: "🌟" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "REST API", icon: "🔌" }
      ],
      description: "Server Mastery"
    },
    {
      category: "AI & Data",
      icon: "🧠",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "ML", icon: "🔥" },
        { name: "PySpark", icon: "📊" },
        { name: "Numpy", icon: "🔢" },
        { name: "Pandas", icon: "🐼" }
      ],
      description: "Data Wizardry"
    },
    {
      category: "Cloud Journey",
      icon: "☁️",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "AWS", icon: "🌩️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⛵" },
        { name: "Jenkins", icon: "🤖" }
      ],
      description: "Cloud Mastery"
    },
    {
      category: "Data Vaults",
      icon: "🗄️",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "SQL", icon: "📊" },
        { name: "Snowflake", icon: "❄️" },
        { name: "PostgreSQL", icon: "🐘" }
      ],
      description: "Data Sorcery"
    }
  ];
      // 60
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-0">
      {/* Header Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-70" />
        </div>
        <h2 className="text-6xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 drop-shadow-sm">
            Tech Magic ✨
          </span>
        </h2>
        <div className="h-1.5 w-40 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mt-8 shadow-lg" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {skillCategories.map((category, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl p-3 rounded-full bg-gray-100 shadow-md mb-4 group-hover:animate-bounce">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center gap-1 hover:scale-105 text-sm"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;