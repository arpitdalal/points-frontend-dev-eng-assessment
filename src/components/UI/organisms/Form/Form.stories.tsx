import type { Meta, StoryObj } from "@storybook/react";
import Form from ".";

const meta = {
  title: "organisms/Form",
  component: Form,
  tags: ["organisms", "Form", "autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
