import React, { useState } from "react";
import { Editor, EditorState, RichUtils, DraftStyleMap } from "draft-js";
import "./styles.scss";
import "draft-js/dist/Draft.css";

const styleMap: DraftStyleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  // Add your custom styles here
};

const TextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  return (
    <div className="editor">
      <div className="editor__toolbar">
        <button onClick={onBoldClick} className="editor__toolbar__bold">
          <strong>B</strong>
        </button>
        <button
          onClick={onItalicClick}
          className="editor__toolbar__italic ml-2"
        >
          <i>I</i>
        </button>
        <button
          onClick={onUnderlineClick}
          className="editor__toolbar__italic ml-2"
        >
          <span className="underline">U</span>
        </button>
      </div>
      <div
        className="editor__text-editor"
        style={{
          border: "1px solid black",
          padding: "2px",
        }}
      >
        <Editor
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

export default TextEditor;
