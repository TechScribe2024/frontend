import React from "react";
import Header from "../../components/header";

const CreateBlog = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-5">
        <form className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md">
          <label className="block mb-4">
            <span className="block text-sm font-bold mb-1">Title</span>
            <input
              type="text"
              className="w-full p-2 border border-white rounded bg-black text-white placeholder-gray-400"
              placeholder="Enter your title here"
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-bold mb-1">Content</span>
            <textarea
              className="w-full p-2 border border-white rounded bg-black text-white placeholder-gray-400 h-[60vh]"
              placeholder="Enter your content here..."
              rows={4}
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-lg font-bold text-black bg-white rounded hover:bg-gray-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
