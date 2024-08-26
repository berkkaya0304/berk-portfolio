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

const BookList = () => {
  const [books, setBooks] = useState([]);
  const router = useRouter();


  useEffect(() => {
    const csvData = `Title,Author,Genre,Read Date,Number of Pages,Completed?
"The Psychology of Emotions","Nevzat Tarhan",Self-Help,"November 1, 2021",240,Yes
"Reformat Your Mind in 21 Days","Debbie Ford",Self-Help,"November 1, 2021",190,Yes
"Feynman's Lost Lecture","David L. GoodStein",Science,"November 1, 2021",182,Yes
"A Whack on the Side of the Head","Roger Von Oech",Self-Help,"December 1, 2021",280,Yes
"Artificial Intelligence","İsmail Hakkı Aydın",Computer Science,"December 1, 2021",285,Yes
"Your Brain 2.0","İsmail Hakkı Aydın",Science,"December 1, 2021",264,Yes
"The Time Machine","H. G. Wells",English,"December 1, 2021",80,Yes
"Business Skills","Douglas Davis",Social Sciences,"December 1, 2021",232,Yes
"The 100 Most Influential Scientists","Jon Balchin","Science, Social Sciences","January 1, 2022",432,Yes
"A Short History of Nearly Everything","Bill Bryson",Social Sciences,"January 1, 2022",518,Yes
"The Creative Species","David Eagleman & Anthony Brandt",Science,"February 1, 2022",304,Yes
"Nuclear Power Wars","Selim Sunal",Social Sciences,"February 1, 2022",216,Yes
"Group Psychology","Sigmund Freud",Social Sciences,"February 1, 2022",142,Yes
"Brilliant Blunders","Mario Livio",Social Sciences,"February 1, 2022",328,Yes
"Elon Musk","Ashlee Vance",Biography,"February 1, 2022",455,Yes
"100 Psychological Assumptions","Jana Nikitin & Marie Hennecke",Social Sciences,"February 1, 2022",272,Yes
"Systematic Thinking","Steven Schuster",Social Sciences,"February 1, 2022",176,Yes
"Be 100% Yourself","Matthew Kelly",Social Sciences,"March 1, 2022",288,Yes
"Artificial Intelligence at Work","Bernard Marr & Matt Ward",Computer Science,"March 1, 2022",348,Yes
"Genetics 101","Beth Skwarecki",Science,"March 1, 2022",232,Yes
"Speed Reading with Comprehension","Yaprak Baran Tecir & Gülyan Kabaş",Social Sciences,"March 1, 2022",247,Yes
"Utopia","Thomas More",Social Sciences,"April 1, 2022",160,Yes
"The Meaning and Purpose of Life","Alfred Adler",Social Sciences,"April 1, 2022",293,Yes
"Artificial Intelligence: 101 Things You Need to Know About Our Future","Lasse Rouhiainen",Computer Science,"May 1, 2022",317,Yes
"How to Live a Life","İlber Ortaylı",Biography,"July 1, 2022",285,Yes
"The Social Contract","Jean Jacques Rousseau",Social Sciences,"August 1, 2022",136,Yes
"The Book of Mistakes","Skip Prichard",Self-Help,"August 1, 2022",187,Yes
"Rich Dad Poor Dad","Robert Kiyosaki",Personal Finance,"September 1, 2022",396,Yes
"Personal Development","Feyzullah Budak",Self-Help,"September 1, 2022",272,Yes
"Atomic Habits","James Clear",Self-Help,"February 1, 2023",341,Yes
"Outliers","Malcolm Gladwell",Self-Help,"February 1, 2023",244,Yes
"The Art of Saying No","Müthiş Psikoloji",Self-Help,"March 1, 2023",173,Yes
"Body Language","Joe Navarro & Marvin Karlins",Self-Help,"July 1, 2023",300,Yes
"Emotional Intelligence and Leadership","Daniel Goleman",Self-Help,"March 1, 2024",159,Yes
"Small Things, Big Freedoms","Mert Başaran",Personal Finance,"May 1, 2024",194,Yes
"Think and Grow Rich","Napoleon Hill","Personal Finance, Social Sciences","June 19, 2024",226,Yes
"You Are a Badass at Making Money","Jen Sincero",Personal Finance,"August 15, 2024",240,Yes
"Building a Brand","Donald Miller","Self-Help, Social Sciences","August 25, 2024",222,Yes
`;

    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        setBooks(results.data);
      },
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center space-x-2 mb-5">
  <Button variant="outline" onClick={() => router.push('/social')}>
    Back
  </Button>
  <span className="font-medium text-5xl text-center flex-1">Book List</span>
</div>
      <Table>
        <TableCaption>Book List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Read Date</TableHead>
            <TableHead>Number of Pages</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{book.Title}</TableCell>
              <TableCell>{book.Author}</TableCell>
              <TableCell>{book.Genre}</TableCell>
              <TableCell>{book['Read Date']}</TableCell>
              <TableCell>{book['Number of Pages']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookList;