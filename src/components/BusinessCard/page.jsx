import DownloadButton from "@/constants/DownloadButton/page";
import React, { useState, useEffect, useRef } from "react";
import styleOptions from "./StyleOptions/stylesOptions.json";

const BusinessCard = ({ name, title, company, email, phone, logo }) => {
  const cardRef = useRef();
  const [selectedStyle, setSelectedStyle] = useState(styleOptions[0]);
  const itemsToShow = 50;

  const scrollStyleOptions = styleOptions.slice(0, itemsToShow);

  const handleMouseWheel = (e) => {
    const element = document.querySelector(".style-carousel");
    if (element) {
      element.scrollTop += e.deltaY;
    }
  };

  useEffect(() => {
    // When the component mounts on the client side, update the class
    const clientSelectedStyle = styleOptions.find(
      (style) => style === selectedStyle
    );
    if (clientSelectedStyle) {
      setSelectedStyle(clientSelectedStyle);
    }
  }, [selectedStyle]);

  return (
    <div className="flex flex-row justify-center items-center gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center mt-4">
          <div
            className="style-carousel space-y-4"
            onWheel={handleMouseWheel}
            style={{
              overflowY: "hidden",
              height: "450px",
            }}
          >
            {scrollStyleOptions.map((style, index) => (
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
        <div className="w-auto py-4 space-y-6">
          <div className="space-y-6" ref={cardRef}>
            <div
              className={`flex items-center w-[320px] h-[180px] ${selectedStyle.className}`}
            >
              <div className="flex flex-row items-center">
                <div className="text-zinc-900 space-y-2 ">
                  <p className="text-lg font-bold">{company}</p>
                  <h2 className="text-sm">{name}</h2>
                  <p className="text-sm">{title}</p>
                  <p className="text-sm"> {phone}</p>
                  <p className="text-sm">{email}</p>
                </div>

                <div className="p-1">
                  {logo && (
                    <img
                      src={URL.createObjectURL(logo)}
                      alt="Logo"
                      className="mx-auto w-24"
                      priority={true}
                    />
                  )}
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col items-center justify-center w-[320px] h-[180px] ${selectedStyle.className}`}
            >
              <div className="flex flex-row items-center">
                {logo && (
                  <img
                    src={URL.createObjectURL(logo)}
                    alt="Logo"
                    className="mx-auto h-32"
                    priority={true}
                  />
                )}
              </div>
              <p className="text-md font-bold text-zinc-900 pt-2">{company}</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <DownloadButton cardRef={cardRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
