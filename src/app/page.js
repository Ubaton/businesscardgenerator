"use client";

import React, { useState } from "react";
import BusinessCard from "@/components/BusinessCard/page";
import BusinessCardForm from "@/components/BusinessCardForm/page";
import Pettens from "../../public/assets/images/Patten.png";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const handleFormSubmit = (formData) => {
    setFormData(formData);
  };

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
  });

  return (
    <main className="flex flex-col min-h-screen items-center justify-between pb-12">
      <h1 className="text-4xl text-center font-semibold text-transparent z-10 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 bg-clip-text">
        Business Card Generator
      </h1>

      <div className="z-10 max-w-5xl lg:flex bg-zinc-800 border-2 border-purple-600 rounded-3xl px-4 pt-4 pb-0">
        <BusinessCardForm onSubmit={handleFormSubmit} />
        <BusinessCard {...formData} />
      </div>
      <div className="fixed left-0 top-0">
        <Image
          src={Pettens}
          alt="Petten"
          priority={true}
          width={"full"}
          height={"100vh"}
        />
      </div>

      <footer className="fixed bottom-4 text-center text-sm text-zinc-500">
        Powered By{" "}
        <Link
          href="https://creativemg.netlify.app/"
          className="text-violet-500 hover:underline"
          target="_blank"
        >
          Creative Mind Graphics (Pty) Ltd
        </Link>{" "}
        | Copyright © 2023, All Rights Reserved
      </footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
