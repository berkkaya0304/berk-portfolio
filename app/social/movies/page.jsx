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

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const csvData = `Title,Director,Genre,Release Year,Duration (min),Watched?
"x","x",x,x,x,x
`;

    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        setMovies(results.data);
      },
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center space-x-2 mb-5">
        <Button variant="outline" onClick={() => router.push('/social')}>
          Back
        </Button>
        <span className="font-medium text-5xl text-center flex-1">Movie List</span>
      </div>
      <Table>
        <TableCaption>Movie List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Director</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Release Year</TableHead>
            <TableHead>Duration (min)</TableHead>
            <TableHead>Watched?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie, index) => (
            <TableRow key={index}>
              <TableCell>{movie.Title}</TableCell>
              <TableCell>{movie.Director}</TableCell>
              <TableCell>{movie.Genre}</TableCell>
              <TableCell>{movie['Release Year']}</TableCell>
              <TableCell>{movie['Duration (min)']}</TableCell>
              <TableCell>{movie.Watched}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MovieList;