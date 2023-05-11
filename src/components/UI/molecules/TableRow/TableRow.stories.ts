import type { Meta, StoryObj } from "@storybook/react";
import TableRow from ".";
import { Row } from "./TableRow";

const row = [
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
] satisfies Array<Row>;
const headingRow = [
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
] satisfies Array<Row>;

const meta = {
  title: "molecules/TableRow",
  component: TableRow,
  tags: ["molecules", "TableRow", "autodocs"],
  args: {
    backgroundColor: "white",
    color: "black",
  },
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    row,
  },
};

export const HeadingRow: Story = {
  args: {
    row: headingRow,
  },
};
