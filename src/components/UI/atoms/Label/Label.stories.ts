import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "atoms/Label",
  component: Label,
  tags: ["atoms", "Label", "autodocs"],
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email",
    htmlFor: "email",
  },
};
