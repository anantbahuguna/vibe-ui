import type { Meta, StoryObj } from "@storybook/react";
import { FileExplorer, Node } from "./FileExplorer";

const meta: Meta<typeof FileExplorer> = {
  component: FileExplorer,
};

export default meta;

type Story = StoryObj<typeof FileExplorer>;

const Nodes: Node[] = [
  {
    id: "1",
    name: "Home",
    nodes: [
      {
        id: "11",
        name: "Movies",
        nodes: [
          {
            id: "12",
            name: "2000s",
            nodes: [
              {
                id: "23",
                name: "Shawshank Redemption",
              },
              {
                id: "44",
                name: "Dark Knight",
              },
            ],
          },
        ],
      },
      {
        id: "33",
        name: "TV Shows",
        nodes: [],
      },
    ],
  },
  {
    id: "211",
    name: "Local",
    nodes: [
      {
        id: "222",
        name: "config.txt",
      },
    ],
  },
];

export const Default: Story = {
  args: {
    nodes: Nodes,
    className: "fs",
  },
};
