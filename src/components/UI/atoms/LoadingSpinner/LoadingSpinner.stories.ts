import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

const meta = {
  title: "atoms/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["atoms", "LoadingSpinner", "autodocs"],
  argTypes: {
    color: { control: "color" },
    size: { control: "text" },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#000",
    size: "50px",
  },
};
