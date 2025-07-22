"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_mwtogzd",
        "template_3fb1h4k",
        formData,
        "SxOOOhi_LC1TpP44r",
      );
      alert(translations.contact.form.successMessage);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      alert(translations.contact.form.errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full">
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-accent/10 rounded w-3/4"></div>
          <div className="h-32 bg-accent/10 rounded"></div>
          <div className="h-10 bg-accent/10 rounded w-1/2"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              name="firstName"
              placeholder={translations.contact.form.firstName}
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
            <Input
              type="text"
              name="lastName"
              placeholder={translations.contact.form.lastName}
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
            <Input
              type="email"
              name="email"
              placeholder={translations.contact.form.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
            <Input
              type="text"
              name="phone"
              placeholder={translations.contact.form.phone}
              value={formData.phone}
              onChange={handleChange}
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
          </div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="bg-white/5 border-0 focus:ring-1 focus:ring-blue-400">
              <SelectValue
                placeholder={translations.contact.form.selectService}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>
                  {translations.contact.form.selectService}
                </SelectLabel>
                <SelectItem value="Web Development">
                  {translations.services.fullstack.title}
                </SelectItem>
                <SelectItem value="Cloud">
                  {translations.services.cloud.title}
                </SelectItem>
                <SelectItem value="Data">
                  {translations.services.data.title}
                </SelectItem>
                <SelectItem value="Digitalisation">
                  {translations.services.digitalization.title}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            name="message"
            className="h-[180px] resize-none bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            placeholder={translations.contact.form.message}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:opacity-90"
          >
            {translations.contact.form.submit}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
