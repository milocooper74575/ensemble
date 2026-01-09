import {
  type ReactNodeViewProps,
  NodeViewContent,
  NodeViewWrapper,
} from "@tiptap/react";
import { FC } from "react";

const Component: FC<ReactNodeViewProps<HTMLLabelElement>> = ({}) => {
  return (
    <NodeViewWrapper className="react-component">
      <label contentEditable={false}>React Component</label>

      <NodeViewContent className="content is-editable" />
    </NodeViewWrapper>
  );
};

export default Component;
