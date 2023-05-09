import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "atoms/Button",
  component: Button,
  tags: ["atoms", "Button", "autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    loading: false,
    color: "white",
  },
};
