import React, { useState } from "react";
import { useCreateStep } from "@shared/lib/hooks/useCreateStep";

import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  DraftStyleMap,
  AtomicBlockUtils,
} from "draft-js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faImage,
  faExpand,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";

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

interface CreateStepProps {
  courseID: string | any;
  moduleNum: string | any;
  lessonNum: string | any;
}

const TextEditor: React.FC<CreateStepProps> = ({
  courseID,
  moduleNum,
  lessonNum,
}) => {
  const [isFullscreen, setFullScreen] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { createStep } = useCreateStep();

  // Create Step
  const saveContent = (editorState: any) => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);

    const formattedContent = rawContent.blocks.map((block) => {
      const text = block.text;
      let imageUrl = "";

      if (block.type === "atomic") {
        const entityKey = block.entityRanges[0]?.key;
        const entity = contentState.getEntity(entityKey);
        if (entity.getType().toUpperCase === "IMAGE") {
          imageUrl = entity.getData().src;
        }
      }

      return {
        step_title: "Step title here",
        step_content: text,
        content_num: block.key,
        content_type: block.type,
        ...(imageUrl && { image: imageUrl }),
      };
    });

    createStep(formattedContent, courseID, moduleNum, lessonNum);
  };

  // Full Window

  const openFullScreen = () => {
    setFullScreen(!isFullscreen);
  };

  // Toolbar

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

  const onSectionClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "section"));
  };

  // Content
  const addImage = (editorState: any, url: any) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      { src: url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
  };

  const mediaBlockRenderer = (block: any) => {
    if (block.getType() === "atomic") {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  };

  const Media = (props: any) => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src } = entity.getData();
    const type = entity.getType();

    let media;
    if (type === "IMAGE") {
      media = <img src={src} alt="" />;
    }

    return media;
  };

  const handleImageUpload = (files: FileList | any) => {
    if (files.length === 0) {
      return;
    }
    const file = files[0];
    if (file.type.indexOf("image/") === 0) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const base64Image = e.target?.result;
        if (typeof base64Image === "string") {
          const newEditorState = addImage(editorState, base64Image);
          setEditorState(newEditorState);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={isFullscreen ? "editor-absolute" : "editor"}>
      <div
        className={
          isFullscreen ? "editor-absolute__toolbar" : "editor__toolbar"
        }
      >
        <button
          onClick={onBoldClick}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__bold"
              : "editor__toolbar__bold"
          }
        >
          <strong>B</strong>
        </button>
        <button
          onClick={onItalicClick}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__italic ml-2"
              : "editor__toolbar__italic ml-2"
          }
        >
          <i>I</i>
        </button>
        <button
          onClick={onUnderlineClick}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__underline ml-2"
              : "editor__toolbar__underline ml-2"
          }
        >
          <span className="underline">U</span>
        </button>
        <button
          onClick={onCodeClick}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__code ml-2"
              : "editor__toolbar__code ml-2"
          }
        >
          <FontAwesomeIcon icon={faCode} />
        </button>
        <span
          className={
            isFullscreen
              ? "editor-absolute__toolbar__separator"
              : "editor__toolbar__separator"
          }
        />
        <button
          onClick={onH1Click}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__heading ml-2"
              : "editor__toolbar__heading ml-2"
          }
        >
          <strong>H1</strong>
        </button>
        <button
          onClick={onH2Click}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__heading ml-2"
              : "editor__toolbar__heading ml-2"
          }
        >
          <strong>H2</strong>
        </button>
        <button
          onClick={onH3Click}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__heading ml-2"
              : "editor__toolbar__heading ml-2"
          }
        >
          <strong>H3</strong>
        </button>
        <button
          onClick={onH4Click}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__heading ml-2"
              : "editor__toolbar__heading ml-2"
          }
        >
          <strong>H4</strong>
        </button>
        <button
          onClick={onH5Click}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__heading ml-2"
              : "editor__toolbar__heading ml-2"
          }
        >
          <strong>H5</strong>
        </button>
        <button
          onClick={onH6Click}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__heading ml-2"
              : "editor__toolbar__heading ml-2"
          }
        >
          <strong>H6</strong>
        </button>
        <button
          onClick={onSectionClick}
          className={
            isFullscreen
              ? "editor-absolute__toolbar__heading ml-2"
              : "editor__toolbar__heading ml-2"
          }
        >
          <strong>P</strong>
        </button>
        <span
          className={
            isFullscreen
              ? "editor-absolute__toolbar__separator"
              : "editor__toolbar__separator"
          }
        />
        <label
          className={
            isFullscreen
              ? "editor-absolute__toolbar__image"
              : "editor__toolbar__image"
          }
          htmlFor="image-for-editor"
        >
          <FontAwesomeIcon icon={faImage} />
        </label>

        <input
          accept="image/*"
          id="image-for-editor"
          type="file"
          style={{ display: "none" }}
          multiple
          onChange={(e) => handleImageUpload(e.target.files)}
        ></input>
        <span
          className={
            isFullscreen
              ? "editor-absolute__toolbar__separator"
              : "editor__toolbar__separator"
          }
        />
        <button
          className={
            isFullscreen
              ? "editor-absolute__toolbar__create-step"
              : "editor__toolbar__create-step"
          }
        >
          Создать шаг
        </button>
        <span
          className={
            isFullscreen
              ? "editor-absolute__toolbar__separator"
              : "editor__toolbar__separator"
          }
        />
        <button
          className={
            isFullscreen
              ? "editor-absolute__toolbar__expand"
              : "editor__toolbar__expand"
          }
          onClick={openFullScreen}
        >
          <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
        </button>
      </div>
      <div
        className={
          isFullscreen ? "editor-absolute__text-editor" : "editor__text-editor"
        }
      >
        <Editor
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
          blockRendererFn={mediaBlockRenderer}
          placeholder="Пишите здесь... :)"
        />
      </div>
    </div>
  );
};

export default TextEditor;
