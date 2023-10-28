import React, { useState } from "react";

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
      className="flex flex-col justify-center items-center text-zinc-700 p-4"
    >
      <div className="mb-4 rounded-xl bg-gradient-to-t from-blue-300 to-purple-300 border-4 border-purple-600">
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
              <div className="h-20 mb-2 text-zinc-400" />
            )}
            <span></span>
            <span className="text-zinc-700">Upload Logo</span>
            <span className="text-zinc-300 text-xs">
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

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Generate Business Card
      </button>
    </form>
  );
};

export default BusinessCardForm;
