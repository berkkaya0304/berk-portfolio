const ResumeItem = ({ item, type }) => {
  const renderContent = () => {
    switch (type) {
      case "experience":
      case "voluntarily":
        return (
          <>
            <span className="text-accent gap-[50px]">{item.duration}</span>
            <span className="text-accent">{item.time}</span>
            <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">
              {item.position}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="max-w-[370px] text-white/60">{item.company}</p>
            </div>
          </>
        );
      case "education":
        return (
          <>
            <span className="text-accent gap-[50px]">{item.duration}</span>
            <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">
              {item.degree}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.institution}</p>
            </div>
          </>
        );
      case "ambassador":
        return (
          <>
            <span className="text-accent gap-[50px]">{item.duration}</span>
            <span className="text-accent">{item.level}</span>
            <h3 className="text-xl max-w-[370px] min-h-[35px] text-center lg:text-left">
              {item.topic}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="max-w-[370px] text-white/60">{item.company}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-white/60 text-justify">{item.description}</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <li
      className={`bg-[#232329] min-w-[370px] ${type !== "ambassador" ? "h-[184px]" : ""} py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:item-start gap-2`}
    >
      {renderContent()}
    </li>
  );
};

export default ResumeItem;
