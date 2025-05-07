"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaLinkedinIn } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

const PersonalBrand = () => {
  const { translations } = useLanguage();
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gptRecommendation, setGptRecommendation] = useState("");
  const [error, setError] = useState("");

  const analyzeWithGemini = async (text, type = "full") => {
    const prompts = {
      analysis: `As a professional LinkedIn profile optimization expert, analyze this LinkedIn profile content and provide:
        1. A profile strength score (0-100%)
        2. A list of 5 key recommendations for improvement
        Format the response as JSON with the following structure:
        {
          "profileStrength": "X%",
          "recommendations": ["rec1", "rec2", "rec3", "rec4", "rec5"]
        }
        
        Profile content:
        ${text}`,
      detailed: `As a professional LinkedIn profile optimization expert, analyze this LinkedIn profile content and provide detailed recommendations. Focus on:
        1. Profile strength and overall impression
        2. Skills and expertise presentation
        3. Experience and achievements
        4. Content strategy
        5. Network growth opportunities
        
        Profile content:
        ${text}
        
        Provide specific, actionable recommendations in a structured format.`,
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-001:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompts[type],
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to analyze profile");
    }

    const data = await response.json();
    const result = data.candidates[0].content.parts[0].text;

    if (type === "analysis") {
      try {
        return JSON.parse(result);
      } catch (e) {
        console.error("Failed to parse Gemini response:", e);
        throw new Error("Failed to parse profile analysis");
      }
    }

    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setGptRecommendation("");

    try {
      // Validate inputs
      if (!linkedinUrl.trim()) {
        throw new Error("Please enter a LinkedIn profile URL");
      }
      if (!apiKey.trim()) {
        throw new Error("Please enter your Google Gemini API key");
      }

      // Simulate LinkedIn profile content (in a real app, you would fetch this from LinkedIn)
      const profileContent = `
        Senior Software Engineer with 5+ years of experience in web development.
        Specialized in React, Node.js, and cloud technologies.
        Led multiple successful projects and mentored junior developers.
        Passionate about creating scalable and maintainable applications.
        Strong problem-solving skills and team collaboration.
      `;

      // Get initial profile analysis
      const profileAnalysis = await analyzeWithGemini(
        profileContent,
        "analysis"
      );
      setRecommendations(profileAnalysis);

      // Get detailed recommendations from Gemini
      const geminiAnalysis = await analyzeWithGemini(
        profileContent,
        "detailed"
      );
      setGptRecommendation(geminiAnalysis);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "An error occurred while analyzing your profile");
      setGptRecommendation("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primary via-background to-background relative overflow-hidden py-20"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            LinkedIn Profile Analysis
          </h1>
          <p className="text-blue-400/80 text-lg max-w-2xl mx-auto">
            Get personalized recommendations to enhance your professional
            presence
          </p>
        </motion.div>

        {/* Form and Results */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 w-full">
                  <FaLinkedinIn className="text-2xl text-blue-400 flex-shrink-0" />
                  <Input
                    type="url"
                    placeholder="Enter your LinkedIn profile URL"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className="bg-white/5 border-blue-400/20 text-blue-300 placeholder:text-blue-300/50 w-full"
                    required
                  />
                </div>
                <div className="flex items-center gap-4 w-full">
                  <FaKey className="text-2xl text-blue-400 flex-shrink-0" />
                  <Input
                    type="password"
                    placeholder="Enter your Google Gemini API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-white/5 border-blue-400/20 text-blue-300 placeholder:text-blue-300/50 w-full"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white"
                  disabled={loading}
                >
                  {loading ? "Analyzing..." : "Get Recommendations"}
                </Button>
              </div>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
            >
              <p className="text-red-400">{error}</p>
            </motion.div>
          )}

          {/* Recommendations */}
          {recommendations && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-8"
            >
              {/* Profile Analysis */}
              <div className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                  Your Profile Analysis
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300">Profile Strength</span>
                    <span className="text-2xl font-bold text-blue-400">
                      {recommendations.profileStrength}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-300">
                      Recommendations
                    </h3>
                    <ul className="space-y-3">
                      {recommendations.recommendations.map((rec, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-blue-300/80"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          {rec}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gemini Recommendations */}
              {gptRecommendation && (
                <div className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                    AI-Powered Insights
                  </h2>
                  <div className="space-y-4">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-blue-300/80 whitespace-pre-line">
                        {gptRecommendation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PersonalBrand;
