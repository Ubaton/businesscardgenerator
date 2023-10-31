import React from "react";
import * as htmlToImage from "html-to-image";
import { BsDownload } from "react-icons/bs";
BsDownload;

const DownloadButton = ({ cardRef }) => {
  const handleDownload = () => {
    if (cardRef.current) {
      htmlToImage
        .toPng(cardRef.current)
        .then((dataUrl) => {
          // Create a temporary anchor element to trigger the download
          const a = document.createElement("a");
          a.href = dataUrl;
          a.download = "Business-Card.png";
          a.click();
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <button
          onClick={handleDownload}
          className="bg-gradient-to-tr from-blue-600 to-purple-600 text-white p-2 px-4 rounded-full"
        >
          <span className="flex flex-row items-center gap-2">
            Download Card
            <BsDownload />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DownloadButton;
