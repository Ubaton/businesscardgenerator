import DownloadButton from "@/constants/DownloadButton/page";
import React, { useState } from "react";

const BusinessCard = ({ name, title, company, email, phone, logo }) => {
  const styleOptions = [
    {
      name: "Style 1",
      className: "bg-amber-500 p-4 rounded-md shadow-md",
    },
    {
      name: "Style 2",
      className: "bg-blue-500 p-4 rounded-lg shadow-sm",
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
    <div className="flex flex-row">
      <div className="mt-4">
        <p>Choose a Style:</p>
        <div className="flex flex-col space-x-4">
          {styleOptions.map((style, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                style.className
              } border border-black p-2 rounded-md ${
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
        <div className="py-4">
          <DownloadButton />
        </div>
      </div>
      <div className="w-auto">
        <div
          className={`flex items-center w-[410px] h-[200px] ${selectedStyle.className}`}
        >
          <div className="flex flex-row items-center">
            <div className="text-zinc-900 space-y-1 ">
              <p className="text-md font-bold">{company}</p>
              <h2 className="text-md ">{name}</h2>
              <p className="text-md">{title}</p>
              <p className="text-md"> {phone}</p>
              <p className="text-md">{email}</p>
            </div>
            {logo && (
              <img
                src={URL.createObjectURL(logo)}
                alt="Logo"
                className="mx-auto h-14"
              />
            )}
          </div>
        </div>
        <div
          className={`flex items-center justify-center w-[410px] h-[200px] ${selectedStyle.className}`}
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
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
