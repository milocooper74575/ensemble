import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./Component";

export default Node.create({
  name: "reactComponent",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      count: { default: 0 },
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => {
        return this.editor
          .chain()
          .insertContentAt(this.editor.state.selection.head, {
            type: this.type.name,
          })
          .focus()
          .run();
      },
    };
  },
  parseHTML() {
    return [{ tag: "react-component" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["react-component", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
