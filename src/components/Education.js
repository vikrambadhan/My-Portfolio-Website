import React from "react";

const EducationCard = ({ edu }) => (
 <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-blue-100">
   <div className="relative rounded-xl mb-6 flex flex-col items-center">
     <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-md flex items-center justify-center p-2">
       <img
         src={edu.logo}
         alt={`${edu.institution} Logo`}
         className="w-25 h-20 object-contain"
       />
     </div>
   </div>
   
   <div className="space-y-2 text-center mb-6">
     <h3 className="text-xl font-bold text-blue-600">
       {edu.degree}
     </h3>
     <p className="font-medium text-gray-700">{edu.institution}</p>
     <p className="text-sm text-gray-500">{edu.year}</p>
   </div>

   <ul className="space-y-3">
     {edu.details.map((detail, idx) => (
       <li key={idx} className="flex items-start gap-3">
         <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
           <span className="w-2 h-2 rounded-full bg-blue-500" />
         </span>
         <span className="text-sm text-gray-600">{detail}</span>
       </li>
     ))}
   </ul>
 </div>
);

const EducationSection = () => {
 const educationData = [
   {
     degree: "Master of Science in Computer Science",
     institution: "New York University",
     year: " September 2021 - May 2023",
     details: [
       "Specialized in Software Engineering and Data Science",
       "Worked as Software Engineer at NYU IT",
       "Secured Dean Scholarship of $7000/yr"
     ],
     logo: "/nyuLogo.png"
   },
   {
     degree: "Bachelor of Technology in Information Technology",
     institution: "Guru Gobind Singh Indraprastha University",
     year: "August 2014 - May 2018",
     details: [
       "Top 10% of the class",
       "Worked on multiple projects" ,
       "Prakriti Volunteer",
       "Interned at India's finest Think Tank - NITI Aayog"
     ],
     logo: "/GGSIPU.jpg"
   }
 ];

 return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16 relative z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-blue-500 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span className="text-blue-600">Education</span>
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-2" />
          </div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            My academic journey and key achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

