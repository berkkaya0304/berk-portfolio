"use client";

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ActivityList from '@/components/social/ActivityList';
import { bookData, bookColumns } from '@/data/social';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Papa.parse(bookData, {
      header: true,
      complete: (results) => {
        setBooks(results.data);
      },
    });
  }, []);

  return (
    <ActivityList 
      title="Book List" 
      data={books} 
      columns={bookColumns}
    />
  );
};

export default BookList;