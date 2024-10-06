import React, { useRef, useState } from "react";
import Header from "../../components/common/header/header";
import { Editor, createEditorState, ImageSideButton } from "medium-draft";
import 'medium-draft/lib/index.css';
import "./CreateBlog.css";

const CreateBlog = () => {
  const [editorState, setEditorState] = useState(() => createEditorState());

  // Custom Side Button for Adding Images
  // const ImageSideButton = (props) => {
  //   let inputRef = useRef();

  //   const onClick = () => {
  //     inputRef.current.click();
  //   };

  //   const onFileChange = (e) => {
  //     handleImageChange(e); // Handle image change without passing getEditorState/setEditorState
  //   };

  //   return (
  //     <div>
  //       <button
  //         onClick={onClick}
  //         className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
  //       >
  //         +
  //       </button>
  //       <input
  //         type="file"
  //         accept="image/*"
  //         style={{ display: 'none' }}
  //         ref={inputRef}
  //         onChange={onFileChange}
  //       />
  //     </div>
  //   );
  // };

  // Editor side buttons (including custom image button)
  const sideButtons = [{
    title: 'Add Image',
    component: ImageSideButton, // Register the custom image button
  }];

  // Handle content submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    // const rawContent = convertToRaw(editorState.getCurrentContent());
    // console.log(rawContent); // Log the raw content for submission
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
            <span className="block text-xl font-bold mb-2">Content</span>
            <div className="relative">
              <div className="editor-container">
                <Editor
                  editorState={editorState}
                  onChange={setEditorState}
                  placeholder="Enter your content here..."
                  sideButtons={sideButtons}
                />
              </div>
            </div>
          </label>
          <div className="flex justify-center">
          <button
            type="submit"
            className="w-64 py-3 mt-6 text-lg font-bold text-black bg-white rounded hover:bg-gray-200"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;