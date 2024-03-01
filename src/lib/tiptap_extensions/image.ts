// import { mergeAttributes, Node } from "@tiptap/core";

// export interface ImageOptions {
//   HTMLAttributes: Record<string, any>;
// }

// declare module "@tiptap/core" {
//   interface Commands<ReturnType> {
//     image: {
//       /**
//        * Add an image
//        */
//       setImage: (options: {
//         src: string;
//         alt?: string;
//         title?: string;
//       }) => ReturnType;
//     };
//   }
// }

// const Image = Node.create<ImageOptions>({
//   name: "image",

//   addOptions() {
//     return { HTMLAttributes: {} };
//   },

//   draggable: true,

//   addAttributes() {
//     return {
//       src: {
//         default: null,
//       },
//       alt: {
//         default: null,
//       },
//       title: {
//         default: null,
//       },
//     };
//   },

//   parseHTML() {
//     return [
//       {
//         tag: "img[src]",
//       },
//     ];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return [
//       "img",
//       mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
//     ];
//   },

//   addCommands() {
//     return {
//       setImage:
//         (options) =>
//         ({ commands }) => {
//           return commands.insertContent({
//             type: this.name,
//             attrs: options,
//           });
//         },
//     };
//   },
// });

import { mergeAttributes, Node } from "@tiptap/core";

export interface ImageOptions {
  allowBase64: boolean;
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    image: {
      /**
       * Add an image
       */
      setImage: (options: {
        src: string;
        alt?: string;
        title?: string;
      }) => ReturnType;
    };
  }
}

const Image = Node.create<ImageOptions>({
  // type in schema
  name: "image",

  // default options
  addOptions() {
    return {
      allowBase64: false,
      HTMLAttributes: {},
    };
  },

  // defining the node as a block
  group: "block",

  draggable: true,

  // attrs to include in the schema
  addAttributes() {
    return {
      id: {
        default: 1,
      },
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    };
  },

  // CSS selector to parse HTML content and convert it to a ProseMirror node
  parseHTML() {
    return [
      {
        tag: "img[src]",
      },
    ];
  },

  // Rendered HTML content of ProseMirror node
  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  // Add commands to the editor
  addCommands() {
    return {
      setImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});

export default Image;
