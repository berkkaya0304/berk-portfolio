import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const ActivityList = ({ title, data, columns }) => {
  const router = useRouter();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10"
    >
      <div className="flex items-center space-x-2 mb-5">
        <Button variant="outline" onClick={() => router.push('/social')}>
          Back
        </Button>
        <span className="font-medium text-5xl text-center flex-1">{title}</span>
      </div>
      <div className="bg-[#27272c] rounded-xl p-6">
        <Table>
          <TableCaption>{title}</TableCaption>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index} className="text-accent">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className="hover:bg-[#1c1c22] transition-colors">
                {Object.values(item).map((value, valueIndex) => (
                  <TableCell key={valueIndex} className="text-white/80">
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default ActivityList; 