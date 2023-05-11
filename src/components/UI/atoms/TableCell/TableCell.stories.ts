import type { Meta, StoryObj } from "@storybook/react";
import TableCell from "./TableCell";

const meta = {
  title: "atoms/TableCell",
  component: TableCell,
  tags: ["atoms", "TableCell", "autodocs"],
  args: {
    color: "black",
  },
} satisfies Meta<typeof TableCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: false,
    value: "A cell",
  },
};

export const Th: Story = {
  args: {
    heading: true,
    value: "A heading cell",
  },
};
