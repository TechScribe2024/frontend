import React, {useState} from "react";
import Header from "../../components/header";
import { FaTimes } from 'react-icons/fa';

const CreateBlog = () => {
  const [imageSrc, setImageSrc] = useState(null); // State to hold the image source

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // Set the image source to display
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const removeImage = () => {
    setImageSrc(null); // Reset the image source
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-5">
        <form className="bg-black p-6 rounded-lg shadow-lg w-full max-w-5xl">
          <label className="block mb-6">
            <span className="block text-5xl font-bold italic mb-2">
              Title
            </span>
            <input
              type="text"
              className="w-2/3 p-2 rounded bg-black text-white placeholder-gray-400"
              placeholder="Enter your title here"
            />
          </label>
          <label className="block mb-6">
            <span className="block text-xl font-bold mb-2">Content</span>
            <textarea
              className="w-full p-8 border border-white rounded bg-black text-white placeholder-gray-400"
              placeholder="Enter your content here..."
              style={{ height: '60vh', padding: '5%' }}
            />
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
            <div className="mb-6">
              <img src={imageSrc} alt="Uploaded Preview" className="w-full h-auto rounded-md shadow-md" />
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
    </>
  );
};

export default CreateBlog;