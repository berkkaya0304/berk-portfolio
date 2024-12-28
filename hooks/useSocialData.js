import { useState, useCallback } from 'react';
import Papa from 'papaparse';

export const useSocialData = (csvData) => {
  const [data, setData] = useState([]);

  const parseData = useCallback(() => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, [csvData]);

  return { data, parseData };
}; 