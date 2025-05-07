"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/context/TranslationsContext";
import { FaCalculator, FaSpinner } from "react-icons/fa";

const ATSCalculator = () => {
  const { translations } = useTranslations();
  const [jobTitle, setJobTitle] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setIsLoading(true);
    setError(null);
    setScore(null);

    try {
      // Simüle edilmiş ATS hesaplama
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const mockScore = Math.floor(Math.random() * 100);
      setScore(mockScore);
    } catch (err) {
      setError(translations.atsCalculator?.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <FaCalculator className="text-6xl text-blue-500" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {translations.atsCalculator?.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {translations.atsCalculator?.description}
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {translations.atsCalculator?.jobTitle}
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder={translations.atsCalculator?.jobTitlePlaceholder}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {translations.atsCalculator?.resumeText}
                </label>
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder={
                    translations.atsCalculator?.resumeTextPlaceholder
                  }
                  rows={8}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCalculate}
                disabled={isLoading || !jobTitle || !resumeText}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    {translations.atsCalculator?.loading}
                  </>
                ) : (
                  translations.atsCalculator?.calculate
                )}
              </motion.button>
            </div>

            {/* Results */}
            {score !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {translations.atsCalculator?.score}: {score}%
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                      {translations.atsCalculator?.suggestions}
                    </h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Add more relevant keywords</li>
                      <li>Improve readability</li>
                      <li>Optimize formatting</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
              >
                {error}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ATSCalculator;
