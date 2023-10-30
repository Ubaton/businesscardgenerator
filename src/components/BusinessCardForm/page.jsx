import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

const BusinessCardForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogoChange = (e) => {
    const logoFile = e.target.files[0];
    setFormData({ ...formData, logo: logoFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center text-zinc-700 py-4"
    >
      <div className="mb-4 rounded-xl bg-gradient-to-t from-blue-200 to-purple-200 border-4 border-purple-600">
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            name="logo"
            onChange={handleLogoChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="w-[230px] p-2 h-[150px] flex flex-col items-center justify-center rounded-md cursor-pointer"
          >
            {formData.logo ? (
              <img
                src={URL.createObjectURL(formData.logo)}
                alt="Selected Logo"
                className="h-20 mb-2"
              />
            ) : (
              <div className="">
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
            )}
            <span></span>
            <span className="text-zinc-700">Upload Logo</span>
            <span className="text-zinc-100 text-xs">
              Drag and drop your Logo here
            </span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Contact Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border rounded-lg p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-tr from-blue-600 to-purple-600 text-white p-2 px-4 rounded-full"
      >
        Generate Card
      </button>
    </form>
  );
};

export default BusinessCardForm;
