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

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mwtogzd",
        "template_3fb1h4k",
        formData,
        "SxOOOhi_LC1TpP44r"
      )
      .then(() => {
        alert("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Today's limit is finished. Please try again tomorrow.");
      });
  };

  return (
    <div className="min-h-[400px]">
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded w-1/2"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
          <h3 className="text-4xl text-accent">Let&apos;s work together!</h3>
          <p className="text-white/60">Using this contact form, you can easily reach out to me with any questions, concerns, or feedback you may have.</p>
          <p className="text-white/60">Thank you for reaching out. I look forward to hearing from you!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" name="firstName" placeholder="First Name:" value={formData.firstName} onChange={handleChange} required />
            <Input type="text" name="lastName" placeholder="Last Name:" value={formData.lastName} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Email Address:" value={formData.email} onChange={handleChange} required />
            <Input type="text" name="phone" placeholder="Phone Number:" value={formData.phone} onChange={handleChange} />
          </div>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a Service!</SelectLabel>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="Cloud">Cloud</SelectItem>
                <SelectItem value="Data">Data</SelectItem>
                <SelectItem value="Digitalisation">Digitalisation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea name="message" className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleChange} required />
          <Button type="submit" size="md" className="max-w-40">
            Send message
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 