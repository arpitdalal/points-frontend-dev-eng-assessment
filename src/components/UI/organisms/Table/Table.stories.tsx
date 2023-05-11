import type { Meta, StoryObj } from "@storybook/react";
import Table, { type TableData } from ".";

const data = [
  [
    {
      heading: true,
      value: "Cell 1",
    },
    {
      heading: true,
      value: "Cell 2",
    },
    {
      heading: true,
      value: "Cell 3",
    },
  ],
  [
    {
      heading: false,
      value: "Cell 1",
    },
    {
      heading: false,
      value: "Cell 2",
    },
    {
      heading: false,
      value: "Cell 3",
    },
  ],
] satisfies TableData;

const meta = {
  title: "organisms/Table",
  component: Table,
  tags: ["organisms", "Table", "autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data,
    backgroundColor: "white",
    borderColor: "black",
    color: "black",
  },
};
