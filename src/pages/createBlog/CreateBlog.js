import React, { useEffect, useState } from "react";
import Header from "../../components/common/header/header";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateBlog = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    console.log("is authenticated,", isAuthenticated);
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const removeImage = () => {
    setImageSrc(null);
  };

  const addImage = () => {};

  const notify = () => {
    toast.success("Blog Created Successfully!!", {
      position: "top-center",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notify();
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-5">
        <form
          onSubmit={handleSubmit}
          className="bg-black p-6 rounded-lg shadow-lg w-full max-w-5xl"
        >
          <label className="block mb-6">
            <span className="block text-5xl font-bold italic mb-2">Title</span>
            <input
              type="text"
              className="w-2/3 p-2 rounded bg-black text-white placeholder-gray-400"
              placeholder="Enter your title here"
            />
          </label>
          <label className="block mb-6">
            <span className="block text-xl font-bold mb-2 ">Content</span>
            <div className="relative">
              {/* <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-black">
                <h1 className="text-xl text-white" onClick={addImage}>
                  +
                </h1>
              </div> */}
              <textarea
                className="w-full p-8 border border-white rounded bg-black text-white placeholder-gray-400"
                placeholder="Enter your content here..."
                style={{ height: "60vh", padding: "5%", paddingTop: "50px" }} // Adjust padding to avoid overlap
              />
            </div>
          </label>
          <label className="block mb-6">
            <span className="block text-xl font-bold mb-2">Add Image</span>
            <input
              type="file"
              accept="image/*"
              className="w-full text-white"
              onChange={handleImageChange}
            />
          </label>
          {imageSrc && ( // Render the image if imageSrc is not null
            <div className="mb-6 h-[100px]">
              <img
                src={imageSrc}
                alt="Uploaded Preview"
                className="h-[100px] w-[100px]  rounded-md shadow-md"
              />
              <button
                onClick={removeImage} // Call removeImage to remove the image
                // className="absolute top-2 right-2 rounded-full p-1 hover:bg-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 mt-6 text-lg font-bold text-black bg-white rounded hover:bg-gray-200"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateBlog;
