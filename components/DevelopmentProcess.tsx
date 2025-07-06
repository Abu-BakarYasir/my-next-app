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
    title: 'Assemble the right team',
    description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: '#2',
    title: 'Sprint planning',
    description: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
  },
  {
    id: '#3',
    title: 'Tech architecture',
    description: 'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.',
  },
  {
    id: '#4',
    title: 'Standups & weekly demos',
    description: 'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.',
  },
  {
    id: '#5',
    title: 'Code reviews',
    description: 'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.',
  },
  {
    id: '#6',
    title: 'Iterative delivery',
    description: 'We divide the implementation process into several checkpoints rather than a single deadline.',
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-medium text-gray-700">How development</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-black">through</span> <span className="text-purple-600">Alcaline works</span>
        </h1>
      </div>

      <div className="relative mt-16">
        {/* Red timeline line */}
        <div className="absolute top-1/2 w-full h-1 bg-red-300 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col items-center text-center px-4`}>
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 max-w-sm">
                <p className="text-purple-600 font-bold">{step.id} <span className="text-black font-semibold">{step.title}</span></p>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trophy icon at the end */}
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-yellow-500">
          
               🏆
        </div>
        
      </div>
    </section>
  );
};

export default DevelopmentProcess;
