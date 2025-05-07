"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function PersonalBrand() {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    skills: "",
    experience: "",
    education: "",
    interests: "",
    goals: "",
    values: "",
    achievements: "",
    personality: "",
  });

  const [apiKey, setApiKey] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/personal-brand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, apiKey }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
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
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
            {translations.personalBrand.title}
          </h1>
          <p className="text-blue-400/80 text-lg max-w-2xl mx-auto">
            {translations.personalBrand.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
              <Card className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <CardHeader className="border-b border-blue-400/20">
                  <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                    {translations.personalBrand.fields.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-blue-400/80">
                          {translations.personalBrand.fields.name}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-blue-400/80">
                          {translations.personalBrand.fields.profession}
                        </label>
                        <Input
                          name="profession"
                          value={formData.profession}
                          onChange={handleChange}
                          required
                          className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.skills}
                      </label>
                      <Textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.experience}
                      </label>
                      <Textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.education}
                      </label>
                      <Textarea
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.interests}
                      </label>
                      <Textarea
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.goals}
                      </label>
                      <Textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.values}
                      </label>
                      <Textarea
                        name="values"
                        value={formData.values}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.achievements}
                      </label>
                      <Textarea
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.personality}
                      </label>
                      <Textarea
                        name="personality"
                        value={formData.personality}
                        onChange={handleChange}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-400/80">
                        {translations.personalBrand.fields.apiKey}
                      </label>
                      <Input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        required
                        className="bg-slate-900/50 border-blue-400/20 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/40 rounded-lg"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      {isLoading
                        ? translations.personalBrand.messages.analyzing
                        : translations.personalBrand.messages.analyze}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
              <Card className="relative bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <CardHeader className="border-b border-blue-400/20">
                  <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
                    {translations.personalBrand.results.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {result ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">
                          {translations.personalBrand.results.summary}
                        </h3>
                        <p className="text-blue-400/80">{result.summary}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">
                          {translations.personalBrand.results.strengths}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-blue-400/80">
                          {result.strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">
                          {
                            translations.personalBrand.results
                              .areasForImprovement
                          }
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-blue-400/80">
                          {result.areasForImprovement.map((area, index) => (
                            <li key={index}>{area}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">
                          {translations.personalBrand.results.recommendations}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-blue-400/80">
                          {result.recommendations.map(
                            (recommendation, index) => (
                              <li key={index}>{recommendation}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <p className="text-blue-400/80 text-center">
                      {translations.personalBrand.results.noAnalysis}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
