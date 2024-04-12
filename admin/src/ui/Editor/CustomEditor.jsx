import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Paragraph from "@editorjs/paragraph";
import Codebox from "@bomdi/codebox";

export default function Editor({ onEditorDataChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holderId: "editorjs",
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["marker", "link"],
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3
          },
          shortcut: "CMD+SHIFT+H",
        },
        image: Image,
        code: Code,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        raw: Raw,
        inlineCode: InlineCode,
        list: {
          class: List,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+L",
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
          shortcut: "CMD+SHIFT+O",
        },
        warning: Warning,
        marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        delimiter: Delimiter,
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+C",
        },
        linkTool: LinkTool,
        embed: Embed,
        codebox: Codebox,
        table: {
          class: Table,
          inlineToolbar: true,
          shortcut: "CMD+ALT+T",
        },
      },
      // autofocus: true,
      placeholder: "Write your story...",
      data: {
        blocks: [
          {
            type: "header",
            data: {
              text: "New blog post title here....",
              level: 2,
            },
          },
          {
            type: "paragraph",
            data: {
              text: "Blog post introduction here....",
            },
          },
        ],
      },
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      onChange: async () => {
        const editorData = await editor.save();
        onEditorDataChange(editorData);
      },
      onSave: () => {
        console.log("Content was saved");
      },
    });

    editorRef.current = editor;

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === 'function') {
        editorRef.current.destroy();
      }
    };
  }, [onEditorDataChange]);

  return (
    <div>
      <div id="editorjs" />
    </div>
  );
}
