import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "atoms/Heading",
  component: Heading,
  tags: ["atoms", "Heading", "autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "Heading 1",
    type: "h1",
    color: "black",
  },
};
export const H2: Story = {
  args: {
    children: "Heading 2",
    type: "h2",
    color: "black",
  },
};
export const H3: Story = {
  args: {
    children: "Heading 3",
    type: "h3",
    color: "black",
  },
};
export const H4: Story = {
  args: {
    children: "Heading 4",
    type: "h4",
    color: "black",
  },
};
export const H5: Story = {
  args: {
    children: "Heading 5",
    type: "h5",
    color: "black",
  },
};
export const H6: Story = {
  args: {
    children: "Heading 6",
    type: "h6",
    color: "black",
  },
};
