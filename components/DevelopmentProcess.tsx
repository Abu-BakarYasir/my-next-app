// "use client";

// import React from 'react';
// import developmentProcess from '../public/assets/development-process.json';

// const DevelopmentProcess: React.FC = () => {
//   return (
//     <div className="container mx-auto p-4 bg-blue-50 min-h-screen flex items-center justify-center">
//       <div className="relative w-full max-w-4xl">
//         <h1 className="text-3xl font-bold text-center mb-8">How development through Alicaline works</h1>
//         <div className="absolute top-1/2 left-0 w-full border-t-4 border-purple-600 transform -translate-y-1/2 z-0"></div>
//         <div className="relative z-10 flex justify-between items-center">
//           {developmentProcess.map((step, index) => (
//             <div key={step.id} className="flex-1 text-center">
//               <div className="bg-white p-4 rounded-lg shadow-md inline-block">
//                 <div className={`w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mb-2 ${index === 0 ? 'ml-0' : ''} ${index === developmentProcess.length - 1 ? 'mr-0' : ''}`}>
//                   #{step.id}
//                 </div>
//                 <h2 className="text-lg font-semibold mb-1">{step.title}</h2>
//                 <p className="text-gray-600 text-sm">{step.description}</p>
//               </div>
//             </div>
//           ))}
//           <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
//             <div className="w-8 h-8 bg-yellow-400 text-white rounded-full flex items-center justify-center">
//               🏆
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevelopmentProcess;

import React from 'react';
//import { Trophy } from 'lucide-react'; // Optional: Install lucide-react for icons

const steps = [
  {
    id: '#1',
    title: 'Project Discovery',
    description: "We start by understanding your business goals, target audience, and project requirements to create the perfect web solution.",
  },
  {
    id: '#2',
    title: 'Design & Planning',
    description: 'Our team creates detailed wireframes and designs that align with your brand and provide excellent user experience.',
  },
  {
    id: '#3',
    title: 'Development',
    description: 'We build your website using modern technologies and best practices to ensure performance, security, and scalability.',
  },
  {
    id: '#4',
    title: 'Testing & Review',
    description: 'Comprehensive testing across all devices and browsers to ensure your website works perfectly before launch.',
  },
  {
    id: '#5',
    title: 'Launch & Deploy',
    description: 'We handle the deployment process and ensure your website goes live smoothly with all systems working properly.',
  },
  {
    id: '#6',
    title: 'Support & Maintenance',
    description: 'Ongoing support and maintenance to keep your website updated, secure, and performing at its best.',
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 mb-2">How development</h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          <span className="text-black">through</span> <span className="text-purple-600">Spiral Labs works</span>
        </h1>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 w-full h-1 bg-red-300 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 w-full max-w-sm">
                <p className="text-purple-600 font-bold text-sm sm:text-base mb-2 sm:mb-3">
                  {step.id} <span className="text-black font-semibold">{step.title}</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-yellow-500 text-2xl">
          🏆
        </div>
        
        <div className="lg:hidden text-center mt-6 sm:mt-8 text-yellow-500 text-2xl">
          🏆
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
