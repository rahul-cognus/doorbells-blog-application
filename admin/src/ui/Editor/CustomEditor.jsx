'use client';

import EditorJs from 'react-editor-js';
import CheckList from '@editorjs/checklist';
import CodeBox from '@bomdi/codebox';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import Header from '@editorjs/header';
import ColorPlugin from 'editorjs-text-color-plugin';

import { imageUpload } from '@/api/image';
import { base_url_image } from '@/constants';
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';

const CustomEditor = ({ data, imageArray, handleInstance }) => {
  const axiosAuth = useAxiosAuth();

  const EDITOR_JS_TOOLS = {
    embed: Embed,
    header: Header,
    table: Table,
    list: List,
    warning: Warning,
    codeBox: CodeBox,
    linkTool: LinkTool,
    image: {
      class: Image,
      config: {
        uploader: {
          uploadByFile(file) {
            let formData = new FormData();
            formData.append('images', file);
            return imageUpload(axiosAuth, formData).then((res) => {
              // pushing image path to image array
              imageArray.push(base_url_image + res.data.data);
              return {
                success: 1,
                file: {
                  url: base_url_image + res.data.data,
                },
              };
            });
          },
        },
      },
    },
    raw: Raw,
    quote: Quote,
    marker: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
        defaultColor: '#FFBF00',
        type: 'marker',
      },
    },
    color: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
        colorCollections: [
          '#FF1300',
          '#EC7878',
          '#9C27B0',
          '#673AB7',
          '#3F51B5',
          '#0070FF',
          '#03A9F4',
          '#00BCD4',
          '#4CAF50',
          '#8BC34A',
          '#CDDC39',
          '#FFF',
        ],
        defaultColor: '#FF1300',
        type: 'text',
      },
    },
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
  };

  return (
    <EditorJs
      instanceRef={(instance) => handleInstance(instance)}
      tools={EDITOR_JS_TOOLS}
      data={data}
      placeholder={`Write article from here...`}
    />
  );
};

export default CustomEditor;