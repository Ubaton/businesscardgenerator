import Image from "next/image";
import React, { useRef } from "react";
import Share from "../../../public/assets/icons/ShareSVG.png";

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
          alert("Failed to create the business card image.");
        }
      } else {
        alert("Web Share API is not supported in your browser.");
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
      const cardBlob = await htmlToImage.toBlob(cardElement, {
        width: cardElement.offsetWidth,
        height: cardElement.offsetHeight,
      });

      return new File([cardBlob], "business_card.png", { type: "image/png" });
    } catch (error) {
      console.error("Error creating the card image: " + error.message);
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
