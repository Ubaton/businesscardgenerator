import Image from "next/image";
import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import ShareIcon from "../../../public/assets/icons/ShareSVG.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShareSVG = ({ cardRef }) => {
  const shareBusinessCard = async () => {
    try {
      if (navigator.share) {
        const cardImage = await createCardImage();
        if (cardImage) {
          await navigator.share({
            title: "My Business Card",
            text: "Check out my business card!",
            files: [cardImage],
          });
        } else {
          toast.error("Failed to create the business card image.");
        }
      } else {
        toast.warn("Web Share API is not supported in your browser.");
      }
    } catch (error) {
      console.error("Error sharing: " + error.message);
    }
  };

  const createCardImage = async () => {
    try {
      const cardBlob = await htmlToImage.toBlob(cardRef.current);

      if (cardBlob) {
        return new File([cardBlob], "business_card.png", { type: "image/png" });
      } else {
        toast.error("Failed to create the business card image.");
        return null;
      }
    } catch (error) {
      console.error("Error creating the card image:", error);
      toast.error(
        "Failed to create the business card image. Check the console for details."
      );
      return null;
    }
  };

  return (
    <div>
      <button onClick={shareBusinessCard}>
        <Image
          src={ShareIcon}
          alt="Share-Icon"
          priority={true}
          width={52}
          height={52}
        />
      </button>
    </div>
  );
};

export default ShareSVG;
