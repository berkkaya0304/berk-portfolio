"use client";
import { useState } from 'react';
import { ChevronUp, ChevronDown, Camera, Award } from 'lucide-react';

const SAMPLE_TIMELINE_DATA = [
  {
    id: 1,
    title: "Full Stack Development Bootcamp",
    company: "Kodluyoruz",
    date: "Ocak 2024 - Mart 2024",
    description: "JavaScript, React, Node.js ve MongoDB ile web uygulamaları geliştirme",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    photo: "/api/placeholder/400/300",
    certificate: "/api/placeholder/400/300"
  },
];

const TimelineItem = ({ data, isExpanded, onToggle }) => {
  // ID'ye göre pozisyon belirleme - tek sayılar sola, çift sayılar sağa
  const isLeft = data.id % 2 === 1;
  
  return (
    <div className={`flex items-center w-full mb-8 ${isLeft ? 'justify-end' : 'justify-start'}`}>
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div className={`bg-[#1c1c22] rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl 
          ${isLeft ? 'translate-x-4' : '-translate-x-4'} 
          hover:translate-x-0 border border-[#00dcff]`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">{data.title}</h3>
            <button
              onClick={onToggle}
              className="text-[#00dcff] hover:text-[#00e187] transition-colors"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          <div className="mb-2">
            <p className="text-[#00dcff] font-medium">{data.company}</p>
            <p className="text-gray-400 text-sm">{data.date}</p>
          </div>

          <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-300 mb-4">{data.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {data.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-[#1c1c22] text-[#00dcff] text-xs font-medium px-2.5 py-0.5 rounded border border-[#00dcff] hover:border-[#00e187] hover:text-[#00e187] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg border border-[#00dcff] group-hover:border-[#00e187] transition-colors">
                  <img 
                    src={data.photo} 
                    alt="Program photo" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#1c1c22] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                    <Camera className="text-[#00e187] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-1">Program Photo</p>
              </div>
              
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg border border-[#00dcff] group-hover:border-[#00e187] transition-colors">
                  <img 
                    src={data.certificate} 
                    alt="Certificate" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#1c1c22] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                    <Award className="text-[#00e187] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-1">Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline nokta */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00dcff] rounded-full border-4 border-[#1c1c22] shadow hover:bg-[#00e187] transition-colors" />
    </div>
  );
};

const EducationTimeline = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (id) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Programs That I Attended</h2>
      
      <div className="relative">
        {/* Timeline çizgisi */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00dcff] hover:bg-[#00e187] transition-colors">
          <div className="absolute w-full h-full animate-pulse bg-[#1c1c22] mix-blend-overlay" />
        </div>

        {/* Timeline içeriği */}
        <div className="relative">
          {SAMPLE_TIMELINE_DATA.map((item) => (
            <TimelineItem
              key={item.id}
              data={item}
              isExpanded={expandedItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;