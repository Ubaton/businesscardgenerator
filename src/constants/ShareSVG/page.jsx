import Image from "next/image";
import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import Share from "../../../public/assets/icons/ShareSVG.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShareSVG = () => {
  const cardRef = useRef();

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
    const cardElement = cardRef.current;
    if (!cardElement) {
      return null;
    }

    try {
      const cardBlob = await htmlToImage.toBlob(cardElement);

      if (cardBlob) {
        return new File([cardBlob], "business_card.png", { type: "image/png" });
      } else {
        toast.error("Failed to create the business card image.");
        return null;
      }
    } catch (error) {
      console.error("Error creating the card image: " + error.message);
      toast.error("Failed to create the business card image.");
      return null;
    }
  };

  return (
    <div>
      <button onClick={shareBusinessCard} disabled>
        <Image
          src={Share}
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
