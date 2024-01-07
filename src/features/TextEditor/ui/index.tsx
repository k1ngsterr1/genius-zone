import React, { useState } from "react";
import { Editor, EditorState, RichUtils, DraftStyleMap } from "draft-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "draft-js/dist/Draft.css";
import "./styles.scss";

const styleMap: DraftStyleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
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

  const onCodeClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "CODE"));
  };

  // Headings

  const onH1Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
  };

  const onH2Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-two"));
  };

  const onH3Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-three"));
  };

  const onH4Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-four"));
  };

  const onH5Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-five"));
  };

  const onH6Click = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "header-six"));
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
          className="editor__toolbar__underline ml-2"
        >
          <span className="underline">U</span>
        </button>
        <button onClick={onCodeClick} className="editor__toolbar__code ml-2">
          <FontAwesomeIcon icon={faCode} />
        </button>
        <span className="editor__toolbar__separator"></span>
        <button onClick={onH1Click} className="editor__toolbar__heading ml-2">
          <strong>H1</strong>
        </button>
        <button onClick={onH2Click} className="editor__toolbar__heading ml-2">
          <strong>H2</strong>
        </button>
        <button onClick={onH3Click} className="editor__toolbar__heading ml-2">
          <strong>H3</strong>
        </button>
        <button onClick={onH4Click} className="editor__toolbar__heading ml-2">
          <strong>H4</strong>
        </button>
        <button onClick={onH5Click} className="editor__toolbar__heading ml-2">
          <strong>H5</strong>
        </button>
        <button onClick={onH6Click} className="editor__toolbar__heading ml-2">
          <strong>H6</strong>
        </button>
        <button onClick={onCodeClick} className="editor__toolbar__heading ml-2">
          <strong>P</strong>
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
