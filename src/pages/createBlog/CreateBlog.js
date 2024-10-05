import React, { useRef, useState } from "react";
import Header from "../../components/common/header/header";
import { Editor, createEditorState } from "medium-draft";
import { AtomicBlockUtils, EditorState, convertToRaw } from "draft-js";
import 'medium-draft/lib/index.css';
import "./CreateBlog.css";
// Image block component to render images
const ImageComponent = (props) => {
  const { block, contentState } = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src } = entity.getData();

  return (
    <div>
      <img src={src} alt="Uploaded" style={{ maxWidth: '100%' }} />
    </div>
  );
};

// Block renderer function to handle atomic blocks
const blockRendererFn = (block) => {
  if (block.getType() === 'atomic') {
    return {
      component: ImageComponent,
      editable: false, // Atomic blocks like images are not editable directly
    };
  }
  return null;
};

const CreateBlog = () => {
  const [editorState, setEditorState] = useState(() => createEditorState());

  const handleImageChange = (e, getEditorState, setEditorState) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const editorState = getEditorState();
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
          'IMAGE',
          'IMMUTABLE',
          { src: reader.result } // Image source is the base64 data
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
          editorState,
          entityKey,
          ' '
        );

        setEditorState(EditorState.forceSelection(newEditorState, newEditorState.getSelection()));
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };
  
  // Custom Side Button for Adding Images
  const ImageSideButton = ({ getEditorState, setEditorState }) => {
    let inputRef = useRef()

    const onClick = () => {
      inputRef.current.click()
    };

    const onFileChange = (e) => {
      handleImageChange(e, getEditorState, setEditorState); // Pass get and set editor state
    };

    return (
      <div>
        <button
          onClick={onClick}
          className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          +
        </button>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={inputRef}
          onChange={onFileChange}
        />
      </div>
    );
  };
  
  // Editor side buttons (including custom image button)
  const sideButtons = [{
    title: 'Add Image',
    component: ImageSideButton, // Register the custom image button
  }];

  // Handle content submission (just for demonstration, you can expand this later)
  const handleSubmit = (e) => {
    e.preventDefault();
    const rawContent = convertToRaw(editorState.getCurrentContent());
    console.log(rawContent); 
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
                  blockRendererFn={blockRendererFn}
                />
              </div>
            </div>
          </label>

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