import React from "react";
import * as htmlToImage from "html-to-image";

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
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white p-2 rounded-lg"
    >
      Download Business Card
    </button>
  );
};

export default DownloadButton;
