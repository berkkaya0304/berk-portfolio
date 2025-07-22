import { useLanguage } from "@/context/LanguageContext";
import Papa from "papaparse";

const ActivityList = ({ data, columns }) => {
  const { translations } = useLanguage();

  // Veriyi parse et ve fazladan tırnakları kaldır
  const parsedData =
    typeof data === "string"
      ? Papa.parse(data, {
          header: true,
          transform: (value) => value.replace(/^"|"$/g, ""), // Baştaki ve sondaki tırnakları kaldır
          skipEmptyLines: true,
        }).data
      : data;

  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-blue-400/20">
            {columns.map((column, index) => {
              if (column.field.endsWith("_TR")) return null;

              return (
                <th
                  key={index}
                  className="p-4 text-left text-xs font-medium text-blue-400 uppercase"
                >
                  <div className="flex flex-col">
                    <span>{translations.social.table[column.key]}</span>
                    <span className="text-blue-300/60 text-[10px]">
                      {column.key}
                    </span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {parsedData.map((item, index) => (
            <tr
              key={index}
              className="border-b border-blue-400/20 hover:bg-blue-400/5 transition-colors"
            >
              {columns.map((column, colIndex) => {
                if (column.field.endsWith("_TR")) return null;

                let content = item[column.field] || item[column.key];
                let contentTR =
                  item[`${column.field}_TR`] || item[`${column.key}_TR`];

                if (contentTR && contentTR !== content) {
                  content = `${content} / ${contentTR}`;
                }

                if (typeof content === "string" && content.length > 50) {
                  content = content.substring(0, 47) + "...";
                }

                return (
                  <td key={colIndex} className="p-4 text-sm text-blue-400/80">
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityList;
