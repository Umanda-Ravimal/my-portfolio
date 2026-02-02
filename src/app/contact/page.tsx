"use client";

import Image from "next/image";
import backdropImage from "@/assets/images/backdrop.png";
import contactImage from "@/assets/images/contactImage.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-[85vh] bg-white font-sans dark:bg-black">
      {/* Left side - Contact Form */}
      <main className="flex-1 flex flex-col justify-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-heading dark:text-heading">Let's </span>
              <span className="text-primary dark:text-primary">Talk.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-text dark:text-text mt-2">
              Have a question or want to work together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you're looking for a developer, have a collaboration in mind, or just want to connect, feel free to reach out!
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border-0 bg-gray-100 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="border-0 bg-gray-100 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={4}
                className="w-full px-4 py-2 border-0 bg-gray-100 dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                required
              />
            </div>
            <Button type="submit" variant="primary" className="w-full sm:w-auto mt-2 bg-primary text-background hover:opacity-90">
              Send Message
            </Button>
          </form>
        </div>
      </main>

      {/* Right side - Backdrop Image with Home Image on top */}
      <div className="hidden lg:block w-2/5 relative overflow-hidden bg-black">
        {/* Backdrop Image - Background layer */}
        <Image
          src={backdropImage}
          alt="Backdrop"
          className="object-cover object-center top-13 absolute"
          priority
          style={{ height: "85%" }}
        />
        {/* Home Image - Foreground layer */}
        <Image
          src={contactImage}
          alt="Contact"
          style={{ height: "95%", width: "92%" }}
          className="object-contain object-center absolute"
          priority
        />
      </div>
    </div>
  );
}

