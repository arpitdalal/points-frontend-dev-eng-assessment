import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "atoms/Input",
  component: Input,
  tags: ["atoms", "Input", "autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    backgroundColor: "white",
    color: "black",
  },
};
