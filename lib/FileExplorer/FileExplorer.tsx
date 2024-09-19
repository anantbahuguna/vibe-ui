import { ReactNode, useState } from "react";
import { FolderIcon } from "./Icons/FolderIcon";
import { FileIcon } from "./Icons/FileIcon";
import { ChevronRightIcon } from "./Icons/ChevronRightIcon";

interface IFileExplorerProps {
  nodes: Node[];
  className?: string;
}

export type Node = {
  id: string;
  name: string;
  nodes?: Node[];
};

interface INodeProps {
  node: Node;
}

export const FileExplorer = ({
  nodes,
  className,
}: IFileExplorerProps): ReactNode => {
  return (
    <div className={`${className && className}`}>
      <ul>
        {nodes.map((node) => (
          <Node node={node} key={node.id} />
        ))}
      </ul>
    </div>
  );
};

const Node = ({ node }: INodeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isParentNode = Boolean(node.nodes);
  const hasChildren = Boolean(isParentNode && node.nodes?.length);
  return (
    <li className="my-1">
      <span className="flex gap-2">
        {isParentNode ? (
          <span className="flex gap-0.5 items-center">
            {hasChildren ? (
              <button onClick={() => setIsOpen(!isOpen)}>
                <ChevronRightIcon
                  className={`size-4 ${isOpen && "rotate-90"}`}
                />
              </button>
            ) : null}
            <FolderIcon className="fill-sky-400" />
          </span>
        ) : (
          <FileIcon className="fill-yellow-500" />
        )}{" "}
        {node.name}
      </span>
      {hasChildren && isOpen ? (
        <ul className="pl-6">
          {node.nodes?.map((childNode) => (
            <Node node={childNode} key={childNode.id} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};
