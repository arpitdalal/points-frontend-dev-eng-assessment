import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";

const meta = {
  title: "atoms/ErrorMessage",
  component: ErrorMessage,
  tags: ["atoms", "ErrorMessage", "autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an error",
  },
};