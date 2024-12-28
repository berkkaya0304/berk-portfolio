import { ScrollArea } from "@/components/ui/scroll-area";
import ResumeItem from "./ResumeItem";

const ResumeGrid = ({ items, type, columns = "lg:grid-cols-2" }) => {
  return (
    <ScrollArea>
      <ul className={`grid grid-cols-1 ${columns} gap-[30px]`}>
        {items.map((item, index) => (
          <ResumeItem key={index} item={item} type={type} />
        ))}
      </ul>
    </ScrollArea>
  );
};

export default ResumeGrid; 