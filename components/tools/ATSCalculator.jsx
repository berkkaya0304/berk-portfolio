"use client";

import { useState, useEffect, useRef, useMemo } from "react";
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
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Fallback categories in case CSV loading fails
const fallbackCategories = {
  "Software Engineer": {
    skills: ["programming", "code", "software", "development"],
    techSkills: ["javascript", "python", "java", "react"],
    description: "Software development and programming",
  },
  "Data Scientist": {
    skills: ["data", "analysis", "statistics"],
    techSkills: ["machine learning", "python", "sql"],
    description: "Data analysis and machine learning",
  },
};

const ATSCalculator = () => {
  const { translations } = useLanguage();
  const [file, setFile] = useState(null);
  const [scores, setScores] = useState({
    overall: null,
    tech: null,
    skills: null,
    berkScore: null,
    distribution: {
      tech: null,
      regular: null,
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState("");
  const [missingKeywords, setMissingKeywords] = useState({
    skills: [],
    techSkills: [],
  });
  const [matchedKeywords, setMatchedKeywords] = useState({
    skills: [],
    techSkills: [],
  });
  const [jobCategories, setJobCategories] = useState(fallbackCategories);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Memoize filtered jobs to prevent unnecessary recalculations
  const filteredJobs = useMemo(() => {
    if (!searchQuery.trim()) {
      return Object.entries(jobCategories);
    }

    const query = searchQuery.toLowerCase();
    return Object.entries(jobCategories).filter(([job, { description }]) => {
      return (
        job.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
      );
    });
  }, [jobCategories, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectOpenChange = (open) => {
    setIsSearchOpen(open);
    if (!open) {
      setSearchQuery("");
    } else {
      // Focus the search input after the select content is mounted
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 0);
    }
  };

  useEffect(() => {
    const loadJobCategories = async () => {
      try {
        setIsLoadingCategories(true);
        setError(null);
        console.log("Starting to fetch CSV files...");

        // Fetch both CSV files
        const [skillsResponse, techSkillsResponse] = await Promise.all([
          fetch("/data/csv/skills.csv"),
          fetch("/data/csv/Technology Skills.csv"),
        ]);

        if (!skillsResponse.ok || !techSkillsResponse.ok) {
          throw new Error("Failed to fetch CSV files");
        }

        const [skillsText, techSkillsText] = await Promise.all([
          skillsResponse.text(),
          techSkillsResponse.text(),
        ]);

        // Process Skills CSV
        const skillsLines = skillsText.split("\n");
        const skillsHeaders = skillsLines[0]
          .split(",")
          .map((h) => h.trim().replace(/^"|"$/g, ""));
        const titleIndex = skillsHeaders.findIndex((h) => h === "Title");
        const elementIndex = skillsHeaders.findIndex(
          (h) => h === "Element Name",
        );

        // Process Technology Skills CSV
        const techSkillsLines = techSkillsText.split("\n");
        const techSkillsHeaders = techSkillsLines[0]
          .split(",")
          .map((h) => h.trim().replace(/^"|"$/g, ""));
        const techTitleIndex = techSkillsHeaders.findIndex(
          (h) => h === "Title",
        );
        const exampleIndex = techSkillsHeaders.findIndex(
          (h) => h === "Example",
        );
        const commodityTitleIndex = techSkillsHeaders.findIndex(
          (h) => h === "Commodity Title",
        );

        const categories = {};

        // Process Skills data
        for (let i = 1; i < skillsLines.length; i++) {
          const line = skillsLines[i].trim();
          if (!line) continue;

          const row = line
            .split(",")
            .map((cell) => cell.trim().replace(/^"|"$/g, ""));
          if (row[titleIndex]) {
            const title = row[titleIndex];
            const element = row[elementIndex] || "";

            if (!categories[title]) {
              categories[title] = {
                skills: [],
                techSkills: [],
                description: `${title} skills and expertise`,
              };
            }

            if (element && !categories[title].skills.includes(element)) {
              categories[title].skills.push(element);
            }
          }
        }

        // Process Technology Skills data
        for (let i = 1; i < techSkillsLines.length; i++) {
          const line = techSkillsLines[i].trim();
          if (!line) continue;

          const row = line
            .split(",")
            .map((cell) => cell.trim().replace(/^"|"$/g, ""));
          if (row[techTitleIndex]) {
            const title = row[techTitleIndex];
            const example = row[exampleIndex] || "";
            const commodityTitle = row[commodityTitleIndex] || "";

            if (!categories[title]) {
              categories[title] = {
                skills: [],
                techSkills: [],
                description: `${title} technical skills and expertise`,
              };
            }

            if (example && !categories[title].techSkills.includes(example)) {
              categories[title].techSkills.push(example);
            }
            if (
              commodityTitle &&
              !categories[title].techSkills.includes(commodityTitle)
            ) {
              categories[title].techSkills.push(commodityTitle);
            }
          }
        }

        console.log("Setting job categories from CSV");
        setJobCategories(categories);
      } catch (error) {
        console.error("Error loading job categories:", error);
        setError(error.message);
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

    const { skills, techSkills } = jobCategories[selectedJob];
    const matched = { skills: [], techSkills: [] };
    const missing = { skills: [], techSkills: [] };

    // Check skills matches
    for (const skill of skills) {
      if (text.includes(skill.toLowerCase())) {
        matched.skills.push(skill);
      } else {
        missing.skills.push(skill);
      }
    }

    // Check tech skills matches
    for (const techSkill of techSkills) {
      if (text.includes(techSkill.toLowerCase())) {
        matched.techSkills.push(techSkill);
      } else {
        missing.techSkills.push(techSkill);
      }
    }

    // Calculate different scores
    const techScore = Math.round(
      (matched.techSkills.length / techSkills.length) * 100,
    );
    const skillsScore = Math.round(
      (matched.skills.length / skills.length) * 100,
    );
    const overallScore = Math.round(
      ((matched.techSkills.length + matched.skills.length) /
        (techSkills.length + skills.length)) *
        100,
    );

    // Calculate Berk's Special Score (1000 points max)
    // Base points
    const baseTechPoints = matched.techSkills.length * 30; // 30 points per tech skill
    const baseSkillPoints = matched.skills.length * 15; // 15 points per regular skill

    // Bonus points for high match rates
    const techMatchRate = matched.techSkills.length / techSkills.length;
    const skillMatchRate = matched.skills.length / skills.length;

    const techBonus =
      techMatchRate >= 0.8
        ? 200 // 80% or more tech skills matched
        : techMatchRate >= 0.6
          ? 100 // 60% or more tech skills matched
          : techMatchRate >= 0.4
            ? 50
            : 0; // 40% or more tech skills matched

    const skillBonus =
      skillMatchRate >= 0.8
        ? 100 // 80% or more skills matched
        : skillMatchRate >= 0.6
          ? 50 // 60% or more skills matched
          : skillMatchRate >= 0.4
            ? 25
            : 0; // 40% or more skills matched

    // Calculate final score with bonuses
    const berkScore = Math.min(
      baseTechPoints + baseSkillPoints + techBonus + skillBonus,
      1000,
    );

    // Calculate skill distribution
    const skillDistribution = {
      tech: Math.round(
        (matched.techSkills.length /
          (matched.techSkills.length + matched.skills.length)) *
          100,
      ),
      regular: Math.round(
        (matched.skills.length /
          (matched.techSkills.length + matched.skills.length)) *
          100,
      ),
    };

    return {
      scores: {
        overall: overallScore,
        tech: techScore,
        skills: skillsScore,
        berkScore: berkScore,
        distribution: skillDistribution,
      },
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

      setScores(analysis.scores);
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
            <Select
              onValueChange={setSelectedJob}
              value={selectedJob}
              onOpenChange={handleSelectOpenChange}
            >
              <SelectTrigger className="w-full bg-slate-800/50 border-blue-400/20">
                <SelectValue placeholder="Select a job role" />
              </SelectTrigger>
              <SelectContent>
                {isSearchOpen && (
                  <div className="flex items-center px-3 pb-2 sticky top-0 bg-slate-900/95 z-10 w-full">
                    <Search className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                    <Input
                      ref={searchInputRef}
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="bg-slate-800/50 border-blue-400/20 text-blue-400 w-full"
                    />
                  </div>
                )}
                <div className="max-h-[300px] overflow-y-auto">
                  {filteredJobs.map(([job, { description }]) => (
                    <SelectItem key={job} value={job}>
                      <div className="flex flex-col">
                        <span>{job}</span>
                        <span className="text-xs text-blue-400/70">
                          {description}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                  {filteredJobs.length === 0 && (
                    <div className="px-3 py-2 text-sm text-blue-400/70">
                      No jobs found matching "{searchQuery}"
                    </div>
                  )}
                </div>
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
      {scores.overall !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-slate-900/50 border border-blue-400/20">
            <CardContent className="p-6">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-center text-blue-400">
                  {translations.tools.atsCalculator.results.title}
                </h3>
                <div className="flex flex-col items-center space-y-6">
                  {/* Overall Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400">
                      Overall Match
                    </h4>
                    <Progress value={scores.overall} className="h-4" />
                    <div className="text-2xl font-bold text-blue-400 text-center">
                      {scores.overall}%
                    </div>
                  </div>

                  {/* Tech Skills Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400">
                      Technical Skills Match
                    </h4>
                    <Progress value={scores.tech} className="h-4" />
                    <div className="text-2xl font-bold text-blue-400 text-center">
                      {scores.tech}%
                    </div>
                  </div>

                  {/* Regular Skills Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400">
                      Skills Match
                    </h4>
                    <Progress value={scores.skills} className="h-4" />
                    <div className="text-2xl font-bold text-blue-400 text-center">
                      {scores.skills}%
                    </div>
                  </div>

                  {/* Berk's Special Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-lg font-semibold text-blue-400 flex items-center justify-center gap-2">
                      <span>Berk's Special Score</span>
                      <span className="text-yellow-400">®</span>
                    </h4>
                    <Progress
                      value={(scores.berkScore / 1000) * 100}
                      className="h-4"
                    />
                    <div className="text-2xl font-bold text-yellow-400 text-center">
                      {scores.berkScore}/1000
                    </div>
                    <div className="text-sm text-blue-400/70 space-y-2">
                      <p className="text-center">
                        ® This score is a proprietary algorithm developed by
                        Berk. It is not a traditional score and is not
                        comparable to other scores.
                      </p>
                    </div>
                  </div>

                  <div className="text-lg text-blue-400/70">
                    Match for: {selectedJob}
                  </div>

                  {/* Skills Analysis */}
                  <div className="w-full max-w-md space-y-4">
                    <h4 className="text-xl font-semibold text-blue-400">
                      Skills Analysis
                    </h4>

                    {/* Matched Skills */}
                    {matchedKeywords.skills.length > 0 && (
                      <div>
                        <h5 className="text-blue-400 mb-2">Matched Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {matchedKeywords.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Missing Skills */}
                    {missingKeywords.skills.length > 0 && (
                      <div>
                        <h5 className="text-blue-400 mb-2">Missing Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {missingKeywords.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-red-500/20 text-red-400 rounded-md text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technology Skills Analysis */}
                  <div className="w-full max-w-md space-y-4">
                    <h4 className="text-xl font-semibold text-blue-400">
                      Technology Skills Analysis
                    </h4>

                    {/* Matched Tech Skills */}
                    {matchedKeywords.techSkills.length > 0 && (
                      <div>
                        <h5 className="text-blue-400 mb-2">
                          Matched Technology Skills:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {matchedKeywords.techSkills.map((techSkill) => (
                            <span
                              key={techSkill}
                              className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-sm"
                            >
                              {techSkill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Missing Tech Skills */}
                    {missingKeywords.techSkills.length > 0 && (
                      <div>
                        <h5 className="text-blue-400 mb-2">
                          Missing Technology Skills:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {missingKeywords.techSkills.map((techSkill) => (
                            <span
                              key={techSkill}
                              className="px-2 py-1 bg-red-500/20 text-red-400 rounded-md text-sm"
                            >
                              {techSkill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-center text-blue-400/70">
                    {scores.overall >= 80
                      ? translations.tools.atsCalculator.results.excellent
                      : scores.overall >= 60
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
