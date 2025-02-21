import React, { useState } from "react";
import { FaReact, FaServer, FaChevronRight } from "react-icons/fa";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      role: "Data Analyst",
      company: "Indus Communities",
      duration: "August 2024 – Present",
      location: "Houston, TX",
      icon: <FaReact className="w-6 h-6" />,
      skills: ["Python", "Excel", "VBA", "PowerBI", "SOAP APIs"],
      description: [
        "Developed Puppeteer scripts to automate over 150K individual invoice downloads from Entrata, achieving a 95% reduction in manual processing time through custom file naming and filtering features.",
        "Developed RealPage API integrations to automate data exchange, optimizing the renewal process for lease expirations and reducing lease processing time by 40%, while streamlining utility billing for 38+ properties",
        "Led a Market Data Analysis project using ApartmentIQ to evaluate rent prices, fees, and amenities, shifting to a data-driven pricing strategy that improved rate-setting efficiency by 25% and increased revenue potential by 10%.",
        "Designed a pricing dashboard to visualize key financial metrics, enabling data-driven decisions and a 20% improvement in rate setting efficiency.",
        "Developed and implemented an automated system for security report generation and incident tracking, significantly enhancingsystematic reporting processes, boosting operational efficiency by 20%, and enabling instant access to critical data."
      ],
    },
    {
      role: "Software Engineer",
      company: "One Community Global",
      duration: "August 2023 – June 2024",
      location: "San Gabriel, CA",
      icon: <FaServer className="w-6 h-6" />,
      skills: ["React.js", "Node.js", "ExpressJS", "MongoDB", "Jest", "Figma"],
      description: [
        "Developed features and fixed bugs in the HGN app using React.js, Node.js, Express.js, and MongoDB, improving task management accuracy by 25%.",
        "Optimized database queries and integrated Redis caching, cutting response times from 2 seconds to 0.5 seconds.",
        "Reviewed and tested 50+ pull requests, reducing bugs by 10% and ensuring adherence to TDD and SOLID principles.",
        "Wrote unit tests with Jest, increasing code coverage by 35% and preventing critical production issues.",
        "Created an HGN Survey Dashboard using Figma to effectively visualize complex questionnaire data, providing actionable insights and enhancing the decision-making process for project stakeholders."
      ],
    },
    {
      role: "Software Engineer",
      company: "New York University - IT Department",
      duration: "May 2022 – May 2023",
      location: "Manhattan, NY",
      icon: <FaReact className="w-6 h-6" />,
      skills: ["React.js", "Express.js", "MongoDB", "AWS", "Python"],
      description: [
        "Developed “SupportHub,” a cloud-based IT ticketing platform using React.js, Express.js, and MongoDB, hosted on AWS. Integrated an LLM-powered chatbot, automating ticket triaging and responses, improving resolution efficiency.",
        "Streamlined deployment processes by migrating the codebase from Snowflake to GitLab, leveraging AWS Lambda (Python runtime) for automation. Reduced deployment time by 30%, enabling faster iteration and code delivery.",
        "Enhanced system performance monitoring by configuring AppDynamics dashboards and real-time alerts, proactively identifying issues and reducing mean time to detection (MTTD) by 40%, improving system reliability.",
        "Led a UI/UX optimization initiative, conducting A/B testing to revamp key landing pages, resulting in a 20% increase in click-through rates, driving better user engagement and accessibility."
      ],
    },
    {
      role: "Graduate Assistant - Software Engineer",
      company: "NYU Tandon - Department of Civil Urban Engineering",
      duration: "February 2022– May 2022",
      location: "Brooklyn, NY",
      icon: <FaServer className="w-6 h-6" />,
      skills: ["ReactJS", "Node.js", "Python", "React-Three-Fiber", "IFCOpenShell"],
      description: [
        "Developed an advanced 3D BIM (Building Information Model) visualization application using ReactJS and ThreeJS, reducing rendering time by 40% and enhancing model interactivity.",
        "Optimized BIM model data extraction by leveraging Python’s IFCopenShell to efficiently parse large IFC files and using React-Three-Fiber to render 3000+ mesh components, resulting in a 40% improvement in processing speed.",
        "Mapped extracted mesh components to their corresponding BIM data, enabling real-time selection, annotations, and text overlays for better visualization and interactive analysis of building elements.",
      ],
    },
    {
      role: "Science and Technology Intern",
      company: "NITI Aayog - Government of India",
      duration: "June 2017– July 2017",
      location: "New Delhi, India",
      icon: <FaReact className="w-6 h-6" />,
      skills: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "JSP"],
      description: [
        "Developed a Spring Boot-based Monitoring Dashboard to aggregate and process data from multiple government websites, enabling real-time tracking of ₹50M+ worth of grants across ministries.",
        "Designed RESTful APIs to fetch, clean, and integrate structured and unstructured data, reducing manual tracking efforts by 80% and improving data accessibility for policymakers.",
        "Built a custom analytics module to visualize grant progress using key performance indicators (KPIs), improving policy evaluation efficiency by 40%.",
      ],
    }
    
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-70" />
          </div>
          <h2 className="text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 drop-shadow-sm">
              Work Experience
            </span>
          </h2>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mt-8 shadow-lg" />
        </div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-24">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center gap-8 mb-12 pl-20"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 transform">
                <div
                  className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white 
                    flex items-center justify-center transition-all duration-300
                    ${activeIndex === index ? "scale-125" : ""}`}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>

              {/* Experience Card */}
              <div
                className={`flex-1 bg-white p-8 rounded-lg border border-gray-200 shadow-lg transition-all duration-300 
                  ${activeIndex === index ? "transform -translate-y-2 shadow-xl" : ""}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg text-blue-600">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-gray-600">{exp.company}</h4>
                    <p className="text-gray-500 text-sm font-medium mt-1">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <ul className="space-y-3 text-gray-600 text-sm mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaChevronRight className="flex-shrink-0 mt-1 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
