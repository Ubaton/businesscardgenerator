import React from "react";

const ShareSVG = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        fill="none"
        viewBox="0 0 52 52"
      >
        <path fill="url(#a)" d="M0 0h52v52H0z" />
        <defs>
          <pattern
            id="a"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use href="#b" transform="scale(.01042)" />
          </pattern>
          <image
            id="b"
            width="96"
            height="96"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default ShareSVG;
