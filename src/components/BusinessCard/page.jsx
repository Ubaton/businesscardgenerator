import DownloadButton from "@/constants/DownloadButton/page";
import React, { useState, useEffect, useRef } from "react";
import styleOptions from "./StyleOptions/stylesOptions.js";
import Image from "next/image";
import { LuChevronDownCircle } from "react-icons/lu";
import { LuChevronUpCircle } from "react-icons/lu";
import {
  BsBuildings,
  BsPerson,
  BsEnvelopeAt,
  BsTelephone,
  BsStar,
  BsFileEarmarkPdf,
} from "react-icons/bs";
import ShareSVG from "@/constants/ShareSVG/page.jsx";
import * as htmlToImage from "html-to-image";
import ExportAsPDF from "@/constants/ExportAsPDF/page.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const moveItemsUp = () => {
    const element = document.querySelector(".style-carousel");
    if (element) {
      element.scrollTop -= 70;
    }
  };

  const moveItemsDown = () => {
    const element = document.querySelector(".style-carousel");
    if (element) {
      element.scrollTop += 70;
    }
  };

  // Function to capture the Business Card as an image
  const captureBusinessCardImage = () => {
    if (cardRef.current) {
      htmlToImage
        .toPng(cardRef.current)
        .then((dataUrl) => {})
        .catch((error) => {
          toast.error("Failed to capture the image:", error);
        });
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-row items-center justify-center gap-5 pb-4">
          <LuChevronDownCircle
            className="md:hidden text-2xl"
            onClick={moveItemsDown}
          />
          <div className="flex flex-col justify-center items-center">
            <div
              className="style-carousel space-y-4"
              onWheel={handleMouseWheel}
              style={{
                overflowY: "hidden",
                height: "520px",
              }}
            >
              {scrollStyleOptions.map((style, index) => (
                <div
                  key={index}
                  className={`h-24 w-52 cursor-pointer ${
                    style.className
                  } border border-black rounded-xl ${
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
          <LuChevronUpCircle
            className="md:hidden text-2xl"
            onClick={moveItemsUp}
          />
        </div>
        <div className="w-auto space-y-6">
          <div id="business-card" className="space-y-6" ref={cardRef}>
            {/* The Front of your Business Card */}
            <div
              className={`flex items-center rounded-xl w-[320px] h-[180px] ${selectedStyle.className}`}
            >
              <div className="flex flex-row items-center">
                <div className="text-zinc-900 space-y-1">
                  <h1 className="text-lg font-bold">{company}</h1>
                  <p className="flex flex-row items-center gap-2 text-sm">
                    <BsStar />
                    {title}
                  </p>
                  <p className="flex flex-row items-center gap-2 text-sm">
                    <BsPerson />
                    {name}
                  </p>
                  <p className="flex flex-row items-center gap-2 text-sm">
                    <BsTelephone />
                    {phone}
                  </p>
                  <p className="flex flex-row items-center gap-2 text-sm">
                    <BsEnvelopeAt />
                    {email}
                  </p>
                </div>

                <div className="p-1">
                  {logo && (
                    <Image
                      src={URL.createObjectURL(logo)}
                      alt="Logo"
                      className="mx-auto"
                      width={96}
                      height={96}
                      priority={true}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* The back of the Business Card */}
            <div
              className={`flex flex-col items-center rounded-xl justify-center w-[320px] h-[180px] ${selectedStyle.className}`}
            >
              <div className="flex flex-row items-center">
                {logo && (
                  <Image
                    src={URL.createObjectURL(logo)}
                    alt="Logo"
                    className="mx-auto"
                    width={128}
                    height={128}
                    priority={true}
                  />
                )}
              </div>
              <p className="text-md font-bold text-zinc-900 pt-2">{company}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <DownloadButton cardRef={cardRef} />
            <button
              id="export-button"
              className="bg-gradient-to-tr from-blue-600 to-purple-600 text-white p-2 px-4 rounded-full"
            >
              <ExportAsPDF />
              <span className="flex flex-row items-center justify-center gap-2">
                Export PDF <BsFileEarmarkPdf />
              </span>
            </button>
          </div>

          <span
            className="flex items-center justify-end"
            onClick={captureBusinessCardImage}
          >
            <ShareSVG />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
