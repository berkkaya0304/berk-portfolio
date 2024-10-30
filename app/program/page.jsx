"use client";
import { useState } from 'react';
import { ChevronUp, ChevronDown, Camera, Award, Link as LinkIcon } from 'lucide-react';

const SAMPLE_TIMELINE_DATA = [
  {
    id: 1,
    title: "Coding with IBM: CyberStart",
    company: "IBM",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    date: "August 2024 - September 2024",
    description: "Learning new things about CyberSecurity",
    skills: ["CyberSecurity"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH9F5ZKKGLC4g/feedshare-shrink_1280/feedshare-shrink_1280/0/1729624403111?e=1733356800&v=beta&t=ZM-zf0-iquivjYl96TlB42PtVVamRHQQeYOFnwR309A",
      link: "https://www.linkedin.com/posts/berkkaya_ibm-cyberstart-kodluyoruz-activity-7254733388786352128-kTEV?utm_source=share&utm_medium=member_desktop"
    }
  },
  {
    id: 2,
    title: "Leader Development Program",
    company: "Leader Development Program",
    companyLogo: "https://www.lidergelisim.com/wp-content/uploads/2023/09/Untitled-1064-x-640-px-1064-x-609-px.png",
    date: "September 2023 - October 2024",
    description: "Learning new things about Leadership",
    skills: ["Leadership","Management","Self-Branding"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGO1Y2AcSgfSA/feedshare-shrink_800/feedshare-shrink_800/0/1729606021102?e=1733356800&v=beta&t=NVYXK2R8hg9wLNoDW-_vJp4BXRPumhNZLdiC2Exin3o",
      link: "https://www.linkedin.com/posts/berkkaya_leader-development-program-activity-7254493460559224832-PADf?utm_source=share&utm_medium=member_desktop"
    }
  },
];

const TimelineItem = ({ data, isExpanded, onToggle }) => {
  const isLeft = data.id % 2 === 0;
  
  return (
    <div className={`flex items-center w-full mb-8 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:w-5/12 px-4 md:px-8">
        <div className="bg-[#1c1c22] rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-[#00dcff]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">{data.title}</h3>
            <button
              onClick={onToggle}
              className="text-[#00dcff] hover:text-[#00e187] transition-colors"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
  {data.companyLogo && (
    <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border border-[#00dcff]">
      <img 
        src={data.companyLogo} 
        alt={`${data.company} logo`} 
        className="max-w-full max-h-full object-contain" 
      />
    </div>
  )}
  <div>
    <p className="text-[#00dcff] font-medium">{data.company}</p>
    <p className="text-gray-400 text-sm">{data.date}</p>
  </div>
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

            {(data.photo || data.certificate) && (
              <div className="grid grid-cols-2 gap-4">
                {data.photo && (
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
                )}
                
                {data.certificate?.image && (
                  <div className="relative group">
                    {data.certificate.link ? (
                      <a 
                        href={data.certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative overflow-hidden rounded-lg border border-[#00dcff] group-hover:border-[#00e187] transition-colors">
                          <img 
                            src={data.certificate.image} 
                            alt="Certificate" 
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#1c1c22] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center gap-2">
                            <Award className="text-[#00e187] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <LinkIcon className="text-[#00e187] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                          Certificate 
                          <LinkIcon size={12} className="text-[#00dcff]" />
                        </p>
                      </a>
                    ) : (
                      <>
                        <div className="relative overflow-hidden rounded-lg border border-[#00dcff] group-hover:border-[#00e187] transition-colors">
                          <img 
                            src={data.certificate.image} 
                            alt="Certificate" 
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#1c1c22] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                            <Award className="text-[#00e187] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">Certificate</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00dcff] rounded-full border-4 border-[#1c1c22] shadow hover:bg-[#00e187] transition-colors hidden md:block" />
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
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00dcff] hover:bg-[#00e187] transition-colors hidden md:block">
          <div className="absolute w-full h-full animate-pulse bg-[#1c1c22] mix-blend-overlay" />
        </div>

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
