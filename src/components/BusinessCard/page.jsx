import DownloadButton from "@/constants/DownloadButton/page";
import React, { useState } from "react";

const BusinessCard = ({ name, title, company, email, phone, logo }) => {
  const styleOptions = [
    {
      name: "Style 1",
      className: "bg-amber-500 p-4 rounded-lg shadow-md",
    },
    {
      name: "Style 2",
      className: "bg-blue-500 p-4 rounded-lg shadow-md",
    },
    {
      name: "Style 3",
      className: "bg-gray-500 p-4 rounded-lg shadow-md",
    },
    {
      name: "Style 4",
      className: "bg-rose-500 p-4 rounded-lg shadow-md",
    },
  ];

  const [selectedStyle, setSelectedStyle] = useState(styleOptions[0]);

  return (
    <div className="flex flex-row gap-10">
      <div className="mt-4">
        <p className="text-center">Style Selection</p>
        <div className="flex flex-col justify-center items-center space-x-4 space-y-4">
          {styleOptions.map((style, index) => (
            <div
              key={index}
              className={`h-24 w-52 cursor-pointer ${
                style.className
              } border border-black rounded-md ${
                selectedStyle === style
                  ? "border-blue-600"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedStyle(style)}
            >
              {style.name}
            </div>
          ))}
        </div>
      </div>
      <div className="w-auto p-4 space-y-6">
        <div
          className={`flex items-center w-[390px] h-[200px] ${selectedStyle.className}`}
        >
          <div className="flex flex-row items-center">
            <div className="text-zinc-900 space-y-1 ">
              <p className="text-md font-bold">{company}</p>
              <h2 className="text-md ">{name}</h2>
              <p className="text-md">{title}</p>
              <p className="text-md"> {phone}</p>
              <p className="text-md">{email}</p>
            </div>

            <div className="p-4">
              {logo && (
                <img
                  src={URL.createObjectURL(logo)}
                  alt="Logo"
                  className="mx-auto h-16"
                />
              )}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center w-[390px] h-[200px] ${selectedStyle.className}`}
        >
          <div className="flex flex-row items-center">
            {logo && (
              <img
                src={URL.createObjectURL(logo)}
                alt="Logo"
                className="mx-auto h-32"
              />
            )}
          </div>
          <p className="text-md font-bold text-zinc-900 pt-2">{company}</p>
        </div>
        <div className="flex items-center justify-center">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
