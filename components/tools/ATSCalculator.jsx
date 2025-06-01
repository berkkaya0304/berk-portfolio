"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
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
    format: null,
    experience: null,
    language: null,
    distribution: {
      tech: null,
      regular: null,
    },
    formatAnalysis: {
      score: 0,
      issues: [],
      suggestions: [],
    },
    experienceAnalysis: {
      score: 0,
      issues: [],
      suggestions: [],
      experienceDetails: {
        totalExperience: 0,
        gaps: [],
        progression: true,
      },
    },
    languageAnalysis: {
      score: 0,
      issues: [],
      suggestions: [],
      languageDetails: {
        actionVerbs: [],
        passiveVoice: 0,
        technicalTerms: [],
      },
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
  const debounceTimeoutRef = useRef(null);

  // Memoize filtered jobs to prevent unnecessary recalculations
  const filteredJobs = useMemo(() => {
    if (!searchQuery.trim()) {
      return Object.entries(jobCategories).slice(0, 50); // Limit initial results
    }

    const query = searchQuery.toLowerCase();
    const results = Object.entries(jobCategories)
      .filter(([job, { description }]) => {
        return (
          job.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query)
        );
      })
      .slice(0, 50); // Limit search results

    return results;
  }, [jobCategories, searchQuery]);

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchQuery(value); // Update immediately for UI responsiveness

    // Clear any existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout for filtering
    debounceTimeoutRef.current = setTimeout(() => {
      // Additional filtering logic can go here if needed
    }, 150); // Reduced debounce time to 150ms
  }, []);

  const handleSelectOpenChange = useCallback((open) => {
    setIsSearchOpen(open);
    if (!open) {
      setSearchQuery("");
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    } else {
      // Focus the search input after the select content is mounted
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 0);
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

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

    // Check for required CV sections
    const requiredSections = [
      "education",
      "experience",
      "skills",
      "certifications",
      "projects",
      "languages",
    ];

    let sectionBonus = 0;
    for (const section of requiredSections) {
      if (text.toLowerCase().includes(section)) {
        sectionBonus += 50; // 50 points for each required section
      }
    }

    // Count work experiences
    const workExperienceCount = (
      text.match(/experience|work|job|employment/gi) || []
    ).length;
    const workExperienceBonus = workExperienceCount > 2 ? 100 : 0; // 100 points for more than 2 work experiences

    // Count certifications
    const certificationCount = (
      text.match(/certification|certificate|certified/gi) || []
    ).length;
    const certificationBonus = certificationCount > 5 ? 50 : 0; // 50 points for more than 5 certifications

    // CV Format Analysis
    const formatAnalysis = analyzeCVFormat(text);
    const formatScore = Math.max(0, formatAnalysis.score); // Ensure non-negative

    // Detailed Experience Analysis
    const experienceAnalysis = analyzeExperience(text);
    const experienceScore = Math.max(0, experienceAnalysis.score); // Ensure non-negative

    // Language Analysis
    const languageAnalysis = analyzeLanguage(text);
    const languageScore = Math.max(0, languageAnalysis.score); // Ensure non-negative

    // Calculate final score with all bonuses
    const berkScore = Math.min(
      Math.max(
        0, // Ensure non-negative
        baseTechPoints +
          baseSkillPoints +
          techBonus +
          skillBonus +
          sectionBonus +
          workExperienceBonus +
          certificationBonus +
          formatScore +
          experienceScore +
          languageScore,
      ),
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
        format: formatScore,
        experience: experienceScore,
        language: languageScore,
        distribution: skillDistribution,
        formatAnalysis: formatAnalysis,
        experienceAnalysis: experienceAnalysis,
        languageAnalysis: languageAnalysis,
      },
      matched,
      missing,
    };
  };

  // CV Format Analysis Function
  const analyzeCVFormat = (text) => {
    const analysis = {
      score: 0,
      issues: [],
      suggestions: [],
    };

    // Check for consistent formatting
    const hasConsistentHeadings = /^(#|\*|\-|\d+\.)\s+.+$/gm.test(text);
    const hasConsistentSpacing = !/\n{3,}/.test(text);
    const hasConsistentBullets = /^(\*|\-|\•|\d+\.)\s+.+$/gm.test(text);

    // Check for professional structure
    const hasProfessionalStructure =
      /^(summary|profile|objective|experience|education|skills|certifications|projects|languages)/gim.test(
        text,
      );

    // Calculate format score
    if (hasConsistentHeadings) analysis.score += 50;
    if (hasConsistentSpacing) analysis.score += 25;
    if (hasConsistentBullets) analysis.score += 25;
    if (hasProfessionalStructure) analysis.score += 50;

    // Add issues and suggestions
    if (!hasConsistentHeadings) {
      analysis.issues.push("Inconsistent heading format");
      analysis.suggestions.push(
        "Use consistent heading styles throughout the CV",
      );
    }
    if (!hasConsistentSpacing) {
      analysis.issues.push("Inconsistent spacing");
      analysis.suggestions.push("Maintain consistent spacing between sections");
    }
    if (!hasConsistentBullets) {
      analysis.issues.push("Inconsistent bullet points");
      analysis.suggestions.push("Use consistent bullet point style");
    }
    if (!hasProfessionalStructure) {
      analysis.issues.push("Non-standard CV structure");
      analysis.suggestions.push("Follow standard CV section order");
    }

    return analysis;
  };

  // Detailed Experience Analysis Function
  const analyzeExperience = (text) => {
    const analysis = {
      score: 0,
      issues: [],
      suggestions: [],
      experienceDetails: {
        totalExperience: 0,
        gaps: [],
        progression: true,
      },
    };

    // Extract experience sections
    const experienceRegex =
      /(experience|work|employment).*?(\d{4}|\d{2}\/\d{2}|\d{2}\.\d{2})/gi;
    const experienceMatches = text.match(experienceRegex) || [];
    analysis.experienceDetails.totalExperience = experienceMatches.length;

    // Check for experience gaps
    const dates = text.match(/(\d{4}|\d{2}\/\d{2}|\d{2}\.\d{2})/g) || [];
    if (dates.length >= 2) {
      for (let i = 0; i < dates.length - 1; i++) {
        const gap = calculateDateGap(dates[i], dates[i + 1]);
        if (gap > 6) {
          // Gap more than 6 months
          analysis.experienceDetails.gaps.push({
            start: dates[i],
            end: dates[i + 1],
            duration: gap,
          });
        }
      }
    }

    // Check for career progression
    const hasProgression = checkCareerProgression(text);
    analysis.experienceDetails.progression = hasProgression;

    // Calculate experience score with non-negative values
    const baseScore = analysis.experienceDetails.totalExperience * 25;
    const gapPenalty = analysis.experienceDetails.gaps.length * 20;
    const progressionBonus = hasProgression ? 50 : 0;

    // Ensure the score doesn't go below 0
    analysis.score = Math.max(0, baseScore - gapPenalty + progressionBonus);

    // Add issues and suggestions
    if (analysis.experienceDetails.gaps.length > 0) {
      analysis.issues.push("Experience gaps detected");
      analysis.suggestions.push("Consider explaining career gaps in your CV");
    }
    if (!hasProgression) {
      analysis.issues.push("Unclear career progression");
      analysis.suggestions.push(
        "Highlight career progression and achievements",
      );
    }

    return analysis;
  };

  // Language Analysis Function
  const analyzeLanguage = (text) => {
    const analysis = {
      score: 0,
      issues: [],
      suggestions: [],
      languageDetails: {
        actionVerbs: [],
        passiveVoice: 0,
        technicalTerms: [],
      },
    };

    // Check for action verbs
    const actionVerbs = [
      "achieved",
      "developed",
      "created",
      "implemented",
      "managed",
      "increased",
      "decreased",
      "improved",
      "led",
      "coordinated",
      "designed",
      "built",
      "launched",
      "optimized",
      "resolved",
    ];

    actionVerbs.forEach((verb) => {
      if (text.toLowerCase().includes(verb)) {
        analysis.languageDetails.actionVerbs.push(verb);
      }
    });

    // Check for passive voice
    const passiveVoicePattern =
      /\b(am|is|are|was|were|be|been|being)\s+\w+ed\b/gi;
    const passiveMatches = text.match(passiveVoicePattern) || [];
    analysis.languageDetails.passiveVoice = passiveMatches.length;

    // Check for technical terms
    const technicalTerms = [
      "algorithm",
      "database",
      "framework",
      "api",
      "protocol",
      "architecture",
      "system",
      "network",
      "security",
      "cloud",
    ];

    technicalTerms.forEach((term) => {
      if (text.toLowerCase().includes(term)) {
        analysis.languageDetails.technicalTerms.push(term);
      }
    });

    // Calculate language score
    analysis.score += analysis.languageDetails.actionVerbs.length * 10;
    analysis.score -= analysis.languageDetails.passiveVoice * 5;
    analysis.score += analysis.languageDetails.technicalTerms.length * 15;

    // Add issues and suggestions
    if (analysis.languageDetails.passiveVoice > 3) {
      analysis.issues.push("Excessive use of passive voice");
      analysis.suggestions.push(
        "Use active voice to make your achievements more impactful",
      );
    }
    if (analysis.languageDetails.actionVerbs.length < 5) {
      analysis.issues.push("Limited use of action verbs");
      analysis.suggestions.push(
        "Include more action verbs to describe your achievements",
      );
    }

    return analysis;
  };

  // Helper function to calculate date gap in months
  const calculateDateGap = (date1, date2) => {
    // Simple implementation - can be enhanced for more accurate date parsing
    return Math.abs(parseInt(date2) - parseInt(date1));
  };

  // Helper function to check career progression
  const checkCareerProgression = (text) => {
    const progressionKeywords = [
      "promoted",
      "advanced",
      "senior",
      "lead",
      "manager",
      "director",
      "head",
      "chief",
      "principal",
      "architect",
    ];

    return progressionKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword),
    );
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
    <div className="space-y-8 px-4 sm:px-0">
      {/* Title and Description */}
      <div className="text-center relative mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-700/20 blur-[100px] -z-10" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
            {translations.tools.atsCalculator.title}
          </span>
        </h2>
        <p className="text-blue-400/70 max-w-2xl mx-auto text-sm sm:text-base px-2">
          {translations.tools.atsCalculator.description}
        </p>
      </div>

      {/* Job Selection */}
      <Card className="bg-slate-900/50 border border-blue-400/20">
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4">
            <div className="text-center text-blue-400 mb-4 text-sm sm:text-base">
              Select your target job role
            </div>
            <div className="relative">
              <Select
                onValueChange={setSelectedJob}
                value={selectedJob}
                onOpenChange={handleSelectOpenChange}
              >
                <SelectTrigger className="w-full bg-slate-800/50 border-blue-400/20 text-sm sm:text-base">
                  <SelectValue placeholder="Select a job role" />
                </SelectTrigger>
                <SelectContent className="max-h-[80vh] sm:max-h-[300px]">
                  <div className="flex items-center px-3 pb-2 sticky top-0 bg-slate-900/95 z-10 w-full">
                    <Search className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                    <Input
                      ref={searchInputRef}
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                      className="bg-slate-800/50 border-blue-400/20 text-blue-400 w-full text-sm sm:text-base"
                    />
                  </div>
                  <div className="overflow-y-auto">
                    {filteredJobs.map(([job, { description }]) => (
                      <SelectItem
                        key={job}
                        value={job}
                        className="hover:bg-slate-800/50 focus:bg-slate-800/50 text-sm sm:text-base"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">{job}</span>
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
          </div>
        </CardContent>
      </Card>

      {/* Upload Section */}
      <Card className="bg-slate-900/50 border border-blue-400/20">
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center w-full">
              <label
                htmlFor="cv-upload"
                className="flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-blue-400/20 border-dashed rounded-lg cursor-pointer bg-slate-800/50 hover:bg-slate-800/70"
              >
                <div className="flex flex-col items-center justify-center pt-4 sm:pt-5 pb-4 sm:pb-6">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 text-blue-400"
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
                  <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-blue-400">
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
              <div className="text-center text-blue-400 text-sm sm:text-base">
                {translations.tools.atsCalculator.upload.selectedFile}{" "}
                {file.name}
              </div>
            )}

            {error && (
              <div className="text-center text-red-400 text-sm sm:text-base">
                {error}
              </div>
            )}

            <div className="flex justify-center">
              <Button
                onClick={calculateATSScore}
                disabled={!file || !selectedJob || loading}
                className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:from-blue-500 hover:to-blue-800 transition-all duration-300 text-sm sm:text-base px-6 py-2"
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
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-center text-blue-400">
                  {translations.tools.atsCalculator.results.title}
                </h3>
                <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                  {/* Overall Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                      Overall Match
                    </h4>
                    <Progress value={scores.overall} className="h-3 sm:h-4" />
                    <div className="text-xl sm:text-2xl font-bold text-blue-400 text-center">
                      {scores.overall}%
                    </div>
                  </div>

                  {/* Tech Skills Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                      Technical Skills Match
                    </h4>
                    <Progress value={scores.tech} className="h-3 sm:h-4" />
                    <div className="text-xl sm:text-2xl font-bold text-blue-400 text-center">
                      {scores.tech}%
                    </div>
                  </div>

                  {/* Regular Skills Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                      Skills Match
                    </h4>
                    <Progress value={scores.skills} className="h-3 sm:h-4" />
                    <div className="text-xl sm:text-2xl font-bold text-blue-400 text-center">
                      {scores.skills}%
                    </div>
                  </div>

                  {/* Berk's Special Score */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400 flex items-center justify-center gap-2">
                      <span>Berk's Special Score</span>
                      <span className="text-yellow-400">®</span>
                    </h4>
                    <Progress
                      value={(scores.berkScore / 1000) * 100}
                      className="h-3 sm:h-4"
                    />
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400 text-center">
                      {scores.berkScore}/1000
                    </div>
                    <div className="text-xs sm:text-sm text-blue-400/70 space-y-2">
                      <p className="text-center">
                        ® This score is a proprietary algorithm developed by
                        Berk. It is not a traditional score and is not
                        comparable to other scores.
                      </p>
                    </div>
                  </div>

                  {/* Format Analysis */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                      CV Format Analysis
                    </h4>
                    <Progress value={scores.format} className="h-3 sm:h-4" />
                    <div className="text-xl sm:text-2xl font-bold text-blue-400 text-center">
                      {scores.format}/150
                    </div>
                    {scores.formatAnalysis.issues.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h5 className="text-blue-400 font-medium text-sm sm:text-base">
                          Issues Found:
                        </h5>
                        <ul className="list-disc list-inside text-red-400/80 text-xs sm:text-sm">
                          {scores.formatAnalysis.issues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                          ))}
                        </ul>
                        <h5 className="text-blue-400 font-medium mt-2 text-sm sm:text-base">
                          Suggestions:
                        </h5>
                        <ul className="list-disc list-inside text-green-400/80 text-xs sm:text-sm">
                          {scores.formatAnalysis.suggestions.map(
                            (suggestion, index) => (
                              <li key={index}>{suggestion}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Experience Analysis */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                      Experience Analysis
                    </h4>
                    <Progress
                      value={scores.experience}
                      className="h-3 sm:h-4"
                    />
                    <div className="text-xl sm:text-2xl font-bold text-blue-400 text-center">
                      {scores.experience}/200
                    </div>
                    <div className="mt-4 space-y-2 text-xs sm:text-sm">
                      <div className="text-blue-400/80">
                        Total Experience:{" "}
                        {
                          scores.experienceAnalysis.experienceDetails
                            .totalExperience
                        }{" "}
                        positions
                      </div>
                      {scores.experienceAnalysis.experienceDetails.gaps.length >
                        0 && (
                        <div className="text-red-400/80">
                          Career Gaps:{" "}
                          {
                            scores.experienceAnalysis.experienceDetails.gaps
                              .length
                          }{" "}
                          detected
                        </div>
                      )}
                      <div className="text-blue-400/80">
                        Career Progression:{" "}
                        {scores.experienceAnalysis.experienceDetails.progression
                          ? "Clear"
                          : "Unclear"}
                      </div>
                    </div>
                    {scores.experienceAnalysis.issues.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h5 className="text-blue-400 font-medium text-sm sm:text-base">
                          Issues Found:
                        </h5>
                        <ul className="list-disc list-inside text-red-400/80 text-xs sm:text-sm">
                          {scores.experienceAnalysis.issues.map(
                            (issue, index) => (
                              <li key={index}>{issue}</li>
                            ),
                          )}
                        </ul>
                        <h5 className="text-blue-400 font-medium mt-2 text-sm sm:text-base">
                          Suggestions:
                        </h5>
                        <ul className="list-disc list-inside text-green-400/80 text-xs sm:text-sm">
                          {scores.experienceAnalysis.suggestions.map(
                            (suggestion, index) => (
                              <li key={index}>{suggestion}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Language Analysis */}
                  <div className="w-full max-w-md space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                      Language Analysis
                    </h4>
                    <Progress value={scores.language} className="h-3 sm:h-4" />
                    <div className="text-xl sm:text-2xl font-bold text-blue-400 text-center">
                      {scores.language}/150
                    </div>
                    <div className="mt-4 space-y-2 text-xs sm:text-sm">
                      <div className="text-blue-400/80">
                        Action Verbs Used:{" "}
                        {
                          scores.languageAnalysis.languageDetails.actionVerbs
                            .length
                        }
                      </div>
                      <div className="text-blue-400/80">
                        Technical Terms:{" "}
                        {
                          scores.languageAnalysis.languageDetails.technicalTerms
                            .length
                        }
                      </div>
                      <div className="text-blue-400/80">
                        Passive Voice Instances:{" "}
                        {scores.languageAnalysis.languageDetails.passiveVoice}
                      </div>
                    </div>
                    {scores.languageAnalysis.issues.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h5 className="text-blue-400 font-medium text-sm sm:text-base">
                          Issues Found:
                        </h5>
                        <ul className="list-disc list-inside text-red-400/80 text-xs sm:text-sm">
                          {scores.languageAnalysis.issues.map(
                            (issue, index) => (
                              <li key={index}>{issue}</li>
                            ),
                          )}
                        </ul>
                        <h5 className="text-blue-400 font-medium mt-2 text-sm sm:text-base">
                          Suggestions:
                        </h5>
                        <ul className="list-disc list-inside text-green-400/80 text-xs sm:text-sm">
                          {scores.languageAnalysis.suggestions.map(
                            (suggestion, index) => (
                              <li key={index}>{suggestion}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="text-base sm:text-lg text-blue-400/70">
                    Match for: {selectedJob}
                  </div>

                  <p className="text-center text-blue-400/70 text-sm sm:text-base">
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
