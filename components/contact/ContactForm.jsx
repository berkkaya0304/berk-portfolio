"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
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
        "SxOOOhi_LC1TpP44r"
      );
      alert("Email sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      alert("Today's limit is finished. Please try again tomorrow.");
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
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
            <Input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
            <Input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
            <Input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange}
              className="bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400"
            />
          </div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="bg-white/5 border-0 focus:ring-1 focus:ring-blue-400">
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a Service</SelectLabel>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="Cloud">Cloud</SelectItem>
                <SelectItem value="Data">Data</SelectItem>
                <SelectItem value="Digitalisation">Digitalisation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea 
            name="message" 
            className="h-[180px] resize-none bg-white/5 border-0 focus-visible:ring-1 focus-visible:ring-blue-400" 
            placeholder="Type your message here" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <Button 
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-blue-700 text-white hover:opacity-90"
          >
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 