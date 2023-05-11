import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";

const meta = {
  title: "molecules/ErrorMessage",
  component: ErrorMessage,
  tags: ["molecules", "ErrorMessage", "autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an error",
  },
};
