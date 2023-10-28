"use client";

import React, { useState } from "react";
import BusinessCard from "@/components/BusinessCard/page";
import BusinessCardForm from "@/components/BusinessCardForm/page";

export default function Home() {
  const handleFormSubmit = (formData) => {
    setFormData(formData);
    console.log("Form Data:", formData);
  };

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
  });

  return (
    <main className="flex flex-col min-h-screen items-center justify-between pb-16">
      <h1 className="text-4xl font-semibold">Business Card</h1>
      <div className="max-w-5xl w-full items-center justify-between lg:flex p-8 bg-red rounded-xl">
        <BusinessCardForm onSubmit={handleFormSubmit} />
        <BusinessCard {...formData} />
      </div>
    </main>
  );
}
