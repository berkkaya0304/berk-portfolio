"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Fallback categories in case CSV loading fails
const fallbackCategories = {
  "Software Engineer": {
    keywords: [
      "programming",
      "code",
      "software",
      "development",
      "javascript",
      "python",
      "java",
      "react",
    ],
    description: "Software development and programming",
  },
  "Data Scientist": {
    keywords: [
      "data",
      "analysis",
      "machine learning",
      "python",
      "statistics",
      "sql",
    ],
    description: "Data analysis and machine learning",
  },
};

const ATSCalculator = () => {
  const { translations } = useLanguage();
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState("");
  const [missingKeywords, setMissingKeywords] = useState([]);
  const [matchedKeywords, setMatchedKeywords] = useState([]);
  const [jobCategories, setJobCategories] = useState(fallbackCategories);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    const loadJobCategories = async () => {
      try {
        setIsLoadingCategories(true);
        console.log("Fetching CSV file...");

        const response = await fetch("/data/csv/skills.csv");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("CSV file fetched, parsing data...");
        const csvText = await response.text();

        // Parse CSV in chunks
        const lines = csvText.split("\n");
        const headers = lines[0].split(",").map((h) => h.trim());

        console.log("Headers:", headers);

        const titleIndex = headers.findIndex((h) =>
          h.toLowerCase().includes("title"),
        );
        const skillIndex = headers.findIndex((h) =>
          h.toLowerCase().includes("skill"),
        );

        console.log("Column indices:", { titleIndex, skillIndex });

        if (titleIndex === -1 || skillIndex === -1) {
          throw new Error("Required columns not found in CSV");
        }

        // Process data in chunks
        const categories = {};
        const chunkSize = 1000; // Process 1000 lines at a time

        for (let i = 1; i < lines.length; i += chunkSize) {
          const chunk = lines.slice(i, i + chunkSize);

          for (const line of chunk) {
            const row = line.split(",").map((cell) => cell.trim());
            if (row[titleIndex] && row[skillIndex]) {
              const title = row[titleIndex];
              const skill = row[skillIndex];

              if (!categories[title]) {
                categories[title] = {
                  keywords: [],
                  description: `${title} related skills and expertise`,
                };
              }

              if (skill && !categories[title].keywords.includes(skill)) {
                categories[title].keywords.push(skill);
              }
            }
          }
        }

        console.log("Processed categories:", Object.keys(categories));

        if (Object.keys(categories).length === 0) {
          console.log("No categories found, using fallback");
          setJobCategories(fallbackCategories);
        } else {
          setJobCategories(categories);
        }
      } catch (error) {
        console.error("Error loading job categories:", error);
        setJobCategories(fallbackCategories);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    loadJobCategories();
  }, []);

  const readPDFContent = async (file) => {
    try {
      if (file.size > 10 * 1024 * 1024) {
        throw new Error(translations.tools.atsCalculator.errors.fileTooLarge);
      }

      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = async (event) => {
          try {
            const text = event.target.result;
            if (!text.trim()) {
              reject(
                new Error(
                  translations.tools.atsCalculator.errors.noTextContent,
                ),
              );
              return;
            }
            resolve(text.toLowerCase());
          } catch (error) {
            reject(error);
          }
        };

        reader.onerror = () => {
          reject(
            new Error(translations.tools.atsCalculator.errors.pdfReadError),
          );
        };

        reader.readAsText(file);
      });
    } catch (error) {
      console.error("Error reading PDF:", error);
      throw new Error(
        error.message || translations.tools.atsCalculator.errors.pdfReadError,
      );
    }
  };

  const analyzeJobMatch = (text) => {
    if (!selectedJob || !jobCategories[selectedJob]) {
      throw new Error("Please select a job category first");
    }

    const keywords = jobCategories[selectedJob].keywords;
    const matched = [];
    const missing = [];

    for (const keyword of keywords) {
      if (text.includes(keyword.toLowerCase())) {
        matched.push(keyword);
      } else {
        missing.push(keyword);
      }
    }

    const score = Math.round((matched.length / keywords.length) * 100);

    return {
      score,
      matched,
      missing,
    };
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError(null);
    } else {
      setError(translations.tools.atsCalculator.errors.pdfOnly);
      setFile(null);
    }
  };

  const calculateATSScore = async () => {
    if (!selectedJob) {
      setError("Please select a job category first");
      return;
    }

    if (!file) {
      setError(translations.tools.atsCalculator.errors.selectFile);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const text = await readPDFContent(file);
      const analysis = analyzeJobMatch(text);

      setScore(analysis.score);
      setMatchedKeywords(analysis.matched);
      setMissingKeywords(analysis.missing);
    } catch (err) {
      setError(
        err.message || translations.tools.atsCalculator.errors.calculationError,
      );
    } finally {
      setLoading(false);
    }
  };

  if (isLoadingCategories) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-blue-400">Loading job categories...</div>
      </div>
    );
  }

  if (error && !file) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Title and Description */}
      <div className="text-center relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-700/20 blur-[100px] -z-10" />
        <h2 className="text-3xl font-bold mb-3 inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
            {translations.tools.atsCalculator.title}
          </span>
        </h2>
        <p className="text-blue-400/70 max-w-2xl mx-auto text-base">
          {translations.tools.atsCalculator.description}
        </p>
      </div>

      {/* Job Selection */}
      <Card className="bg-slate-900/50 border border-blue-400/20">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="text-center text-blue-400 mb-4">
              Select your target job role
            </div>
            <Select onValueChange={setSelectedJob} value={selectedJob}>
              <SelectTrigger className="w-full bg-slate-800/50 border-blue-400/20">
                <SelectValue placeholder="Select a job role" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(jobCategories).map(([job, { description }]) => (
                  <SelectItem key={job} value={job}>
                    <div className="flex flex-col">
                      <span>{job}</span>
                      <span className="text-xs text-blue-400/70">
                        {description}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Upload Section */}
      <Card className="bg-slate-900/50 border border-blue-400/20">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center w-full">
              <label
                htmlFor="cv-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-400/20 border-dashed rounded-lg cursor-pointer bg-slate-800/50 hover:bg-slate-800/70"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-blue-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-blue-400">
                    <span className="font-semibold">
                      {translations.tools.atsCalculator.upload.dragAndDrop}
                    </span>
                  </p>
                  <p className="text-xs text-blue-400/70">
                    {translations.tools.atsCalculator.upload.pdfOnly}
                  </p>
                </div>
                <input
                  id="cv-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {file && (
              <div className="text-center text-blue-400">
                {translations.tools.atsCalculator.upload.selectedFile}{" "}
                {file.name}
              </div>
            )}

            {error && <div className="text-center text-red-400">{error}</div>}

            <div className="flex justify-center">
              <Button
                onClick={calculateATSScore}
                disabled={!file || !selectedJob || loading}
                className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:from-blue-500 hover:to-blue-800 transition-all duration-300"
              >
                {loading
                  ? translations.tools.atsCalculator.upload.calculating
                  : translations.tools.atsCalculator.upload.calculate}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {score !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-slate-900/50 border border-blue-400/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center text-blue-400">
                  {translations.tools.atsCalculator.results.title}
                </h3>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full max-w-md">
                    <Progress value={score} className="h-4" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400">
                    {score}%
                  </div>
                  <div className="text-lg text-blue-400/70">
                    Match for: {selectedJob}
                  </div>

                  {/* Matched Keywords */}
                  {matchedKeywords.length > 0 && (
                    <div className="w-full max-w-md">
                      <h4 className="text-blue-400 mb-2">Matched Keywords:</h4>
                      <div className="flex flex-wrap gap-2">
                        {matchedKeywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Missing Keywords */}
                  {missingKeywords.length > 0 && (
                    <div className="w-full max-w-md">
                      <h4 className="text-blue-400 mb-2">Missing Keywords:</h4>
                      <div className="flex flex-wrap gap-2">
                        {missingKeywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 bg-red-500/20 text-red-400 rounded-md text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-center text-blue-400/70">
                    {score >= 80
                      ? translations.tools.atsCalculator.results.excellent
                      : score >= 60
                        ? translations.tools.atsCalculator.results.good
                        : translations.tools.atsCalculator.results
                            .needsImprovement}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default ATSCalculator;
