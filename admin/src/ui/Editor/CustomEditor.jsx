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
import {gql} from "@apollo/client"
export default function Editor() {
    const editorRef = useRef(null);
    const [editorData, setEditorData] = useState(null);
    const initEditor = () => {
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
            editorRef.current = editor;
          },
          onChange: () => {
            console.log("Content was changed");
          },
          onSave: () => {
            console.log("Content was saved");
          },
        });
    };
    const handleSave = async () => {
      // 1. GQL mutation to create a blog post in Fauna
      const CREATE_POST = gql`
        mutation CreatePost($content: String!, $slug: String!) {
          createPost(data: {published: true, content: $content, slug: $slug}) {
            content
            slug
            published
          }
        }
      `;
      // 2. Get the content from the editor
      const outputData = await editorRef.current.save();
      // 3. Get blog title to create a slug
      for (let i = 0; i < outputData.blocks.length; i++) {
        if (
          outputData.blocks[i].type === "header" &&
          outputData.blocks[i].data.level === 2
        ) {
          var title = outputData.blocks[i].data.text;
          break;
        }
      }
      const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
      //3. Pass the content to the mutation and create a new blog post
      const { data } = await apolloClient.mutate({
        mutation: CREATE_POST,
        variables: {
          content: JSON.stringify(outputData),
          slug: slug,
        },
      });
    };
    useEffect(() => {
        if(!editorRef.current) {
            initEditor();
        }
    }, []);
    return (
      <div>
        <div id="editorjs" />
        <div className="flex justify-center -mt-30 mb-20">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center px-12 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    );
}