"use client";

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

const TheaterList = () => {
  const [theaters, setTheaters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const csvData = `Name,Location,Capacity,Last Visit Date,Performance Watched,Rating
"x","x, x",x,"x, x","x",x
`;

    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        setTheaters(results.data);
      },
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center space-x-2 mb-5">
        <Button variant="outline" onClick={() => router.push('/social')}>
          Back
        </Button>
        <span className="font-medium text-5xl text-center flex-1">Theater List</span>
      </div>
      <Table>
        <TableCaption>Theater List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Last Visit Date</TableHead>
            <TableHead>Performance Watched</TableHead>
            <TableHead>Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {theaters.map((theater, index) => (
            <TableRow key={index}>
              <TableCell>{theater.Name}</TableCell>
              <TableCell>{theater.Location}</TableCell>
              <TableCell>{theater.Capacity}</TableCell>
              <TableCell>{theater['Last Visit Date']}</TableCell>
              <TableCell>{theater['Performance Watched']}</TableCell>
              <TableCell>{theater.Rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TheaterList;