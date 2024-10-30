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
  {
    id: 3,
    title: "Huawei Coding Marathon'24",
    company: "Huawei",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png",
    date: "September 2024",
    description: "Made a Coding Project about SDG 12",
    skills: ["Coding","Project Management"],
    photo: "https://media.licdn.com/dms/image/v2/D4D22AQFIc_R7llGhLQ/feedshare-shrink_800/feedshare-shrink_800/0/1728830298187?e=1733356800&v=beta&t=c4CEA7VLbQwHcwwPCPH1eSI0_jjpv5XkLE3_MVR4U2c",
  },
  {
    id: 4,
    title: "Defence Industry 401",
    company: "Secretariat of Defence Industries",
    companyLogo: "https://cdn.sahaexpo.com/firmalogolari/t.c-cumhurbaskanligi-savunma-sanayii-baskanligi-1.png",
    date: "September 2024",
    description: "Getting info about Defence Industry in Turkiye",
    skills: ["Defence Industry"],
    photo: "https://media.licdn.com/dms/image/v2/D4D22AQF-Bm75vnLmRw/feedshare-shrink_800/feedshare-shrink_800/0/1727885588327?e=1733356800&v=beta&t=V-O3G4l2_8nj9MpCuLFL6UhtNzGUmVcNYJVVH7cm3mU",
  },
  {
    id: 5,
    title: "Aselsan Work Life 101",
    company: "Aselsan",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3x0m241kuaHncvJjWl4GVXe-FaLk6Khkr3Q&s",
    date: "March 2024 - June 2024",
    description: "Learning new things about work life",
    skills: ["Work Life","Defence Industry"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQHVuwDzCV7v9g/feedshare-shrink_800/feedshare-shrink_800/0/1725866820299?e=1733356800&v=beta&t=LkCGD8FSHNgbhX-g6jSqTdAgg70Jj6cDKG2tZ5S3ckI",
      link: "https://www.linkedin.com/posts/berkkaya_business-life-iaovagn-activity-7239316755058180097-n8Qg?utm_source=share&utm_medium=member_desktop"
    }
  },
  {
    id: 6,
    title: "Seeds for the Future Italy'24",
    company: "Huawei",
    companyLogo: "https://www.huawei-university.com/wp-content/uploads/2023/06/SFTF23_Logo_Color_FINAL-1.png",
    date: "August 2024",
    description: "Tech 4 Good Competition Europe Grand Final",
    skills: ["Social Entreneurship"],
    photo: "https://media.licdn.com/dms/image/v2/D4D22AQFuoWmaEeLw7w/feedshare-shrink_800/feedshare-shrink_800/0/1725137265148?e=1733356800&v=beta&t=NSEKX5sd-ab07xq4j0G2bLnnWtwmatoBW1WkVahmlTI",
    certificate: {
      image: "https://i.ibb.co/2q33TgB/temp-image-20240710-084701-e634ac69-1ae9-455c-b16b-97a040ce0825.webp",
      link: ""
    }
  },
  {
    id: 7,
    title: "Take A Step Forward Program",
    company: "McKinsey & Company",
    companyLogo: "https://cdn.cookielaw.org/logos/353d36fb-3a1c-4021-b831-ee6d50361d6a/07a8989e-cba1-4f60-a67a-0ffe9efc1b3a/5705935c-c99f-48d8-8aef-b78127f4aed3/mckinsey---company_owler_20190728_090718_original.png",
    date: "November 2023 - April 2024",
    description: "The Take A Step Forward Program is a 6-month fully-funded virtual program designed to gain the skills and experience they need to succeed in business.",
    skills: ["Business"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH3F-f71dVXGQ/feedshare-shrink_800/feedshare-shrink_800/0/1713619492433?e=1733356800&v=beta&t=x3_gwOGjiE-1NGkEfYiZTL3xP2aWWxjIvbZibP22WZ4",
      link: "https://www.linkedin.com/posts/berkkaya_learning-skills-mckinseyforward-activity-7187441096853962753-PDCg?utm_source=share&utm_medium=member_desktop"
    }
  },
  {
    id: 8,
    title: "AWS AI&ML Scholarship",
    company: "Amazon Web Services",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcTsWxmjnaDjIOU4KrGplw49J5T1uniI3meL5qAdxyPmU0XPsxodHxDlnbSmKcT8cOKM&usqp=CAU",
    date: "June 2024 - August 2024",
    description: "This course will support me in the future, especially to be prepared for the emerging trends in the artificial intelligence and to recognize the new opportunities that will arise in the face of artificial intelligence.",
    skills: ["Artificial Intelligence","Machine Learning"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQFFgaS2DnxNqw/feedshare-shrink_800/feedshare-shrink_800/0/1718787912958?e=1733356800&v=beta&t=KEzrZssxWsV6pnB7hw36wWsR5LVrWiNlJFstGUtFCQ0",
      link: "https://www.linkedin.com/posts/berkkaya_aws-awsai-udacity-activity-7209119024759111682-hwiO?utm_source=share&utm_medium=member_desktop"
    }
  },
  {
    id: 9,
    title: "Certified Associate Project Management (CAPM) Program",
    company: "Project Management Institute",
    companyLogo: "https://iakademi.com/wp-content/uploads/2020/10/pmi_logo_ogShare.png",
    date: "December 2023",
    description: "The program was led by experienced instructors who have shared their extensive expertise in project management. Their guidance and practical examples have been incredibly helpful in helping me understand the concepts effectively. They have also provided valuable tips and strategies to prepare us for the CAPM exam.",
    skills: ["Project Management"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQFIf5Fdcih42g/feedshare-shrink_800/feedshare-shrink_800/0/1706209574609?e=1733356800&v=beta&t=lETA_GtQDSfnESkEoSH7Jlfy-6eo4MiDo844WdO5x78",
      link: "https://www.linkedin.com/posts/berkkaya_projectmanagement-project-pmi-activity-7156361650042724352-izHE?utm_source=share&utm_medium=member_desktop"
    }
  },
  {
    id: 10,
    title: "Game & Technology Academy",
    company: "Google",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7bUjoYHfD25CGLVLjfHa5Dco_FOHT6E2WQ&s",
    date: "December 2022 - July 2023",
    description: " This journey has been an incredible opportunity for me to delve into the world of game development and application design, honing my skills and gaining valuable insights from industry experts.",
    skills: ["Game Development","Unity","App Development","Flutter"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQENTR0YnfJVmw/feedshare-shrink_800/feedshare-shrink_800/0/1692299241965?e=1733356800&v=beta&t=DDmjCorXIk6Hl0xLEFOFoHg7a5A0cUfabHB_HApx74M",
      link: "https://www.linkedin.com/posts/berkkaya_gameandappacademygrad-game-application-activity-7098017482979852288--sOx?utm_source=share&utm_medium=member_desktop"
    }
  },
  {
    id: 11,
    title: "Software Engineering Virtual Experience Program",
    company: "Electronic Arts",
    companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQFIoKZ7KHZDkQ/company-logo_200_200/company-logo_200_200/0/1727295642406/electronic_arts_logo?e=2147483647&v=beta&t=ZI_u62-8EiPwHxaPo1kM4WZep1orDgFpe0UyyPwwf-o",
    date: "July 2023",
    description: " I had the chance to learn in-depth about many facets of software engineering and acquire experience working on actual problems throughout this rigorous program.",
    skills: ["Software Engineering"],
    photo: "",
    certificate: {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGjnZFCSJ7BqA/feedshare-shrink_800/feedshare-shrink_800/0/1688328351775?e=1733356800&v=beta&t=zCYpzYskgmLB0Mo3VaNhNiVl_OMPpwsVieV1l7K_p4s",
      link: "https://www.linkedin.com/posts/berkkaya_softwareengineering-virtualprogram-careerdevelopment-activity-7081362365123878912-fYka?utm_source=share&utm_medium=member_desktop"
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
      <h2 className="text-4xl font-extrabold text-center mb-10 text-white tracking-wide">Programs That I Attended</h2>
      
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
