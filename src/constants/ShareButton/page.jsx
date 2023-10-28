import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const SocialShareButton = ({ url, title }) => {
  return (
    <div>
      <div>
        <FacebookShareButton url={url} title={title}>
          <button className="bg-blue-700 text-white p-2 rounded-lg">
            Share on Facebook
          </button>
        </FacebookShareButton>
      </div>
      <div>
        <TwitterShareButton url={url} title={title}>
          <button className="bg-blue-400 text-white p-2 rounded-lg">
            Share on Twitter
          </button>
        </TwitterShareButton>
      </div>
      <div>
        <LinkedinShareButton url={url} title={title}>
          <button className="bg-blue-800 text-white p-2 rounded-lg">
            Share on LinkedIn
          </button>
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SocialShareButton;
