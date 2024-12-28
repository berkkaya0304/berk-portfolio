"use client";

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ActivityList from '@/components/social/ActivityList';
import { theaterData, theaterColumns } from '@/data/social';

const TheaterList = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    Papa.parse(theaterData, {
      header: true,
      complete: (results) => {
        setTheaters(results.data);
      },
    });
  }, []);

  return (
    <ActivityList 
      title="Theater List" 
      data={theaters} 
      columns={theaterColumns}
    />
  );
};

export default TheaterList;